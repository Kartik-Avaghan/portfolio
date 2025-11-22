 import { useEffect, useRef } from "react";
 import java from "./assets/java.png";
import kartik from "./assets/kartik.jpeg";
import springboot from "./assets/springboot.png";
import react from "./assets/react.png";
import tailwind from "./assets/tailwind.png";
import mysql1 from "./assets/mysql1.png";
import html2 from "./assets/html2.png";
import bootstrap from "./assets/bootstrap.png";
import js from "./assets/js.webp";
import github from "./assets/github.png"

function Skill() {
  const scrollRef = useRef(null);

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let scrollInterval;
  let resumeTimeout;

  const startAutoScroll = () => {
    if (scrollInterval) return;

    scrollInterval = setInterval(() => {
      container.scrollLeft += 1;

      // Smooth infinite loop (because list is duplicated)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 15);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
    scrollInterval = null;
  };

  const userInteracted = () => {
    stopAutoScroll();
    if (resumeTimeout) clearTimeout(resumeTimeout);

    resumeTimeout = setTimeout(() => {
      startAutoScroll();
    }, 500);
  };

  startAutoScroll();

  // Stop when user interacts
  container.addEventListener("touchstart", userInteracted);
  container.addEventListener("touchmove", userInteracted);
  container.addEventListener("wheel", userInteracted);

  // Resume after they stop
  container.addEventListener("touchend", userInteracted);
  container.addEventListener("mouseup", userInteracted);

  return () => {
    stopAutoScroll();
    if (resumeTimeout) clearTimeout(resumeTimeout);

    container.removeEventListener("touchstart", userInteracted);
    container.removeEventListener("touchmove", userInteracted);
    container.removeEventListener("wheel", userInteracted);
    container.removeEventListener("touchend", userInteracted);
    container.removeEventListener("mouseup", userInteracted);
  };
}, []);


  const baseSkills = [
  { src: springboot, name: "Spring Boot" },
  { src: java, name: "Java" },
  { src: react, name: "React" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: js, name: "JavaScript" },
  { src: html2, name: "HTML" },
  { src: mysql1, name: "MySQL" },
  { src: bootstrap, name: "Bootstrap" },
  { src: github, name: "GitHub" }
];

const skills = [...baseSkills, ...baseSkills];  // doubled


  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl text-center font-bold mb-10">Skills</h2>

      <div
        ref={scrollRef}
        className="max-w-6xl mx-auto overflow-x-auto hide-scrollbar whitespace-nowrap scroll-smooth"
      >
        <div className="flex gap-6 px-6 py-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow hover:shadow-lg transition min-w-40 flex flex-col justify-center items-center bg-gray-50 border-b-4 border-indigo-600"
            >
              <img src={skill.src} alt={skill.name} className="h-20 w-20 mb-3" />
              <p className="font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default Skill;