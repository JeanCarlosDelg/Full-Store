import CarouselTextBanner from "./components/CarouselTextBanner"
import BannerDiscount from "./pages/home/BannerDiscount"
import BannerProducts from "./pages/home/BannerProducts"
import ChooseCategory from "./pages/home/ChooseCategory"
import FeaturedProducts from "./pages/home/FeaturedProducts"

function App() {

  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProducts />
    </main>
  )
}

export default App