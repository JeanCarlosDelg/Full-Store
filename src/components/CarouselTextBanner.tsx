import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24/48 h",
    description:
      "Como cliente VIP, tus envios en 24/48 horas. Obtén más informacion y únete",
    link: "#!",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% de descuento",
    description:
      "-20% al gastar $100 o -25% al gastar $150. Usa el código JEANDEV01",
    link: "#!",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Como cliente, tienes envíos y devoluciones gratis en planes VIP",
    link: "#!",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades al 30% de descuento",
    link: "#!",
  },
];

const CarouselTextBanner = () => {
  return (
    <div className="mt-16 bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500, //ms
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map((data) => (
            <CarouselItem key={data.id}>
              <Link to={data.link}>
                <div>
                  <Card className="shadow-none border-none bg-transparent">
                    <CardContent className="flex flex-col justify-center items-center text-center p-2">
                      <p className=" text-3xl font-bold  sm:text-lg text-wrap dark:text-secondary">
                        {data.title}
                      </p>
                      <p className="text-xs font-semibold sm:text-sm text-wrap dark:text-secondary">
                        {data.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
