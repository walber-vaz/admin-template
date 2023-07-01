import Link from "next/link"

interface MenuItemProps {
  url?: string
  onClick?: () => void
  className?: string
  text: string
  icon: any
}

/**
 * Renders a single menu item.
 *
 * @param {MenuItemProps} url - The URL of the menu item.
 * @param {MenuItemProps} text - The text of the menu item.
 * @param {MenuItemProps} icon - The icon of the menu item.
 * @return {JSX.Element} The rendered menu item.
 */
export default function MenuItem({ url, text, icon, onClick, className }: MenuItemProps): JSX.Element {
  /**
   * Renders a link element.
   *
   * @return {JSX.Element} The rendered link element.
   */
  const renderLink = (): JSX.Element => (
    <p className={`
      flex flex-col justify-center items-center h-20 w-20
      ${className}
    `}>
      {icon}
      <span className="text-sm font-light">{text}</span>
    </p>
  );

  return (
    <li
      className={`
      hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer
        transition duration-500 ease-in-out
      `}
      onClick={onClick}
    >
      {url ? (
        <Link href={url} className="flex flex-col justify-center items-center h-20 w-20">
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}
