"use client";

import {
  Phone,
  ChevronRight,
  Zap,
  Clock,
  ShieldCheck,
  DollarSign,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);
  const pipeRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    // Master timeline for coordinated animations
    const masterTL = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
      },
    });

    // Pipe construction animation
    masterTL.from(pipeRef.current, {
      scaleX: 0,
      duration: 1.2,
    });

    // Water system animation sequence
    const waterTL = gsap.timeline({
      delay: 0.5,
      repeat: -1,
      repeatDelay: 1,
    });

    waterTL
      .to(".water-flow", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
      })
      .to(
        ".water-drop",
        {
          opacity: 1,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
        },
        "-=0.5"
      )
      .to(
        ".water-drop",
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power1.in",
        },
        "+=0.2"
      );

    // Tools entrance animation
    gsap.from(".plumbing-tool", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 75%",
      },
    });

    // Background parallax
    gsap.to(".hero-bg-gradient", {
      scale: 1.03,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Clean up
    return () => {
      masterTL.kill();
      waterTL.kill();
    };
  }, []);

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "24/7 Emergency" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Licensed" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Upfront Pricing" },
    { icon: <Clock className="w-5 h-5" />, text: "On-Time Guarantee" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-6 mt-16"
    >
      {/* Industrial background */}
      <div className="absolute inset-0 hero-bg-gradient bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRINmMtLjU1MiAwLTEtLjQ0Ny0xLTFWMTNjMC0uNTUyLjQ0OC0xIDEtMWgzMGMuNTUzIDAgMSAuNDQ4IDEgMXYyMGMwIC41NTMtLjQ0NyAxLTEgMXpNNTQgMzRIMjRjLS41NTIgMC0xLS40NDctMS0xVjEzYzAtLjU1Mi40NDgtMSAxLTFoMzBjLjU1MyAwIDEgLjQ0OCAxIDF2MjBjMCAuNTUzLS40NDcgMS0xIDF6TTM2IDU4SDZjLS41NTIgMC0xLS40NDctMS0xVjM3YzAtLjU1Mi40NDgtMSAxLTFoMzBjLjU1MyAwIDEgLjQ0OCAxIDF2MjBjMCAuNTUzLS40NDcgMS0xIDF6TTU0IDU4SDI0Yy0uNTUyIDAtMS0uNDQ3LTEtMVYzN2MwLS41NTIuNDQ4LTEgMS0xaDMwYy41NTMgMCAxIC40NDggMSAxdjIwYzAgLjU1My0uNDQ3IDEtMSAxeiIvPjwvZz48L2c+PC9zdmc+')]" />

      {/* Plumbing tools */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wrench */}
        <svg
          className="absolute plumbing-tool text-blue-400/80 top-1/4 left-1/5 w-14 h-14"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.5 7.1 1 10 3 12c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
          />
        </svg>

        {/* Pipe */}
        <svg
          className="absolute plumbing-tool text-blue-400/80 top-1/3 right-1/4 w-12 h-12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 14V6c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2z"
          />
        </svg>
      </div>

      {/* Animated pipe element */}
      <div
        ref={pipeRef}
        className="absolute top-0 left-0 w-full h-1 bg-blue-400 transform origin-left"
        style={{ boxShadow: "0 0 15px rgba(56, 182, 255, 0.7)" }}
      />

      {/* Water drops animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute water-drop opacity-0 bg-blue-400 rounded-full"
            style={{
              width: "10px",
              height: "10px",
              top: "30%",
              left: `${80 + i * 3}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
                Trusted Since 1985
              </span>
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="block">Plumbing</span>
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Solutions
                </span>
                <span className="block">That Flow</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg mx-auto lg:mx-0 mb-8">
                We don't just fix leaks—we engineer water systems that stand the
                test of time with precision and care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <button
                className="relative overflow-hidden group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">Emergency Call</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <Link href="#services" className="relative overflow-hidden group border-2 border-blue-400/50 text-white hover:text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02]">
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Link>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="font-medium text-blue-100 text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative hidden lg:block">
            <div
              className="relative w-full h-96 bg-blue-900/30 rounded-2xl overflow-hidden border border-blue-400/20"
              ref={ref}
            >
              {/* Interactive water pipe visualization */}
              <svg
                viewBox="0 0 500 400"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main pipe */}
                <path
                  d="M50,200 Q150,100 250,200 T450,200"
                  stroke="rgba(56, 182, 255, 0.3)"
                  strokeWidth="20"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Water flow */}
                <path
                  d="M50,200 Q150,100 250,200 T450,200"
                  stroke="url(#waterGradient)"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="500"
                  strokeDashoffset="500"
                  className="water-flow"
                />

                {/* Leak animation */}
                {isHovering && (
                  <>
                    <circle
                      cx="180"
                      cy="150"
                      r="4"
                      fill="#ff5555"
                      className="leak-source"
                    />

                    {[...Array(3)].map((_, i) => (
                      <circle
                        key={i}
                        cx={180 + i * 2}
                        cy={150 + i * 15}
                        r={2 - i * 0.3}
                        fill="#ff5555"
                        className="leak-drop"
                        style={{
                          opacity: 0,
                          animation: `drip 1s ${i * 0.3}s infinite`,
                        }}
                      />
                    ))}

                    <path
                      d="M180,150 Q185,165 190,160"
                      stroke="#ff5555"
                      strokeWidth="1.5"
                      fill="none"
                      className="leak-spray"
                      style={{
                        strokeDasharray: 30,
                        strokeDashoffset: 30,
                        animation: "spray 1s infinite",
                      }}
                    />
                  </>
                )}

                {/* Wrench tool that appears on hover */}
                {isHovering && (
                  <image
                    href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDk1LjkgMTY2LjZjLTkuMy0yMi4xLTMxLjUtMzYuMy01NS4xLTM2LjNIMzA0VjQwYzAtMjIuMS0xNy45LTQwLTQwLTQwSDE0NGMtMjIuMSAwLTQwIDE3LjktNDAgNDB2OTAuM0g3MS4yYy0yMy42IDAtNDUuOCAxNC4yLTU1LjEgMzYuMy0xMS4zIDI2LjctMS43IDU3LjEgMTkuOCA3NC4zbDg1LjggNTMuMS04NS44IDUzLjFjLTIxLjUgMTcuMi0zMS4xIDQ3LjUtMTkuOCA3NC4zIDkuMyAyMi4xIDMxLjUgMzYuMyA1NS4xIDM2LjNIMTA0djkwLjNjMCAyMi4xIDE3LjkgNDAgNDAgNDBoMTIwYzIyLjEgMCA0MC0xNy45IDQwLTQwVjM2OWgxMzYuOGMyMy42IDAgNDUuOC0xNC4yIDU1LjEtMzYuMyAxMS4zLTI2LjcgMS43LTU3LjEtMTkuOC03NC4zbC04NS44LTUzLjEgODUuOC01My4xYzIxLjUtMTcuMiAzMS4xLTQ3LjYgMTkuOC03NC4zem0tMzUyLjYtMzAuNWMwLTguOC03LjItMTYtMTYtMTZoLTY0Yy04LjggMC0xNiA3LjItMTYgMTZ2NjRjMCA4LjggNy4yIDE2IDE2IDE2aDY0YzguOCAwIDE2LTcuMiAxNi0xNnYtNjR6bTE2MCAxMjhjMCA4LjgtNy4yIDE2LTE2IDE2aC02NGMtOC44IDAtMTYtNy4yLTE2LTE2di02NGMwLTguOCA3LjItMTYgMTYtMTZoNjRjOC44IDAgMTYgNy4yIDE2IDE2djY0eiIvPjwvc3ZnPg=="
                    x="300"
                    y="180"
                    width="40"
                    height="40"
                    opacity={isHovering ? 1 : 0}
                    style={{
                      transition: "opacity 0.3s ease",
                      transformOrigin: "center center",
                    }}
                  />
                )}

                <defs>
                  <linearGradient
                    id="waterGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#38b6ff" />
                    <stop offset="100%" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Phone CTA */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                <a
                  href="tel:555-PLUMBER"
                  className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(555) PLUMBER</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-blue-300 mb-1">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes flow {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(5px);
            opacity: 0;
          }
        }

        @keyframes drip {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(50px);
            opacity: 0;
          }
        }

        @keyframes spray {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
