import Destionations from "./components/destinations/Destionations";
import HotelsAndRestaurants from "./components/hotels-and-restaurants/HotelsAndRestaurants";
import Hero from "./components/hero";
import Travel from "./components/travel/Travel";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Destionations />
      <HotelsAndRestaurants />
      <Travel />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
