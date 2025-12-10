import Carousel from "../Carousel";
import { slides } from "@/data/slides";

const Hero = () => {
  return (
    <section className="relative text-white">
      <Carousel slides={slides} />
    </section>
  );
};

export default Hero;
