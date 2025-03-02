import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface GsapAnimationProps {
  children: React.ReactElement;
  className?: string;
  stagger?: number;
  gsapProps?: gsap.TweenVars;
  scrollTriggerProps?: ScrollTrigger;
  scroll?: boolean;
  container?: HTMLElement;
}

const GsapAnimation: React.FC<GsapAnimationProps> = ({
  children,
  gsapProps = {},
  scrollTriggerProps = {},
  scroll = false,
  container,
}) => {
  const element = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!element.current) return;

    const animationConfig = {
      ...gsapProps,
    };

    if (scroll) {
      animationConfig.scrollTrigger = {
        trigger: container || element.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        ...scrollTriggerProps,
      };
    }

    gsap.from(element.current, animationConfig);
  }, []);
  return React.cloneElement(children as React.ReactElement, { ref: element });
  //   return (
  //     <div className={`gsap_animation ${className}`} ref={element}>
  //       {children}
  //     </div>
  //   );
};

export default GsapAnimation;
