import { cn  } from "@/lib/utils"
import { Button } from "./ui/button"

interface IconButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactElement
}

const ButtonIcon = (props: IconButtonProps) => {

  const { onClick, children, className } = props

  return (
    <Button onClick={onClick} className={cn("rounded-full flex items-center bg-white text-gray-600 font-extrabold border shadow-md p-2 hover:scale-110 transition dark:bg-black dark:text-red-500 hover:border-red-500", className)}>
      {children}
    </Button>
  )
}

export default ButtonIcon