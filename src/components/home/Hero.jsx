
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="
        relative 
        w-full 
        min-h-[70vh] 
        md:h-screen 
        bg-cover 
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default Hero;
