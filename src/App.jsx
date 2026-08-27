import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  X,
  ChevronRight,
  Layers,
  Container,
  BrainCircuit,
  Workflow,
  Moon,
  Sun,
  CodeXml,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import kartik from "./assets/kartik.jpeg";
import stjit from "./assets/stjit.jpg";
import jspiders from "./assets/jspiders.jpg";

import javaImage from "./assets/java.png";
import springBootImage from "./assets/springboot.png";
import reactImage from "./assets/react.png";
import mysqlImage from "./assets/mysql1.png";
import jsImage from "./assets/js.webp";
import flutter from "./assets/flutter.png";
import tailwindImage from "./assets/tailwind.png";

// Project Images
import Reride from "./assets/projects/Reride.png";
import KFCC from "./assets/projects/KFCC.png";
import pgmanagement from "./assets/projects/pgmanagement.png";
import AI_chatbot from "./assets/projects/AI_chatbot.png";

const NAV_ITEMS = [
  "about",
  "skills",
  "education",
  "experience",
  "projects",
  "contact",
];

const ROLE_TEXTS = [
  "Java Backend Developer",
  "Full Stack Developer",
  "Spring Boot Developer",
  "REST API Developer",
];

const SKILLS = [
  {
    category: "Backend Development",
    icon: <Server size={27} />,
    // image: javaImage,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "RESTful APIs",
      "JPA / Hibernate",
      "Microservices",
    ],
  },
  {
    category: "Frontend Development",
    icon: <Code2 size={27} />,
    // image: reactImage,
    skills: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    category: "Database & Security",
    icon: <ShieldCheck size={27} />,
    // image: mysqlImage,
    skills: [
      "MySQL",
      "JWT Authentication",
      "OAuth2",
      "RBAC",
      "API Security",
      "Database Design",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Container size={27} />,
    // image: springBootImage,
    skills: [
      "Docker",
      "Kubernetes Basics",
      "Jenkins Basics",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

const FLOATING_TECH = [
  {
    name: "Java",
    image: javaImage,
    className:
      "-left-4 top-4 sm:-left-12 sm:top-8",
    duration: 5,
    delay: 0,
  },
  {
    name: "Spring Boot",
    image: springBootImage,
    className:
    "left-10 -top-5  sm:left-10 sm:-top-10",
      
    duration: 6,
    
    delay: 0.5,
  },
  {
    name: "React",
    image: reactImage,
    className:
      "-right-2 bottom-10 sm:-right-10 sm:bottom-12",
    duration: 5.5,
    delay: 1,
  },
  {
    name: "MySQL",
    image: mysqlImage,
    className:
      "-left-2 bottom-16 sm:-left-10 sm:bottom-20",
    duration: 6.5,
    delay: 0.3,
  },
  {
  name: "JavaScript",
  image: jsImage,
  className:
    // "-right-2 bottom-28 sm:-right-10 sm:bottom-32",
    "right-2 bottom-28 flex sm:-right-2 sm:bottom-32",
  duration: 7,
  delay: 1.2,
},
  // {
  //   name: "Tailwind CSS",
  //   image: tailwindImage,
  //   className:
  //     "left-1/2 -bottom-7 hidden -translate-x-1/2 sm:flex",
  //   duration: 6,
  //   delay: 0.8,
  // },
    {
    name: "Flutter",
    image: flutter,
    className:
      "left-35 -bottom-5 flex -translate-x-1/2 sm:-bottom-7",
    duration: 6,
    delay: 0.8,
  },
];





const PROJECTS = [
  {
    title: "Reride",
    subtitle: "Vehicle Management & Tracking Platform",
    icon: <BriefcaseBusiness size={30} />,
    type: "Company Project",
    image: Reride,
    description: [
      "Developed backend modules for vehicle management including creation, publishing, CRUD operations, and optimized data handling.",
      "Built an admin dashboard for vehicle inventories, pricing, listing publication, and user management.",
      "Integrated frontend and backend services for seamless data flow.",
    ],
    stack: ["Spring Boot", "React.js", "Redux Toolkit", "MySQL"],
    link: "http://prakruthireride.com/",
  },
  {
    title: "KFCC",
    subtitle: "Film Chamber Workflow Management System",
    icon: <Workflow size={30} />,
    type: "Company Project",
    image: KFCC,
    description: [
      "Developed dynamic role-based dashboards for a multi-level workflow management system.",
      "Implemented role-specific approval processes and concurrent workflow management.",
      "Integrated React.js modules with Spring Boot REST APIs.",
    ],
    stack: ["Spring Boot", "React.js", "Redux Toolkit", "REST APIs"],
    link: "https://thekfcc.com/",
  },
  {
    title: "PG Management System",
    subtitle: "Full-Stack Management Platform",
    icon: <Database size={30} />,
    type: "Academic Project",
    image: pgmanagement,
    description: [
      "Built a full-stack PG management system with JWT authentication and RBAC.",
      "Implemented room allocation, complaint management, payment functionality, and CRUD operations.",
      "Containerized services using Docker.",
    ],
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
    link: "https://github.com/Kartik-Avaghan/microservice-project",
  },
  {
    title: "AI Chatbot",
    subtitle: "Spring AI & Ollama LLM",
    icon: <BrainCircuit size={30} />,
    type: "Academic Project",
    image: AI_chatbot,
    description: [
      "Developed an AI-powered chatbot using Spring AI and Ollama.",
      "Built scalable Spring Boot REST APIs for prompt handling.",
      "Created a responsive React.js chat interface.",
    ],
    stack: ["Java", "Spring Boot", "Spring AI", "Ollama", "React.js"],
    link: "https://github.com/Kartik-Avaghan/openAi_chatbot",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  /*
    Default theme:
    First visit = Light Mode
    If user manually selects dark mode,
    that choice is saved in localStorage.
  */
 const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("portfolio-theme");

  return savedTheme ? savedTheme === "dark" : true;
});

useEffect(() => {
  localStorage.setItem(
    "portfolio-theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  /* ROTATING ROLE */
  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setRoleIndex((previous) =>
        previous === ROLE_TEXTS.length - 1 ? 0 : previous + 1
      );
    }, 2600);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 600);
      setHasScrolled(scrollTop > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL SPY */
  useEffect(() => {
    const sections = ["hero", ...NAV_ITEMS]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const theme = {
    page: darkMode
      ? "bg-[#07111f] text-white"
      : "bg-[#f8fafc] text-slate-900",

    heading: darkMode
      ? "text-white"
      : "text-slate-950",

    text: darkMode
      ? "text-slate-400"
      : "text-slate-600",

    card: darkMode
      ? "border-white/10 bg-white/[0.045] shadow-black/20"
      : "border-slate-200/90 bg-white/80 shadow-slate-300/30",

    section: darkMode
      ? "border-white/[0.06] bg-white/[0.018]"
      : "border-slate-200/70 bg-slate-100/60",

    badge: darkMode
      ? "border-white/10 bg-white/[0.05] text-slate-300"
      : "border-slate-200 bg-slate-50 text-slate-700",

    secondaryCard: darkMode
      ? "border-white/10 bg-slate-900/70"
      : "border-white bg-white/85 shadow-xl shadow-slate-300/30",
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${theme.page}`}
    >
      {/* ================= SCROLL PROGRESS ================= */}
      <div className="fixed left-0 top-0 z-[100] h-1 w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* ================= PREMIUM BACKGROUND ================= */}
      <AnimatedBackground darkMode={darkMode} />

      {/* ================= MOUSE GLOW ================= */}
      {!shouldReduceMotion && <MouseGlow darkMode={darkMode} />}

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-5"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.8rem] border px-4 transition-all duration-500 sm:px-5 ${
            darkMode
              ? hasScrolled
                ? "border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-2xl"
                : "border-white/[0.08] bg-slate-950/60 backdrop-blur-xl"
              : hasScrolled
              ? "border-white/70 bg-white/80 shadow-2xl shadow-slate-400/30 backdrop-blur-2xl"
              : "border-white bg-white/60 shadow-2xl shadow-slate-600/20 backdrop-blur-xl"
          } ${
            hasScrolled
              ? "py-2.5"
              : "py-3.5"
          }`}
        >
          {/* LOGO */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 rounded-2xl ${FOCUS_RING}`}
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 4,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 font-bold text-white shadow-lg shadow-cyan-500/20"
            >
              KA
            </motion.div>

            <div className="hidden sm:block">
              <h1
                className={`font-bold text-xl leading-tight ${theme.heading}`}
              >
                Kartik Avaghan
              </h1>

              {/* <p className={`text-xs ${theme.text}`}>
                Java Full Stack Developer
              </p> */}
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item;

              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative rounded-xl px-3 py-2 text-sm font-medium capitalize transition ${
                    active
                      ? "text-cyan-500"
                      : `${theme.text} hover:text-cyan-500`
                  } ${FOCUS_RING}`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      className={`absolute inset-0 rounded-xl ${
                        darkMode
                          ? "bg-cyan-400/10"
                          : "bg-cyan-50"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item}
                  </span>

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                      active
                        ? "w-5"
                        : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 xl:flex">
            <motion.button
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${FOCUS_RING} ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-slate-200 bg-slate-100 text-slate-700"
              }`}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                y: -1,
              }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 ${FOCUS_RING}`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* MOBILE / TABLET BUTTONS */}
          <div className="flex items-center gap-2 xl:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${FOCUS_RING} ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-slate-200 bg-slate-100 text-slate-700"
              }`}
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${FOCUS_RING} ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{ duration: 0.25 }}
              className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.8rem] border p-3 shadow-2xl backdrop-blur-2xl xl:hidden ${
                darkMode
                  ? "border-white/10 bg-slate-950/90"
                  : "border-white bg-white/90"
              }`}
            >
              <div className="grid gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = activeSection === item;

                  return (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={`rounded-xl px-4 py-3 text-sm font-medium capitalize transition ${
                        active
                          ? darkMode
                            ? "bg-cyan-400/10 text-cyan-400"
                            : "bg-cyan-50 text-cyan-600"
                          : `${theme.text} hover:bg-slate-500/5`
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16"
      >
        {/* HERO GRID */}
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />

        {/* HERO ORBS */}
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          {/* HERO TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-600 backdrop-blur-xl dark:text-cyan-400"
            >
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={16} />
              </motion.span>

              Available for new opportunities
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-500"
            >
              Hello, I'm
            </motion.p>

            {/* STAGGERED NAME */}
            <motion.h2
              variants={itemVariants}
              className={`text-5xl font-black leading-[1.05] sm:text-6xl xl:text-7xl ${theme.heading}`}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  Kartik
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.35,
                    ease: "easeOut",
                  }}
                  className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent"
                >
                  R Avaghan
                </motion.span>
              </span>
            </motion.h2>

            {/* ROTATING ROLE */}
            <motion.div
              variants={itemVariants}
              className={`mt-6 flex min-h-[44px] items-center text-2xl font-semibold sm:text-3xl ${theme.heading}`}
            >
              <span className="mr-3 text-cyan-500">
                &lt;/&gt;
              </span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLE_TEXTS[roleIndex]}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -16,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {ROLE_TEXTS[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.text}`}
            >
              Full Stack Developer with{" "}
              <span className={`font-semibold ${theme.heading}`}>
                1+ year of experience
              </span>{" "}
              building scalable applications using Java,
              Spring Boot, React.js, MySQL, and RESTful APIs
              with a strong focus on backend development.
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="/Kartik_Avaghan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.97 }}
                className={`group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 font-bold text-white shadow-xl shadow-cyan-500/20 ${FOCUS_RING}`}
              >
                Download Resume

                <ArrowDown
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 rounded-2xl border px-6 py-4 font-semibold backdrop-blur-xl transition ${
                  darkMode
                    ? "border-white/10 bg-white/[0.05] hover:bg-white/[0.09]"
                    : "border-slate-200 bg-white/70 hover:bg-white"
                } ${FOCUS_RING}`}
              >
                View My Projects

                <ChevronRight size={19} />
              </motion.a>
            </motion.div>

            {/* TECHNOLOGY IMAGES */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {[
                {
                  name: "Java",
                  image: javaImage,
                },
                {
                  name: "Spring Boot",
                  image: springBootImage,
                },
                {
                  name: "React",
                  image: reactImage,
                },
                {
                  name: "MySQL",
                  image: mysqlImage,
                },
                {
                  name: "JavaScript",
                  image: jsImage,
                },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  className={`group flex items-center gap-2 rounded-2xl border px-3 py-2 backdrop-blur-xl ${theme.badge}`}
                >
                  {/* <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
                  /> */}

                  <span className="text-xs font-medium sm:text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* PROFILE AREA */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="order-1 flex justify-center lg:order-2"
          >
            <HeroProfile
              darkMode={darkMode}
              theme={theme}
              shouldReduceMotion={shouldReduceMotion}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative scroll-mt-28 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="01"
            title="About Me"
            subtitle="A backend-focused full stack developer building secure and scalable applications."
            darkMode={darkMode}
          />

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <Reveal direction="left">
              <SpotlightCard
                className={`rounded-[2rem] border p-7 shadow-xl sm:p-10 ${theme.card}`}
              >
                <p
                  className={`text-lg leading-8 ${theme.text}`}
                >
                  I am a Full Stack Developer with strong
                  expertise in backend development using{" "}
                  <span
                    className={`font-semibold ${theme.heading}`}
                  >
                    Java and Spring Boot
                  </span>
                  . I have experience building secure REST APIs,
                  implementing JWT Authentication and Role-Based
                  Access Control, designing MySQL databases, and
                  integrating backend services with React.js.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Feature
                    icon={<Server />}
                    title="Backend Focus"
                    text="Spring Boot, REST APIs, JPA/Hibernate and business logic."
                    darkMode={darkMode}
                  />

                  <Feature
                    icon={<ShieldCheck />}
                    title="Secure Applications"
                    text="JWT Authentication, OAuth2 and Role-Based Access Control."
                    darkMode={darkMode}
                  />

                  <Feature
                    icon={<Database />}
                    title="Database Design"
                    text="MySQL database design and application data management."
                    darkMode={darkMode}
                  />

                  <Feature
                    icon={<Layers />}
                    title="Full Stack"
                    text="React.js integration with scalable backend services."
                    darkMode={darkMode}
                  />
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal direction="right">
              <SpotlightCard className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/[0.06] to-violet-500/10 p-7 shadow-xl backdrop-blur-xl">
                <User
                  className="mb-6 text-cyan-500"
                  size={38}
                />

                <h3
                  className={`text-2xl font-bold ${theme.heading}`}
                >
                  Quick Profile
                </h3>

                <div className="mt-7 space-y-5">
                  <ProfileItem
                    label="Experience"
                    value="1+ Year in Software Development"
                    darkMode={darkMode}
                  />

                  <ProfileItem
                    label="Specialization"
                    value="Java Backend & Full Stack Development"
                    darkMode={darkMode}
                  />

                  <ProfileItem
                    label="Primary Skills"
                    value="Java, Spring Boot, REST APIs & MySQL"
                    darkMode={darkMode}
                  />

                  <ProfileItem
                    label="Current Role"
                    value="Software Developer at Thincnext"
                    darkMode={darkMode}
                  />
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className={`relative scroll-mt-28 border-y py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            title="Technical Skills"
            subtitle="Technologies and tools I use to build modern, secure and scalable applications."
            darkMode={darkMode}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
              >
                <SpotlightCard
                  className={`group h-full rounded-[2rem] border p-7 shadow-lg transition duration-300 ${theme.card}`}
                >
                  <div className="flex  items-center gap-4">
                   

                    {/* <div> */}
                      <div className=" text-cyan-500">
                        <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      // className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10 p-3"
                    >
                        {skill.icon}
                        </motion.div>
                      </div>

                      <h3
                        className={`text-xl font-bold ${theme.heading}`}
                      >
                        {skill.category}
                      </h3>
                    </div>
                  {/* </div> */}

                  <div className="mt-7 flex flex-wrap gap-3">
                    {skill.skills.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className={`rounded-xl border px-3 py-2 text-sm transition ${theme.badge}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <Reveal className="mt-6">
            <SpotlightCard
              className={`rounded-[2rem] border p-6 shadow-lg ${theme.card}`}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                  <Terminal size={28} />
                </div>

                <div>
                  <h3
                    className={`font-bold ${theme.heading}`}
                  >
                    Additional Technology
                  </h3>

                  <p className={`mt-1 ${theme.text}`}>
                    Flutter Basics — Cross-platform mobile
                    application development.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="scroll-mt-28 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="03"
            title="Education"
            subtitle="My academic background and Java full stack development training."
            darkMode={darkMode}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <EducationCard
                image={stjit}
                title="STJ Institute Of Technology"
                subtitle="Bachelors in Electronics and Communication Engineering"
                date="2021 – 2025"
                points={[
                  "Studied core electronics subjects and communication systems.",
                  "Implemented several projects based on Electronics Engineering Course.",
                  "CGPA: 8.8",
                ]}
                darkMode={darkMode}
                color="cyan"
              />
            </Reveal>

            <Reveal direction="right">
              <EducationCard
                image={jspiders}
                title="JSpiders Training Institute"
                subtitle="Java Full Stack Developer"
                date="07/2025 – 12/2025"
                points={[
                  "Learning Java, Spring Boot, SQL, and backend development.",
                  "Working on real-world full-stack projects with React.",
                ]}
                darkMode={darkMode}
                color="violet"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className={`scroll-mt-28 border-y py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="04"
            title="Work Experience"
            subtitle="Professional experience building and maintaining full-stack enterprise applications."
            darkMode={darkMode}
          />

          <Reveal>
            <SpotlightCard
              className={`rounded-[2rem] border p-7 shadow-xl sm:p-10 ${theme.card}`}
            >
              <div className="flex flex-col justify-between gap-5 border-b border-slate-300/20 pb-6 md:flex-row">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                    Software Developer
                  </p>

                  <h3
                    className={`mt-2 text-2xl font-bold ${theme.heading}`}
                  >
                    Thincnext
                  </h3>

                  <p className={`mt-2 ${theme.text}`}>
                    Full Stack Development • Backend Focus
                  </p>
                </div>

                <motion.span
                  whileHover={{ scale: 1.04 }}
                  className="h-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400"
                >
                  July 2025 – Present
                </motion.span>
              </div>

              <ul className="mt-7 space-y-5">
                {[
                  "Developed end-to-end full-stack features using Java, Spring Boot, React.js, and MySQL.",
                  "Designed and implemented secure REST APIs, JWT Authentication, and Role-Based Access Control.",
                  "Developed React.js frontend modules and managed application state using Redux Toolkit.",
                  "Resolved production issues through debugging, log analysis, and defect fixes.",
                  "Improved application performance by optimizing APIs and database queries.",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className={`flex gap-4 ${theme.text}`}
                  >
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/40" />

                    <p className="leading-7">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="scroll-mt-28 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="05"
            title="Featured Projects"
            subtitle="Projects demonstrating backend, full-stack, microservices and AI development experience."
            darkMode={darkMode}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid gap-7 md:grid-cols-2"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
              >
                <ProjectCard
                  project={project}
                  theme={theme}
                  darkMode={darkMode}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className={`scroll-mt-28 border-t py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div
              className={`overflow-hidden rounded-[2rem] border shadow-2xl ${theme.card}`}
            >
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 p-8 text-white sm:p-12">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative z-10">
                    <p className="font-semibold uppercase tracking-[0.2em]">
                      Get In Touch
                    </p>

                    <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                      Let's build something great together.
                    </h2>

                    <p className="mt-6 leading-7 text-white/80">
                      I am open to Java Backend Developer and
                      Full Stack Developer opportunities.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <motion.a
                        href="mailto:avaghankartik@gmail.com"
                        whileHover={{
                          scale: 1.04,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2 rounded-2xl bg-slate-800 px-6 py-4 font-bold text-white shadow-xl ${FOCUS_RING}`}
                      >
                        Send Email

                        <ArrowUpRight size={18} />
                      </motion.a>

                      <CopyEmailButton email="avaghankartik@gmail.com" />
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-12">
                  <h3
                    className={`text-2xl font-bold ${theme.heading}`}
                  >
                    Contact Information
                  </h3>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <ContactCard
                      icon={<Mail />}
                      title="Email"
                      value="avaghankartik@gmail.com"
                      href="mailto:avaghankartik@gmail.com"
                      darkMode={darkMode}
                    />

                    <ContactCard
                      icon={<Phone />}
                      title="Phone"
                      value="+91 7349524086"
                      href="tel:+917349524086"
                      darkMode={darkMode}
                    />

                    <ContactCard
                      icon={<Linkedin />}
                      title="LinkedIn"
                      value="kartik-r-avaghan"
                      href="https://www.linkedin.com/in/kartik-r-avaghan/"
                      external
                      darkMode={darkMode}
                    />

                    <ContactCard
                      icon={<Github />}
                      title="GitHub"
                      value="Kartik-Avaghan"
                      href="https://github.com/Kartik-Avaghan"
                      external
                      darkMode={darkMode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className={`border-t py-8 text-center ${
          darkMode
            ? "border-white/10 bg-[#07111f]"
            : "border-slate-200 bg-white"
        }`}
      >
        <p className={`text-sm ${theme.text}`}>
          © 2026 Kartik R Avaghan • Built with React,
          Vite & Tailwind CSS
        </p>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            whileHover={{
              scale: 1.1,
              y: -3,
            }}
            whileTap={{ scale: 0.92 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-500/25 ${FOCUS_RING}`}
          >
            <ArrowUpRight
              className="-rotate-45"
              size={20}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function AnimatedBackground({ darkMode }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`background-grid absolute inset-0 ${
          darkMode
            ? "opacity-[0.12]"
            : "opacity-[0.5]"
        }`}
      />

      <div
        className={`background-orb orb-one ${
          darkMode
            ? "bg-cyan-500/20"
            : "bg-cyan-300/40"
        }`}
      />

      <div
        className={`background-orb orb-two ${
          darkMode
            ? "bg-blue-600/20"
            : "bg-blue-300/35"
        }`}
      />

      <div
        className={`background-orb orb-three ${
          darkMode
            ? "bg-violet-600/15"
            : "bg-violet-300/30"
        }`}
      />

      <div
        className={`background-orb orb-four ${
          darkMode
            ? "bg-cyan-400/10"
            : "bg-cyan-200/30"
        }`}
      />

      <div className="particle particle-one" />
      <div className="particle particle-two" />
      <div className="particle particle-three" />
      <div className="particle particle-four" />
      <div className="particle particle-five" />
    </div>
  );
}

/* =========================================================
   MOUSE GLOW
========================================================= */

function MouseGlow({ darkMode }) {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return;

      glowRef.current.style.transform =
        `translate3d(${event.clientX - 180}px, ${
          event.clientY - 180
        }px, 0)`;
    };

    window.addEventListener("pointermove", handleMouseMove, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "pointermove",
        handleMouseMove
      );
  }, []);

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none fixed left-0 top-0 z-[5] hidden h-[360px] w-[360px] rounded-full blur-3xl transition-transform duration-300 ease-out lg:block ${
        darkMode
          ? "bg-cyan-400/[0.055]"
          : "bg-blue-400/[0.08]"
      }`}
    />
  );
}

/* =========================================================
   HERO PROFILE
========================================================= */

function HeroProfile({
  darkMode,
  theme,
  shouldReduceMotion,
}) {
  const profileRef = useRef(null);

  const handleMove = (event) => {
    if (shouldReduceMotion || !profileRef.current) return;

    const rect =
      profileRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    profileRef.current.style.setProperty(
      "--rotate-x",
      `${-y * 8}deg`
    );

    profileRef.current.style.setProperty(
      "--rotate-y",
      `${x * 8}deg`
    );
  };

  const resetMove = () => {
    if (!profileRef.current) return;

    profileRef.current.style.setProperty(
      "--rotate-x",
      "0deg"
    );

    profileRef.current.style.setProperty(
      "--rotate-y",
      "0deg"
    );
  };

 return (
  <div className="relative isolate mx-auto w-full max-w-[320px] perspective-container sm:max-w-[420px]">
  
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="profile-ring profile-ring-one" />
    <div className="profile-ring profile-ring-two" />
  </div>

      {/* FLOATING TECH IMAGES */}
      {FLOATING_TECH.map((tech) => (
        <motion.div
          key={tech.name}
          className={`absolute z-20  ${tech.className}`}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -10, 0],
                  rotate: [0, 4, 0],
                }
          }
          transition={{
            duration: tech.duration,
            delay: tech.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`flex  h-14 w-14 items-center justify-center rounded-2xl border p-2.5 shadow-xl backdrop-blur-xl sm:h-16 sm:w-16 ${
              darkMode
                ? "border-white/10 bg-slate-900/75"
                : "border-white bg-white/85"
            }`}
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      ))}

      {/* PROFILE */}
      <div
        ref={profileRef}
        onPointerMove={handleMove}
        onPointerLeave={resetMove}
        className="profile-tilt relative"
      >
        <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-400/25 via-blue-500/20 to-violet-500/25 blur-3xl" />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -7, 0],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`relative rounded-[2.5rem] border p-3 shadow-2xl backdrop-blur-xl ${theme.card}`}
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={kartik}
              alt="Portrait"
              className="h-72 w-72 object-cover sm:h-96 sm:w-96"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* EXPERIENCE CARD */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -bottom-5 -left-3 z-30 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-8 ${theme.secondaryCard}`}
      >
        <p className={`text-xs ${theme.text}`}>
          Experience
        </p>

        <p className="mt-1 text-xl font-bold text-cyan-500">
          1+ Year
        </p>
      </motion.div>

      {/* BACKEND CARD */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 8, 0],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute right-0 -top-5 z-30 w-24 rounded-2xl border px-3 py-3 shadow-xl backdrop-blur-xl sm:-right-10 sm:w-auto sm:px-4 ${theme.secondaryCard}`}
      >
        <p className={`text-[10px] sm:text-xs ${theme.text}`}>
          Primary Focus
        </p>

        <p className={`mt-1 font-bold ${theme.heading}`}>
          Backend
        </p>
      </motion.div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  theme,
  darkMode,
}) {
  const cardRef = useRef(null);

  // const handleMove = (event) => {
  //   if (!cardRef.current) return;

  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();

  //   const x =
  //     ((event.clientX - rect.left) / rect.width) * 100;

  //   const y =
  //     ((event.clientY - rect.top) / rect.height) * 100;

  //   const rotateY =
  //     ((event.clientX - rect.left) / rect.width - 0.5) *
  //     6;

  //   const rotateX =
  //     -(
  //       (event.clientY - rect.top) / rect.height -
  //       0.5
  //     ) * 6;

  //   card.style.setProperty("--mouse-x", `${x}%`);
  //   card.style.setProperty("--mouse-y", `${y}%`);

  //   card.style.transform =
  //     `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;
  // };

  // const handleLeave = () => {
  //   if (!cardRef.current) return;

  //   cardRef.current.style.transform =
  //     "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
  // };

  return (
    <div
      // ref={cardRef}
      // onPointerMove={handleMove}
      // onPointerLeave={handleLeave}
      className={`project-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border shadow-xl transition-transform duration-300 ease-out ${theme.card}`}
    >
      {/* PROJECT IMAGE */}
      <div className="relative h-56 overflow-hidden border-b border-slate-300/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <ProjectPlaceholder
            project={project}
            darkMode={darkMode}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        <div className="absolute right-5 top-5">
          <span className="rounded-full border border-white/20 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
            {project.type}
          </span>
        </div>

        {/* <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl">
          {project.icon}
        </div> */}
      </div>

      {/* CONTENT */}
      <div className="relative flex flex-1 flex-col p-7">
        <h3
          className={`text-2xl font-bold ${theme.heading}`}
        >
          {project.title}
        </h3>

        <p className={`mt-1 ${theme.text}`}>
          {project.subtitle}
        </p>

        <ul className="mt-3">
          {project.description.map((item) => (
            <li
              key={item}
              className={`flex gap-3 text-sm leading-6 ${theme.text}`}
            >
              <span className="text-cyan-500">
                ✦
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-xl border px-3 py-2 text-xs ${theme.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            x: 4,
          }}
          className={`mt-6 inline-flex w-fit items-center gap-2 rounded-xl text-sm font-bold text-cyan-500 transition hover:text-blue-500 ${FOCUS_RING}`}
        >
          View Project

          <ArrowUpRight size={17} />
        </motion.a>
      </div>
    </div>
  );
}

function ProjectPlaceholder({
  project,
  darkMode,
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
          : "bg-gradient-to-br from-cyan-100 via-blue-100 to-violet-100"
      }`}
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 3,
        }}
        className={`relative flex h-28 w-[80%] items-center justify-center rounded-2xl border shadow-2xl backdrop-blur-xl ${
          darkMode
            ? "border-white/10 bg-white/[0.05]"
            : "border-white bg-white/60"
        }`}
      >
        <div className="text-center">
          <div className="mb-3 flex justify-center text-cyan-500">
            <CodeXml size={32} />
          </div>

          <p
            className={`font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {project.title}
          </p>

          <p
            className={`mt-1 text-xs ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Project Preview
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   SPOTLIGHT CARD
========================================================= */

function SpotlightCard({
  children,
  className = "",
}) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty(
      "--spotlight-x",
      `${x}%`
    );

    cardRef.current.style.setProperty(
      "--spotlight-y",
      `${y}%`
    );
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      className={`spotlight-card relative overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 spotlight-effect" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({
  children,
  className = "",
  direction = "up",
}) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x:
      direction === "left"
        ? -40
        : direction === "right"
        ? 40
        : 0,
    scale: direction === "scale" ? 0.95 : 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   COPY EMAIL
========================================================= */

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{ scale: 0.97 }}
      onClick={handleCopy}
      className={`flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur-xl ${FOCUS_RING}`}
    >
      {copied ? (
        <Check size={16} />
      ) : (
        <Copy size={16} />
      )}

      {copied
        ? "Copied!"
        : "Copy Email"}
    </motion.button>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  number,
  title,
  subtitle,
  darkMode,
}) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-cyan-500">
            {number}
          </span>

          <div className="h-px w-14 bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>

        <h2
          className={`mt-4 text-4xl font-black tracking-tight sm:text-5xl ${
            darkMode
              ? "text-white"
              : "text-slate-950"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-4 max-w-3xl text-lg leading-7 ${
            darkMode
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </Reveal>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({
  icon,
  title,
  text,
  darkMode,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      className={`rounded-2xl border p-5 transition ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-slate-50/80"
      }`}
    >
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        className="mb-4 w-fit text-cyan-500"
      >
        {icon}
      </motion.div>

      <h4
        className={`font-bold ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        {title}
      </h4>

      <p
        className={`mt-2 text-sm leading-6 ${
          darkMode
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PROFILE ITEM
========================================================= */

function ProfileItem({
  label,
  value,
  darkMode,
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p
        className={`mt-1 font-medium ${
          darkMode
            ? "text-slate-200"
            : "text-slate-800"
        }`}
      >
        {value}
      </p>
    </motion.div>
  );
}

/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCard({
  image,
  title,
  subtitle,
  date,
  points,
  darkMode,
  color,
}) {
  const colorClass =
    color === "violet"
      ? "text-violet-500"
      : "text-cyan-500";

  return (
    <SpotlightCard
      className={`h-full rounded-[2rem] border p-6 shadow-xl ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <motion.img
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          src={image}
          alt={title}
          className="h-20 w-20 rounded-2xl object-cover shadow-xl"
        />

        <div>
          <h2
            className={`text-xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mt-2 ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>

          <p
            className={`mt-3 font-semibold ${colorClass}`}
          >
            {date}
          </p>
        </div>
      </div>

      <ul
        className={`mt-6 space-y-1 ${
          darkMode
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-3"
          >
            <span className={colorClass}>
              •
            </span>

            {point}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
  darkMode,
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className={`group rounded-2xl border p-5 transition ${FOCUS_RING} ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-cyan-500">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500">
            {title}
          </p>

          <p
            className={`mt-1 truncate text-sm font-medium transition group-hover:text-cyan-500 ${
              darkMode
                ? "text-slate-200"
                : "text-slate-800"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  );
}