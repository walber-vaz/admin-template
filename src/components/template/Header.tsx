import Title from "./Title"

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
  return (
    <header>
      <Title title={title} subtitle={subtitle} />
    </header>
  )
}
