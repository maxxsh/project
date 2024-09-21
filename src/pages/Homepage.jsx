import Chicago from "../components/Chicago";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";

export default function Homepage() {
  return (
    <>
      <Hero></Hero>
      <Menu></Menu>
      <Testimonials />
      <Chicago />
      <Subscribe />
    </>
  );
}
