import { ReactNode, createContext, useCallback, useEffect, useState } from "react"

// type TypeTheme = "dark" | ""

interface AppContextProps {
  theme?: string
  altTheme?: () => void
  children?: ReactNode
}

const AppContext = createContext<AppContextProps>({})

/**
 * Creates a provider for the AppContext.
 *
 * @param {AppContextProps} props - The properties for the AppProvider.
 * @param {TypeTheme} props.theme - The theme for the AppProvider.
 * @param {JSX.Element} props.children - The children components of the AppProvider.
 * @return {JSX.Element} The JSX element representing the AppProvider.
 */
export function AppProvider({ theme, children }: AppContextProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState("dark")

  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === "" ? "dark" : ""
    localStorage.setItem("theme", newTheme)
    setCurrentTheme(newTheme)
  }, [currentTheme])

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setCurrentTheme(localTheme ?? "dark")
  }, [theme])

  return (
    <AppContext.Provider value={{ theme: currentTheme, altTheme: toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
