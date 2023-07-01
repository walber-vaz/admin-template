interface MenuItemProps {
  url: string
  text: string
  icon: any
}

/**
 * Creates a menu item element with the specified URL, text, and icon.
 *
 * @param {MenuItemProps} url - The URL for the menu item.
 * @param {MenuItemProps} text - The text for the menu item.
 * @param {MenuItemProps} icon - The icon for the menu item.
 * @return {JSX.Element} The menu item element.
 */
export default function MenuItem({ url, text, icon }: MenuItemProps): JSX.Element {
  return (
    <li>
      {icon}
    </li>
  )
}
