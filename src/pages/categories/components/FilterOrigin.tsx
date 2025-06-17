import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FilterOriginProps } from "./FiltersCategories"
import { useProducts } from "@/hooks/useProducts";

const FilterOrigin = ({ setFilterOrigin }: FilterOriginProps) => {
  const { loading, products, getOrigin,  } = useProducts();
  const origin = getOrigin();

  return (
    <div className="w-full flex flex-col text-center my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && products === undefined && <p>Cargando origen...</p>}

      <RadioGroup
        className="grid grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center"
        defaultValue="Todos"
        onValueChange={(value) => setFilterOrigin(value)}
      >
        {products !== null &&
          origin.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <div className="flex w-28">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
              </div>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
