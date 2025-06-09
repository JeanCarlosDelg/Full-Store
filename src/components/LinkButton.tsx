import { cn  } from "@/lib/utils"
import { Link, type To } from "react-router-dom"

interface IconButtonProps {
  to: To,
  className?: string
  children: React.ReactElement,
}

const LinkButton = (props: IconButtonProps) => {

  const { to, children, className } = props

  return (
    <Link to={to} className={cn("rounded-full flex items-center bg-white text-gray-600 font-bold border shadow-md p-2 hover:scale-110 transition dark:bg-black dark:text-red-500", className)}>
      {children}
    </Link>
  )
}

export default LinkButton