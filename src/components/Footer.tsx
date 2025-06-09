import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 3,
    name: "Mi cuenta",
    link: "#",
  },
  {
    id: 4,
    name: "Politicas de privacidad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="flex flex-col items-center text-center w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="w-full px-4 sm:flex sm:items-center sm:justify-between">
            <p>
              <span className="font-bold mr-2">JeanDev</span>
              E-commerce
            </p>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="hover:underline me-4 md:me-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy;{new Date().getFullYear()}
          <Link to={"#"} className="ml-[2px] mr-5">JeanDev</Link>
          Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
