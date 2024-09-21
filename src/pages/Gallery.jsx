import Chicago from "../components/Chicago";
import Hero from "../components/Hero";
import GalleryFeed from "../components/GalleryFeed";
import Testimonials from "../components/Testimonials";

export default function Gallery({ inCart, setInCart }) {
  return (
    <>
      {/* <Hero></Hero> */}
      <GalleryFeed inCart={inCart} setInCart={setInCart} />
      <Testimonials />
    </>
  );
}
