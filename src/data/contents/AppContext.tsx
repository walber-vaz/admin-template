import { useState, createContext, ReactNode, useEffect, useCallback } from "react"

type TypeTheme = "dark" | ""

interface AppContextProps {
  theme?: TypeTheme
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
  const [currentTheme, setCurrentTheme] = useState<TypeTheme>(theme || "")

  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === "" ? "dark" : ""
    setCurrentTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }, [currentTheme])

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as TypeTheme;
    if (!localTheme) {
      localStorage.setItem("theme", theme || "")
    }
    setCurrentTheme(localTheme)
  }, [theme])

  return (
    <AppContext.Provider value={{ theme: currentTheme, altTheme: toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
