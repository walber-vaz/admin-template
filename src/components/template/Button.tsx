import { MoonIcon, SunIcon } from "../icons"

interface ButtonProps {
  theme?: string
  altTheme?: () => void
}

/**
 * Renders a button component based on the given theme.
 *
 * @param {Object} props - The properties for the button component.
 * @param {string} props.theme - The theme of the button (either "dark" or another value).
 * @param {function} props.altTheme - The callback function to switch to an alternate theme.
 * @return {JSX.Element} The rendered button component.
 */
export default function Button({ theme, altTheme }: ButtonProps): JSX.Element {
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
