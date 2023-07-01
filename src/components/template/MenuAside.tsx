import { HomeIcon, AdjustmentsHorizontalIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

/**
 * Renders the menu aside component.
 *
 * @return {JSX.Element} The rendered menu aside component.
 */
export default function MenuAside(): JSX.Element {
  return (
    <aside>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-blue-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={<HomeIcon className="h-6 w-6" />} />
        <MenuItem url="/profile" text="Profile" icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />} />
      </ul>
    </aside>
  )
}
