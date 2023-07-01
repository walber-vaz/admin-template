interface ContentProps {
  children?: React.ReactNode
}

/**
 * Render a layout component.
 *
 * @param {ContentProps} props - The props for the layout component.
 * @return {JSX.Element} The rendered layout component.
 */
export default function Content({ children }: ContentProps): JSX.Element {
  return (
    <div className={`
      flex flex-col mt-7
    `}>
      {children}
    </div>
  )
}
