import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    { value: "58%", label: "Increase in pickup point use", color: "bg-lime-300", pos: "top-20 right-20" },
    { value: "27%", label: "Increase in pickup point use", color: "bg-gray-800 text-white", pos: "top-20 left-20" },
    { value: "70%", label: "Decrease in customer calls", color: "bg-sky-300", pos: "bottom-32 left-20" },
    { value: "40%", label: "Decrease in customer calls", color: "bg-orange-400", pos: "bottom-32 right-20" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      carRef.current,
      { x: -500 },
      { x: 900, ease: "none", duration: 1 },
      0
    );

    tl.fromTo(
      textRef.current,
      { width: "0%" },
      { width: "100%", ease: "none", duration: 1 },
      0
    );

    const points = [0.15, 0.35, 0.55, 0.75];
    cardsRef.current.forEach((card, i) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.25 },
        points[i]
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
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
          <h1 className="text-6xl font-bold tracking-widest px-10 whitespace-nowrap">
            WELCOME ITZFIZZ
          </h1>
        </div>

        <div
          ref={carRef}
          className="absolute left-0 w-40 h-24 bg-orange-500 rounded-lg z-10"
        />
      </div>

      {stats.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`absolute ${item.pos} ${item.color} w-64 p-6 rounded-xl opacity-0`}
        >
          <p className="text-4xl font-bold">{item.value}</p>
          <p className="mt-2 text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  );
}