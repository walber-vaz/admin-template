import { HomeIcon, AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

/**
 * Renders the menu aside component.
 *
 * @return {JSX.Element} The rendered menu aside component.
 */
export default function MenuAside(): JSX.Element {
  return (
    <aside className="flex flex-col">
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-blue-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={<HomeIcon className="h-6 w-6" />} />
        <MenuItem url="/profile" text="Profile" icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />} />
      </ul>
      <ul>
        <MenuItem
          className={`
            text-red-600 hover:bg-red-400 hover:text-white transition duration-500 ease-in-out
          `}
          onClick={() => console.log("logout")}
          text="Logout"
          icon={<ArrowLeftOnRectangleIcon className="h-6 w-6" />}
        />
      </ul>
    </aside>
  )
}
