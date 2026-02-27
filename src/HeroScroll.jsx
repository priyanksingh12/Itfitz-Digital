import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    })
    .fromTo(carRef.current, { x: -500 }, { x: 900, ease: "none" }, 0)
    .fromTo(textRef.current, { width: "0%" }, { width: "100%" }, 0);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-gray-200 flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative w-full max-w-6xl h-40 flex items-center">
        <div
          ref={textRef}
          className="absolute left-0 h-full bg-green-400 flex items-center overflow-hidden"
        >
          <h1 className="text-6xl font-bold tracking-widest px-10">
            WELCOME ITZFIZZ
          </h1>
        </div>

        <div
          ref={carRef}
          className="absolute left-0 w-40 h-24 bg-orange-500 rounded-lg z-10"
        />
      </div>
    </section>
  );
}