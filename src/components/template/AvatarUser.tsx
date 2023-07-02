import { useAuth } from "@/data/hooks/useAuth";
import Link from "next/link";

interface AvatarUserProps {
  className?: string
}

/**
 * Renders an avatar for a user.
 *
 * @param {AvatarUserProps} className - The class name for custom styling.
 * @return {JSX.Element} The JSX element representing the avatar.
 */
export default function AvatarUser({ className }: AvatarUserProps): JSX.Element {
  const { user } = useAuth()
  return (
    <Link href="/profile">
      <img src={user?.imageUrl ?? ''} alt={user?.name} className={`
        h-12 w-12 rounded-full cursor-pointer
        ${className ?? ''}
      `} />
    </Link>
  )
}
