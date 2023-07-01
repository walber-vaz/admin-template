interface MenuItemProps {
  url: string
  text: string
  icon: any
}

export default function MenuItem({ url, text, icon }: MenuItemProps): JSX.Element {
  return (
    <li>
      {icon}
    </li>
  )
}
