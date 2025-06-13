import { useLovedProducts } from "@/hooks/useLovedProducts";
import ItemLoveProduct from "./components/ItemLoveProduct";

const LoveProducts = () => {
  const { lovedItems } = useLovedProducts();

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
      <h1 className="sm:text-2xl font-bold">Productos que te gustan</h1>
      <div>
        <div>
          {lovedItems.length === 0 && <p>No hay productos que te gustan </p>}
          <ul>
            {lovedItems.map((product) => (
              <ItemLoveProduct key={product.idProd} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoveProducts;
