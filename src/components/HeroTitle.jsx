import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroTitle = ({setIsHovering}) => {
  const solutionsRef = useRef(null);

  useEffect(() => {
    const el = solutionsRef.current;

    // GSAP timeline for hover animation
    const tl = gsap.timeline({ paused: true });

    tl.to(el, {
      scale: 1.1,
      rotation: 1,
      textShadow: "0px 0px 12px rgba(0,255,255,0.5)",
      duration: 0.3,
      ease: "power2.out",
    }).to(el, {
      scale: 1,
      rotation: 0,
      textShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.inOut",
    });

    const handleEnter = () => tl.play(0);
    const handleLeave = () => tl.reverse();

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <h1 className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
      <span>Plumbing</span>
      <span
        ref={solutionsRef}
        className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 cursor-pointer"
                    onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}

      >
        Solutions
        {/* Optional shimmer overlay */}
        <span className="absolute inset-0 shimmer pointer-events-none" />
      </span>
      <span>That Flow</span>
    </h1>
  );
};

export default HeroTitle;
