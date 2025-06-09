import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BannerProducts = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumérgete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Cafés y postres exquisitos
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos en cada bocado</p>
        <Link to={"#"} className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/coffe3.jpeg')] bg-center mt-5" />
    </>
  );
};

export default BannerProducts;
