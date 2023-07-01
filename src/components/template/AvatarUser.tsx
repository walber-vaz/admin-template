import { useAuth } from "@/data/hooks/useAuth";
import Link from "next/link";

interface AvatarUserProps {
  className?: string
}

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
