import firebase from '@/firebase/config';
import User from "@/model/User";
import Cookies from 'js-cookie';
import router from "next/router";
import { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  entryLoginEmailPassword?: (email: string, password: string) => Promise<void>;
  loginEmailPassword?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({})

/**
 * Formats a user object retrieved from Firebase authentication.
 *
 * @param {firebase.User} user - The user object to format.
 * @return {Promise<User>} A Promise that resolves to the formatted user object.
 */
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

/**
 * Generates a cookie based on the login status.
 *
 * @param {boolean} login - The login status.
 * @return {void} No return value.
 */
const genCookie = (login: boolean): void => {
  if (login) {
    Cookies.set('admin-template-w2k-auth', login ? 'true' : 'false', {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-w2k-auth')
  }
}

/**
 * An authentication provider component that wraps the children components.
 *
 * @param {AuthProviderProps} children - The children components to be wrapped.
 * @return {JSX.Element} The JSX element representing the provider.
 */
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)

  /**
   * Retrieves the session user and performs necessary operations.
   *
   * @param {firebase.User | null} user - The user object representing the session user.
   * @return {Promise<string | boolean>} The email of the session user or false if no user is present.
   */
  const sessionUser = async (user: firebase.User | null): Promise<string | boolean> => {
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

  /**
   * Logs in the user using Google authentication.
   *
   * @return {Promise<void>} - A promise that resolves when the login process is complete.
   */
  const loginGoogle = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Login with email and password.
   *
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @return {Promise<void>} A promise that resolves when the login is successful.
   */
  const loginEmailPassword = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth()
        .signInWithEmailAndPassword(email, password)
      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  /**
   * A function that logs in a user using email and password.
   *
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @return {Promise<void>} - A promise that resolves when the user is logged in.
   */
  const entryLoginEmailPassword = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Logs out the user.
   *
   * @return {Promise<void>} Promise that resolves when the user is logged out.
   */
  const logout = async (): Promise<void> => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await sessionUser(null)
      router.push('/auth')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-w2k-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(sessionUser)
      return () => cancel()
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      loginGoogle,
      logout,
      loginEmailPassword,
      entryLoginEmailPassword
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
