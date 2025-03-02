import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import DownloadCvBtn from "./DownloadCVBtn";
import { Github, Linkedin } from "lucide-react";
import GsapAnimation from "../GSAPAnimation";

const LeftSide = () => {
  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition < 100) {
        setActiveSection("#about");
        return;
      }
      const viewportCenter = scrollPosition + viewportHeight / 2;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    const debounce = <T extends (e: Event) => void>(func: T, wait: number) => {
      let timeout: NodeJS.Timeout;
      return (e: Event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(e), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);
    handleScroll();
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#timeline", label: "Timeline" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="pt-24 lg:w-1/2 w-full lg:h-screen lg:sticky lg:top-0">
      <div>
        <h1 className="text-textColor text-4xl font-bold tracking-tight sm:text-6xl">
          <h1 className="text-textColor text-4xl font-bold tracking-tight sm:text-6xl">
            <GsapAnimation
              gsapProps={{
                opacity: 0,
                x: -50,
                duration: 1,
                stagger: 0.2, // Apply stagger animation
                delay: 1,
                ease: "power3.inOut",
              }}>
              <div className="inline-block">
                <span className="block">Hi there!</span>
                <span className="block">I'm Abdelrahman.</span>
              </div>
            </GsapAnimation>
          </h1>
        </h1>

        {/* <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2> */}
        {/* <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p> */}
        <nav className="mt-14 hidden lg:block">
          <GsapAnimation
            gsapProps={{
              opacity: 0,
              x: -50,
              duration: 1,
              delay: 1,
              ease: "power3.inOut",
            }}>
            <ul>
              {links.map((link, index) => (
                <NavItem
                  key={index}
                  href={link.href}
                  label={link.label}
                  isActive={activeSection === link.href}
                />
              ))}
            </ul>
          </GsapAnimation>
        </nav>
      </div>
      <GsapAnimation
        gsapProps={{
          opacity: 0,
          x: -50,
          stagger: 1,
          duration: 1,
          delay: 1,
          ease: "power3.inOut",
        }}>
        <div className="flex space-x-4 mt-8">
          <a
            href="https://github.com/yourusername"
            className="p-3 rounded-lg bg-[#2a2a2a] hover:bg-blue-500/20 transition-colors">
            <Github className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="p-3 rounded-lg bg-[#2a2a2a] hover:bg-purple-500/20 transition-colors">
            <Linkedin className="w-5 h-5 text-purple-400" />
          </a>
          <DownloadCvBtn />
        </div>
      </GsapAnimation>
      {/* <li>
        </li> */}
      {/* </ul> */}
    </header>
  );
};

export default LeftSide;
