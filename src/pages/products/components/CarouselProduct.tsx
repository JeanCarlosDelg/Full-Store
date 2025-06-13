import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  images: {
    idImg: number;
    url: string;
  }[];
}

export const CarouselProduct = ({ images }: CarouselProductProps) => {
  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.idImg}>
              <img
                src={image.url}
                alt="Imagenes del producto"
                className=" mx-auto w-[300px] h-[225px] rounded-lg object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
