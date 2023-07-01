import User from "@/model/User"
import router from "next/router"
import { createContext, useEffect, useState } from "react"
import firebase from '@/firebase/config';
import Cookies from 'js-cookie'

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({})

const formatUser = async (user: firebase.User): Promise<User> => {
  const token = await user.getIdToken()
  return {
    uid: user.uid,
    email: user.email ?? '',
    name: user.displayName ?? '',
    token,
    provider: user.providerData[0]?.providerId ?? '',
    imageUrl: user.photoURL ?? ''
  }
}

const genCookie = (login: boolean) => {
  if (login) {
    Cookies.set('admin-template-w2k-auth', login ? 'true' : 'false', {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-w2k-auth')
  }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)

  const sessionUser = async (user: firebase.User | null) => {
    if (user?.email) {
      const userFormated = await formatUser(user)
      setUser(userFormated)
      genCookie(true)
      setLoading(false)
      return userFormated.email
    } else {
      setUser(undefined)
      genCookie(false)
      setLoading(false)
      return false
    }
  }

  const loginGoogle = async () => {
    const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    await sessionUser(response.user)
    router.push('/')
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(sessionUser)
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
