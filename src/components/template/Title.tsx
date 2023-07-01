interface TitleProps {
  title: string
  subtitle: string
}

/**
 * Render a layout component.
 *
 * @param {TitleProps} props - The props for the layout component.
 * @return {JSX.Element} The rendered layout component.
 */
export default function Title({ title, subtitle }: TitleProps): JSX.Element {
  return (
    <div>
      <h1 className={`

      `}>{title}</h1>
      <h2 className={`
        
      `}>{subtitle}</h2>
    </div>
  )
}
