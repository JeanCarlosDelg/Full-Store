import CarouselTextBanner from "./components/CarouselTextBanner"
import BannerDiscount from "./pages/home/BannerDiscount"
import ChooseCategory from "./pages/home/ChooseCategory"
import FeaturedProducts from "./pages/home/FeaturedProducts"

function App() {

  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
    </main>
  )
}

export default App