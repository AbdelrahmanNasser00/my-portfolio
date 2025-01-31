import ProfileImg from "../../../assets/imgs/profile-pic.png";

const AboutSection = () => {
  return (
    <section id="about" className="mb-16">
      <div className="relative  w-full flex justify-center mb-10">
        <img
          src={ProfileImg}
          alt="Profile img"
          className="w-1/2 h-auto border-cyan-500 rounded-full hover:shadow-profile-hover transition-shadow duration-300 shadow-profile-glow"
        />
        <div className="absolute left-10 -top-3 md:-top-4 md:left-28 md:w-9 md:h-9 lg:w-6 lg:h-6 w-6 h-6 bg-one rounded-full animate-bounce"></div>
        <div className="absolute right-10 -bottom-3 md:-bottom-4 md:right-28 md:w-9 md:h-9 lg:w-6 lg:h-6 w-6 h-6 bg-one rounded-full animate-pulse"></div>
      </div>
      <h2 className="text-xl lg:hidden uppercase font-bold mb-4 text-custom-red">
        about
      </h2>
      <div>
        <p className="mb-4">
          I’m a Software Engineer specializing in front-end development. I craft
          accessible, high-performance web applications using modern
          technologies like <span className="font-bold ">React and Redux</span>.
          My passion lies in creating seamless user experiences and writing
          clean, maintainable code that brings designs to life.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
