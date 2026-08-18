import React, { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const CATEGORIES = [
  {
    label: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "RESTful APIs", "Microservices"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Database",
    skills: ["MySQL"],
  },
  {
    label: "Security",
    skills: ["JWT Authentication", "OAuth2", "RBAC"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "Postman"],
  },
  {
    label: "Mobile",
    skills: ["Flutter (Basics)"],
  },
];

function SkillCard({ category, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s`,
      }}
      className="rounded-2xl bg-[var(--navy-900)] border border-white/10 p-5 sm:p-6 hover:border-[var(--spring)]/50 hover:-translate-y-1 transition-all duration-300"
    >
      <p className="mono text-xs uppercase tracking-widest text-[var(--spring)] mb-4">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <span
            key={s}
            className="mono text-xs sm:text-[13px] px-3 py-1.5 rounded-full bg-white/5 text-white/80 border border-white/10"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skill() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[var(--navy-950)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="mono text-xs sm:text-sm tracking-widest uppercase text-[var(--spring)] mb-3">
          // skills
        </p>
        <h2 className="display text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CATEGORIES.map((category, i) => (
            <SkillCard category={category} index={i} key={category.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
