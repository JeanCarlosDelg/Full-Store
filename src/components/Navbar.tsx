import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import ModeToggle from "./ModeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <Link to={"/"}>
          <h1 className="text-3xl">
            Jean
            <span className="font-bold">Dev</span>
          </h1>
        </Link>
        <div className="items-center justify-between hidden sm:flex">
          <MenuDesktop />
        </div>
        <div className="flex sm:hidden">
          <MenuMobile />
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-7">
          {/* icono del carrito */}
          <Link to="/cart" className="no-underline hover:underline">
            <ShoppingCart strokeWidth="1" className="cursor-pointer" />
          </Link>

          {/* icono de los favoritos */}
          <Link to="/love-products" className="no-underline hover:underline">
            <Heart strokeWidth="1" className="cursor-pointer" />
          </Link>

          {/* icono de mi perfil */}
          <Link to="/my-profile" className="no-underline hover:underline">
            <User strokeWidth="1" className="cursor-pointer" />
          </Link>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
