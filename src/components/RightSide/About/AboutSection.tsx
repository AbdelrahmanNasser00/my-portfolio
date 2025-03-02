import GsapAnimation from "@/components/GSAPAnimation";
import ProfileImg from "../../../assets/imgs/profile-pic.png";
import { useRef } from "react";
import Summary from "./Summary";

const AboutSection = () => {
  const profileRef = useRef<HTMLImageElement | null>(null);
  return (
    <section id="about" className="mb-16">
      <div className="relative  w-full flex justify-center mb-10">
        <GsapAnimation
          gsapProps={{
            opacity: 0,
            duration: 0.5,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1,
          }}>
          <img
            ref={profileRef}
            src={ProfileImg}
            alt="Profile img"
            className="w-1/2 h-auto border-cyan-500 rounded-full hover:shadow-profile-hover transition-shadow duration-300 shadow-profile-glow"
          />
        </GsapAnimation>
        {/* <div className="absolute left-10 -top-3 md:-top-4 md:left-28 md:w-9 md:h-9 lg:w-6 lg:h-6 w-6 h-6 bg-one rounded-full animate-bounce"></div>
        <div className="absolute right-10 -bottom-3 md:-bottom-4 md:right-28 md:w-9 md:h-9 lg:w-6 lg:h-6 w-6 h-6 bg-one rounded-full animate-pulse"></div> */}
      </div>
      <GsapAnimation
        gsapProps={{
          opacity: 0,
          x: -50,
          stagger: 1,
          duration: 1,
          delay: 1,
          ease: "power1.inOut",
        }}>
        <h2 className="text-xl lg:hidden uppercase font-bold mb-4 text-custom-red">
          about
        </h2>
      </GsapAnimation>
      <Summary />
    </section>
  );
};

export default AboutSection;
