import User from "@/model/User"
import router from "next/router"
import { createContext, useState } from "react"
import firebase from '@/firebase/config';

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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()

  const loginGoogle = async () => {
    const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    if (response.user?.email) {
      const user = await formatUser(response.user as firebase.User)
      setUser(user)
      router.push('/')
    }
  }

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
