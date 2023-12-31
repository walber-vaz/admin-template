import { useAppData } from "@/data/hooks/useAppData"
import Button from "./Button"
import Title from "./Title"
import AvatarUser from "./AvatarUser"

interface HeaderProps {
  title: string
  subtitle: string
}

/**
 * Render a layout component.
 *
 * @param {HeaderProps} props - The props for the layout component.
 * @return {JSX.Element} The rendered layout component.
 */
export default function Header({ title, subtitle }: HeaderProps): JSX.Element {
  const { theme, altTheme } = useAppData()

  return (
    <header className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <Button theme={theme} altTheme={altTheme} />
        <AvatarUser className="ml-4" />
      </div>
    </header>
  )
}
