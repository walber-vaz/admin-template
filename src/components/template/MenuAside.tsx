import { HomeIcon, AdjustmentsHorizontalIcon } from "../icons";
import MenuItem from "./MenuItem";

/**
 * Renders the menu aside component.
 *
 * @return {JSX.Element} The rendered menu aside component.
 */
export default function MenuAside(): JSX.Element {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={<HomeIcon className="h-6 w-6" />} />
        <MenuItem url="/profile" text="Profile" icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />} />
      </ul>
    </aside>
  )
}
