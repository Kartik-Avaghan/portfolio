import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Mail, Phone, Github, Linkedin, ExternalLink, Lock } from "lucide-react";

import kartik from "./assets/kartik.jpeg";
import stjit from "./assets/stjit.jpg";
import ecommerce from "./assets/projects/ecommerce.png";
import webapplication from "./assets/projects/webapplication.png";
import porfolio from "./assets/projects/porfolio.png";
import pgmanagement from "./assets/projects/pgmanagement.png";
import Skill from "./Skill";

/* -----------------------------------------------------------
   Design tokens (see comment block in <style> below for the why)
   Signature idea: Kartik is a backend/API developer, so the hero
   renders like an actual API response — GET /developer/kartik.
   Mono type carries the "engineering" voice, Space Grotesk carries
   the headline weight, Inter carries the reading copy.
----------------------------------------------------------- */

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

function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.2,.7,.3,1) ${delay}s, transform 0.7s cubic-bezier(.2,.7,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mono text-xs sm:text-sm tracking-widest uppercase text-[var(--spring)] mb-3">
      {children}
    </p>
  );
}

const NAV_ITEMS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans scroll-smooth bg-[var(--paper)] text-[var(--ink)]">
      {/* Global tokens + fonts + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --navy-950: #0B1220;
          --navy-900: #111A2E;
          --paper: #F7F7F5;
          --ink: #16202E;
          --muted: #5B6472;
          --spring: #6DB33F;   /* Spring Boot green — Kartik's core stack */
          --sky: #3AA0FF;      /* React / frontend accent */
          --line: rgba(255,255,255,0.09);
        }
        .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .display { font-family: 'Space Grotesk', 'Inter', sans-serif; }
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }

        @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .float { animation: floaty 5s ease-in-out infinite; }

        ::selection { background: var(--spring); color: white; }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur shadow-md"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <a href="#hero" className="flex items-center gap-3">
            <span className="mono rounded-lg px-3 py-1.5 text-lg text-white font-semibold bg-[var(--navy-950)] shadow">
              KA
            </span>
            <span className="display text-lg sm:text-xl font-semibold hidden xs:inline">
              Kartik Avaghan
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium mono">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-[var(--ink)]/80 hover:text-[var(--navy-950)] transition group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--spring)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="mailto:avaghankartik@gmail.com"
            className="hidden md:inline-block mono text-sm px-4 py-2 rounded-full bg-[var(--navy-950)] text-white hover:bg-[var(--spring)] transition-colors"
          >
            Hire me
          </a>

          {/* Mobile nav: horizontal scroll strip */}
          <div className="flex md:hidden gap-4 overflow-x-auto mono text-xs text-[var(--ink)]/70 max-w-[55vw]">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item}`} className="whitespace-nowrap">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-[var(--navy-950)] text-white relative overflow-hidden"
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[var(--spring)]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 w-64 h-64 rounded-full bg-[var(--sky)]/10 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-4 sm:px-6 relative">
          <Reveal>
            <p className="mono text-[var(--spring)] text-sm tracking-widest uppercase mb-4">
              // java full stack developer
            </p>
            <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Kartik Avaghan
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-md leading-relaxed">
              I build secure, scalable backends with Spring Boot and pair them
              with clean React.js interfaces — from REST APIs and RBAC to the
              screens people actually use.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/Kartik_Avaghan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--spring)] text-[var(--navy-950)] font-semibold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/25 text-white rounded-xl hover:border-[var(--spring)] hover:text-[var(--spring)] transition"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-5 mt-8 text-white/60">
              <a href="https://www.linkedin.com/in/kartik-r-avaghan/" target="_blank" rel="noreferrer" className="hover:text-[var(--spring)] transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Kartik-Avaghan" target="_blank" rel="noreferrer" className="hover:text-[var(--spring)] transition">
                <Github size={20} />
              </a>
              <a href="mailto:avaghankartik@gmail.com" className="hover:text-[var(--spring)] transition">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>

          {/* Signature element: hero as an API response */}
          <Reveal delay={0.15}>
            <div className="float mx-auto max-w-md rounded-2xl bg-[var(--navy-900)] border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="mono text-xs text-white/40 ml-2">api.kartikavaghan.dev</span>
              </div>
              <div className="p-5 sm:p-6 mono text-[13px] sm:text-sm leading-relaxed">
                <p className="text-[var(--sky)]">GET /developer/kartik</p>
                <p className="text-white/40 mt-1">200 OK</p>
                <pre className="mt-3 text-white/85 whitespace-pre-wrap">
{`{
  "role": "Java Full Stack Developer",
  "experience": "1+ year",
  "backend": ["Spring Boot", "REST APIs", "JPA/Hibernate"],
  "frontend": ["React.js", "Tailwind CSS"],
  "security": ["JWT", "OAuth2", "RBAC"],
  "location": "Bengaluru, India",`}
                  <span className="text-[var(--spring)]">
{`  "status": "open_to_work"`}
                  </span>
{`
}`}
                </pre>
                <span className="inline-block w-2 h-4 bg-[var(--spring)] cursor-blink align-middle ml-1" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>// about</Eyebrow>
            <h2 className="display text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
              A backend-first developer who finishes the frontend too
            </h2>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10">
            <Reveal delay={0.1} className="flex-1">
              <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
                Full Stack Developer with 1+ year of experience building scalable
                web applications using Java, Spring Boot, React.js, MySQL, and
                RESTful APIs. Strong on backend fundamentals — Spring Security,
                JWT authentication, role-based access control, JPA/Hibernate, and
                MySQL schema design — and comfortable wiring it all up to a
                React.js frontend.
              </p>
              <ul className="mt-6 space-y-3 text-[var(--ink)]/85">
                {[
                  "Designs and ships secure REST APIs with JWT auth and RBAC.",
                  "Integrates React.js frontends with Spring Boot services end-to-end.",
                  "Comfortable around Microservices, Docker, Kubernetes, and CI/CD.",
                  "Also builds with Flutter for basic cross-platform mobile apps.",
                ].map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mono text-[var(--spring)]">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="w-full lg:w-[340px] shrink-0">
              <div className="rounded-2xl border-t-4 border-[var(--spring)] shadow-xl px-6 sm:px-8 py-6 bg-white hover:-translate-y-1 transition-transform duration-300">
                <img
                  src={kartik}
                  alt="Kartik Avaghan"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow mb-4"
                />
                <p className="font-semibold">Bengaluru, India</p>
                <p className="flex items-center gap-2 py-2 text-sm">
                  <Mail size={16} className="text-[var(--spring)]" />
                  <a href="mailto:avaghankartik@gmail.com" className="text-[var(--ink)]/80 hover:text-[var(--spring)] break-all">
                    avaghankartik@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="text-[var(--spring)]" />
                  <a href="tel:+917349524086" className="text-[var(--ink)]/80 hover:text-[var(--spring)]">
                    +91 7349524086
                  </a>
                </p>
                <div className="flex gap-4 items-center mt-5 pt-5 border-t border-black/5 text-sm">
                  <a href="https://www.linkedin.com/in/kartik-r-avaghan/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--spring)]">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com/Kartik-Avaghan" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--spring)]">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Skill />

      {/* Experience */}
      <section id="experience" className="py-16 sm:py-24 bg-[var(--paper)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>// experience</Eyebrow>
            <h2 className="display text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">
              Where I've been building
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl shadow-xl p-6 sm:p-8 border-l-4 border-[var(--spring)] bg-white hover:shadow-2xl transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="display text-lg sm:text-xl font-semibold flex items-center gap-2">
                  <Briefcase size={20} className="text-[var(--spring)]" />
                  Software Developer · Thincnext Pvt. Limited
                </h3>
                <span className="mono text-xs sm:text-sm text-[var(--muted)]">
                  Jul 2025 – Present
                </span>
              </div>

              <ul className="mt-5 space-y-2.5 text-[15px] sm:text-base text-[var(--ink)]/85">
                {[
                  "Developed end-to-end full-stack features using Java, Spring Boot, React.js, and MySQL, primarily contributing to backend development, REST API implementation, and business logic.",
                  "Designed and implemented secure REST APIs, JWT authentication, and RBAC for enterprise applications.",
                  "Developed React.js frontend modules, integrating REST APIs and managing application state with Redux Toolkit.",
                  "Resolved production issues through debugging, log analysis, and defect fixes across backend and frontend applications.",
                  "Improved application performance by optimizing APIs, database queries, and fixing performance bottlenecks.",
                ].map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mono text-[var(--spring)] shrink-0">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>// projects</Eyebrow>
            <h2 className="display text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">
              Things I've shipped
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Reride — Vehicle Management & Tracking",
                desc: [
                  "Built backend modules for vehicle management — creation, publishing, and CRUD operations — with optimized data handling and API performance.",
                  "Built an admin dashboard for inventories, pricing, and listing publication with RBAC-secured staff/user management.",
                ],
                stack: ["Spring Boot", "React.js", "Redux Toolkit", "MySQL"],
                tag: "Company project",
                confidential: true,
              },
              {
                title: "KFCC — Film Chamber Workflow System",
                desc: [
                  "Built dynamic role-based dashboards for a multi-level workflow system with concurrent, role-specific approval processes.",
                  "Integrated frontend modules with backend REST APIs; built reusable components with form validation and optimized state management.",
                ],
                stack: ["Spring Boot", "React.js", "Redux Toolkit"],
                tag: "Company project",
                confidential: true,
              },
              {
                img: pgmanagement,
                title: "PG Management System",
                desc: [
                  "Full-stack PG management system with JWT authentication, RBAC, room allocation, complaint management, and CRUD operations.",
                  "Implemented a payment microservice with gateway integration and containerized deployment using Docker.",
                ],
                stack: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
                tag: "Academic project",
                link: "https://github.com/Kartik-Avaghan/pgmanagement",
              },
              {
                img: porfolio,
                title: "AI Chatbot — Spring AI & Ollama",
                desc: [
                  "AI-powered chatbot integrating Spring AI with the Ollama LLM for real-time, streaming responses.",
                  "Built scalable REST APIs with Spring Boot and a React.js frontend for prompt handling and a seamless chat experience.",
                ],
                stack: ["Java", "Spring Boot", "Spring AI", "React.js"],
                tag: "Academic project",
                link: "https://github.com/Kartik-Avaghan",
              },
            ].map((p, i) => (
              <Reveal delay={i * 0.08} key={p.title}>
                <div className="group rounded-2xl shadow-xl bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  {p.img ? (
                    <img src={p.img} alt={p.title} className="h-48 sm:h-56 w-full object-cover" />
                  ) : (
                    <div className="h-48 sm:h-56 w-full bg-[var(--navy-950)] flex flex-col items-center justify-center gap-2 text-white/70">
                      <Lock size={24} />
                      <span className="mono text-xs">source private</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="mono text-[11px] uppercase tracking-wide text-[var(--spring)] mb-1">
                      {p.tag}
                    </span>
                    <h3 className="display text-lg sm:text-xl font-semibold">{p.title}</h3>
                    <ul className="text-[var(--muted)] mt-3 space-y-1.5 text-sm sm:text-[15px] flex-1">
                      {p.desc.map((line, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-[var(--spring)]">•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4 text-xs">
                      {p.stack.map((s, idx) => (
                        <span key={idx} className="mono px-3 py-1 bg-[var(--paper)] rounded-full text-[var(--ink)]/70">
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy-950)] group-hover:text-[var(--spring)] transition"
                      >
                        View on GitHub <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 sm:py-24 bg-[var(--paper)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>// education</Eyebrow>
            <h2 className="display text-2xl sm:text-3xl font-bold mb-10 sm:mb-12">Education</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border-t-4 border-[var(--spring)] transition-all duration-300 hover:-translate-y-2 max-w-2xl">
              <div className="flex items-center gap-5">
                <img
                  src={stjit}
                  alt="STJIT College of Engineering"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shadow object-cover shrink-0"
                />
                <div>
                  <h3 className="display font-semibold text-lg sm:text-xl text-[var(--ink)]">
                    STJIT College of Engineering (VTU), Ranebennur
                  </h3>
                  <p className="text-[var(--muted)] mt-1 text-sm sm:text-base">
                    B.E. in Electronics &amp; Communication Engineering
                  </p>
                  <p className="mono text-xs sm:text-sm text-[var(--ink)]/70 mt-2">
                    2021 – 2025 · CGPA 8.8
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <Eyebrow>// contact</Eyebrow>
            <h2 className="display text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Let's build something</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl shadow-xl p-6 sm:p-10 bg-[var(--navy-950)] text-white border-l-4 border-[var(--spring)] hover:shadow-2xl transition-all duration-300">
              <p className="text-base sm:text-xl mb-8 text-white/75 max-w-3xl leading-relaxed">
                Open to freelance work, full-time roles, and collaboration.
                Reach out and I'll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Mail, label: "Email", value: "avaghankartik@gmail.com", href: "mailto:avaghankartik@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 7349524086", href: "tel:+917349524086" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kartik-r-avaghan", href: "https://www.linkedin.com/in/kartik-r-avaghan/" },
                  { icon: Github, label: "GitHub", value: "github.com/Kartik-Avaghan", href: "https://github.com/Kartik-Avaghan" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"
                  >
                    <Icon size={22} className="text-[var(--spring)] shrink-0 mt-0.5" />
                    <div className="overflow-hidden">
                      <p className="font-semibold text-white text-sm">{label}</p>
                      <p className="text-white/70 text-sm break-words">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center mono text-xs sm:text-sm text-[var(--muted)] bg-[var(--paper)]">
        © 2026 Kartik Avaghan · Built with React, Vite &amp; Tailwind
      </footer>
    </div>
  );
}
