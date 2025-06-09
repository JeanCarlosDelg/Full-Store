import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Link } from "react-router-dom"

const MenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link to={'/categories/cafe-molido'} className="block">Café molido</Link>
        <Link to={'/categories/cafe-grano'} className="block">Café en grano</Link>
        <Link to={'/categories/cafe-capsula'} className="block">Café en cápsulas</Link>
      </PopoverContent>
    </Popover>
  )
}

export default MenuMobile