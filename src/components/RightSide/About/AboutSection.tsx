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
        <p className="mb-4 text-textColor text-xl">
          As a Full-Stack Software Engineer, I specialize in building end-to-end
          web applications using the MERN stack (MongoDB, Express.js, React,
          Node.js), delivering robust and scalable solutions.
        </p>
        <p className="mb-4 text-textColor text-xl">
          My expertise spans both front-end and back-end development, with a
          focus on creating responsive interfaces using{" "}
          <span className="font-bold">React</span> and building reliable
          server-side applications with{" "}
          <span className="font-bold">Node.js, Express.js, and MongoDB</span>.
        </p>
        <p className="mb-4 text-textColor text-xl">
          I am passionate about clean code architecture and staying current with
          industry best practices to deliver high-quality applications that
          drive business value.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
