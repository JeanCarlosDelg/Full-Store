import { useGetOriginProducts } from "@/api/useGetOriginProducts"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FilterOriginProps } from "./FiltersCategories"
import type { FilterTypes } from "@/types/allTypes"
import { useProducts } from "@/hooks/useProducts"

const FilterOrigin = ({ setFilterOrigin }: FilterOriginProps) => {

  const { products, loading }: FilterTypes = useGetOriginProducts()

  const { getOrigin } = useProducts()
  const origin = getOrigin()



  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && products === undefined && (
        <p>Cargando origen...</p>
      )}

      <RadioGroup defaultValue="Todos" onValueChange={(value) => setFilterOrigin(value)}>
        {
          products !== null && origin.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterOrigin