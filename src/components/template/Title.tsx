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
        font-black text-4xl text-gray-900
      `}>{title}</h1>
      <h2 className={`
        font-light text-base text-gray-600
      `}>{subtitle}</h2>
    </div>
  )
}
