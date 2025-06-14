import { useGetOriginProducts } from "@/api/useGetOriginProducts"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { FilterOriginProps, FilterTypes } from "@/types/allTypes"

const FilterOrigin = ({ setFilterOrigin }: FilterOriginProps) => {

  const { products, loading }: FilterTypes = useGetOriginProducts()

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && products === undefined && (
        <p>Cargando origen...</p>
      )}

      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
        {
          products !== null && ["Todos", ...products.schema.attributes.origin.enum].map((origin: string) => (
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