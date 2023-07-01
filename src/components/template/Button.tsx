import { MoonIcon, SunIcon } from "../icons"

interface ButtonProps {
  theme?: string
  altTheme?: () => void
}

export default function Button({ theme, altTheme }: ButtonProps) {
  return theme === "dark" ? (
    <button onClick={altTheme} className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500">
      <SunIcon className="h8 w-8 text-yellow-400" />
    </button>
  ) : (
    <button onClick={altTheme} className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500">
      <MoonIcon className="h-6 w-6" />
    </button>
  )
}
