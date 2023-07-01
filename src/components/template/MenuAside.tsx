import { HomeIcon, AdjustmentsHorizontalIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuAside() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={<HomeIcon className="h-6 w-6" />} />
        <MenuItem url="/profile" text="Profile" icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />} />
      </ul>
    </aside>
  )
}
