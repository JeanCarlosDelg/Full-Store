import type { FilterOriginProps } from "@/types/allTypes"
import FilterOrigin from "./FilterOrigin"

const FiltersCategories = ({ setFilterOrigin }: FilterOriginProps) => {
  
  
  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  )
}

export default FiltersCategories