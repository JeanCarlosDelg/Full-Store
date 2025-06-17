import FilterOrigin from "./FilterOrigin"

export type FilterOriginProps = {
  setFilterOrigin: (origin: string) => void
}

const FiltersCategories = ({ setFilterOrigin }: FilterOriginProps) => {
  
  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  )
}

export default FiltersCategories