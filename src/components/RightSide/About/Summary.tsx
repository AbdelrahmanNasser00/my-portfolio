import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const Summary = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitType(textRef.current, { types: "chars" });

      gsap.fromTo(
        splitText.chars,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.002,
          stagger: 0.005,
          delay: 1.5,
          ease: "power3.inOut",
        }
      );
    }
  }, []);
  return (
    <div ref={textRef}>
      <p className="mb-4 text-textColor text-xl">
        As a Full-Stack Software Engineer, I specialize in building end-to-end
        web applications using the MERN stack (MongoDB, Express.js, React,
        Node.js), delivering robust and scalable solutions.
      </p>
      <p className="mb-4 text-textColor text-xl">
        My expertise spans both front-end and back-end development, with a focus
        on creating responsive interfaces using{" "}
        <span className="font-bold">React</span> and building reliable
        server-side applications with{" "}
        <span className="font-bold">Node.js, Express.js, and MongoDB</span>.
      </p>
      <p className="mb-4 text-textColor text-xl">
        I am passionate about clean code architecture and staying current with
        industry best practices to deliver high-quality applications that drive
        business value.
      </p>
    </div>
  );
};

export default Summary;
