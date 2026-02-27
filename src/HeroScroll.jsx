import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroScroll() {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    { value: "58%", label: "Increase in pickup point use", color: "bg-lime-300", pos: "top-20 right-20" },
    { value: "27%", label: "Increase in pickup point use", color: "bg-gray-800 text-white", pos: "top-20 left-20" },
    { value: "70%", label: "Decrease in customer calls", color: "bg-sky-300", pos: "bottom-32 left-20" },
    { value: "40%", label: "Decrease in customer calls", color: "bg-orange-400", pos: "bottom-32 right-20" },
  ];

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 }
    );
  }, []);

  return (
    <section className="h-screen bg-gray-200 relative overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-6xl h-40 flex items-center">
        <div
          ref={textRef}
          className="absolute left-0 h-full bg-green-400 flex items-center"
        >
          <h1 className="text-6xl font-bold tracking-widest px-10">
            WELCOME ITZFIZZ
          </h1>
        </div>

        <div className="absolute left-0 w-40 h-24 bg-orange-500 rounded-lg z-10" />
      </div>

      {stats.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`absolute ${item.pos} ${item.color} w-64 p-6 rounded-xl`}
        >
          <p className="text-4xl font-bold">{item.value}</p>
          <p className="mt-2 text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  );
}