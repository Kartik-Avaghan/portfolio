import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
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
} from "lucide-react";

import kartik from "./assets/kartik.jpeg";
import stjit from "./assets/stjit.jpg";
import jspiders from "./assets/jspiders.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "about",
    "skills",
    "education",
    "experience",
    "projects",
    "contact",
  ];

  const skills = [
    {
      category: "Backend Development",
      icon: <Server size={28} />,
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
      icon: <Code2 size={28} />,
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
      icon: <ShieldCheck size={28} />,
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
      icon: <Container size={28} />,
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

  const projects = [
    {
      title: "Reride",
      subtitle: "Vehicle Management & Tracking Platform",
      icon: <BriefcaseBusiness size={30} />,
      type: "Company Project",
      description: [
        "Developed backend modules for vehicle management including creation, publishing, CRUD operations, and optimized data handling.",
        "Built an admin dashboard for vehicle inventories, pricing, listing publication, and user management.",
        "Integrated frontend and backend services for seamless data flow.",
      ],
      stack: ["Spring Boot", "React.js", "Redux Toolkit", "MySQL"],
      link: "https://github.com/Kartik-Avaghan",
    },
    {
      title: "KFCC",
      subtitle: "Film Chamber Workflow Management System",
      icon: <Workflow size={30} />,
      type: "Company Project",
      description: [
        "Developed dynamic role-based dashboards for a multi-level workflow management system.",
        "Implemented role-specific approval processes and concurrent workflow management.",
        "Integrated React.js modules with Spring Boot REST APIs.",
      ],
      stack: ["Spring Boot", "React.js", "Redux Toolkit", "REST APIs"],
      link: "https://github.com/Kartik-Avaghan",
    },
    {
      title: "PG Management System",
      subtitle: "Full-Stack Management Platform",
      icon: <Database size={30} />,
      type: "Academic Project",
      description: [
        "Built a full-stack PG management system with JWT authentication and RBAC.",
        "Implemented room allocation, complaint management, payment functionality, and CRUD operations.",
        "Containerized services using Docker.",
      ],
      stack: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
      link: "https://github.com/Kartik-Avaghan",
    },
    {
      title: "AI Chatbot",
      subtitle: "Spring AI & Ollama LLM",
      icon: <BrainCircuit size={30} />,
      type: "Academic Project",
      description: [
        "Developed an AI-powered chatbot using Spring AI and Ollama.",
        "Built scalable Spring Boot REST APIs for prompt handling.",
        "Created a responsive React.js chat interface.",
      ],
      stack: ["Java", "Spring Boot", "Spring AI", "Ollama", "React.js"],
      link: "https://github.com/Kartik-Avaghan",
    },
  ];

  const theme = {
    page: darkMode
      ? "bg-slate-950 text-white"
      : "bg-slate-50 text-slate-900",

    nav: darkMode
      ? "bg-slate-950/80 border-white/10"
      : "bg-white/80 border-slate-200",

    card: darkMode
      ? "bg-white/[0.03] border-white/10"
      : "bg-white border-slate-200 shadow-lg shadow-slate-200/40",

    section: darkMode
      ? "bg-white/[0.02] border-white/5"
      : "bg-slate-100/80 border-slate-200",

    text: darkMode
      ? "text-slate-400"
      : "text-slate-600",

    heading: darkMode
      ? "text-white"
      : "text-slate-900",

    badge: darkMode
      ? "bg-white/5 border-white/10 text-slate-300"
      : "bg-slate-100 border-slate-200 text-slate-700",

    secondaryCard: darkMode
      ? "bg-slate-900/70 border-white/10"
      : "bg-white border-slate-200 shadow-lg",
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden scroll-smooth transition-colors duration-500 ${theme.page}`}
    >
      {/* SCROLL PROGRESS */}
      <div className="fixed left-0 top-0 z-[100] h-1 w-full">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl ${
            darkMode ? "bg-blue-600/20" : "bg-blue-300/30"
          } animate-pulse`}
        />

        <div
          className={`absolute -right-32 top-80 h-[450px] w-[450px] rounded-full blur-3xl ${
            darkMode ? "bg-violet-600/15" : "bg-violet-300/25"
          } animate-pulse`}
        />

        <div
          className={`absolute bottom-0 left-1/3 h-80 w-80 rounded-full blur-3xl ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-200/30"
          }`}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-1 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${theme.nav}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#hero"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-lg transition hover:scale-110">
              KA
            </div>

            <div>
              <h1 className={`font-bold ${theme.heading}`}>
                Kartik Avaghan
              </h1>

              <p className={`text-xs ${theme.text}`}>
                Java Full Stack Developer
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium capitalize transition hover:text-cyan-500 ${theme.text}`}
              >
                {item}
              </a>
            ))}

            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition hover:scale-110 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-slate-200 bg-slate-100 text-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-bold text-white transition hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div
            className={`border-t px-5 py-5 backdrop-blur-xl lg:hidden ${
              darkMode
                ? "border-white/10 bg-slate-950/95"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 capitalize transition ${
                    darkMode
                      ? "text-slate-300 hover:bg-white/5"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="flex min-h-screen items-center pt-28 pb-16"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          {/* HERO TEXT */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-500">
              <Sparkles size={16} />
              Available for new opportunities
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Hello, I'm
            </p>

            <h2
              className={`text-5xl font-black leading-tight sm:text-6xl xl:text-7xl ${theme.heading}`}
            >
              Kartik{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                R Avaghan
              </span>
            </h2>

            <h3 className={`mt-6 text-2xl font-semibold sm:text-3xl ${theme.heading}`}>
              Java Full Stack Developer
            </h3>

            <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${theme.text}`}>
              Full Stack Developer with{" "}
              <span className={theme.heading}>1+ year of experience</span>{" "}
              building scalable applications using Java, Spring Boot, React.js,
              MySQL, and RESTful APIs with a strong focus on backend
              development.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/Kartik_Avaghan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1"
              >
                Download Resume
                <ArrowDown size={19} />
              </a>

              <a
                href="#projects"
                className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-4 font-semibold transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/15 bg-white/5 hover:bg-white/10"
                    : "border-slate-300 bg-white hover:bg-slate-100"
                }`}
              >
                View My Projects
                <ChevronRight size={19} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-4 py-2 text-sm transition ${theme.badge}`}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* PROFILE */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-3xl animate-pulse" />

              <div
                className={`relative rounded-[2rem] border p-3 backdrop-blur-xl ${theme.card}`}
              >
                <img
                  src={kartik}
                  alt="Kartik Avaghan"
                  className="h-72 w-72 rounded-[1.5rem] object-cover shadow-2xl sm:h-96 sm:w-96"
                />
              </div>

              <div
                className={`absolute -bottom-5 -left-5 rounded-2xl border px-5 py-4 backdrop-blur-xl ${theme.secondaryCard}`}
              >
                <p className={`text-xs ${theme.text}`}>Experience</p>
                <p className="text-xl font-bold text-cyan-500">
                  1+ Year
                </p>
              </div>

              <div
                className={`absolute -right-4 top-8 rounded-2xl border px-4 py-3 backdrop-blur-xl ${theme.secondaryCard}`}
              >
                <p className={`text-xs ${theme.text}`}>Primary Focus</p>
                <p className={`font-bold ${theme.heading}`}>Backend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="01"
            title="About Me"
            subtitle="A backend-focused full stack developer building secure and scalable applications."
            darkMode={darkMode}
          />

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className={`rounded-3xl border p-7 sm:p-10 ${theme.card}`}>
              <p className={`text-lg leading-8 ${theme.text}`}>
                I am a Full Stack Developer with strong expertise in backend
                development using{" "}
                <span className={`font-semibold ${theme.heading}`}>
                  Java and Spring Boot
                </span>
                . I have experience building secure REST APIs, implementing JWT
                Authentication and Role-Based Access Control, designing MySQL
                databases, and integrating backend services with React.js.
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
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-7">
              <User className="mb-6 text-cyan-500" size={38} />

              <h3 className={`text-2xl font-bold ${theme.heading}`}>
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
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={`border-y py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            title="Technical Skills"
            subtitle="Technologies and tools I use to build modern, secure and scalable applications."
            darkMode={darkMode}
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 ${theme.card}`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-500 transition group-hover:scale-110">
                    {skill.icon}
                  </div>

                  <h3 className={`text-xl font-bold ${theme.heading}`}>
                    {skill.category}
                  </h3>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className={`rounded-lg border px-3 py-2 text-sm ${theme.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-6 rounded-3xl border p-6 ${theme.card}`}>
            <div className="flex items-center gap-4">
              <Terminal className="text-violet-500" size={28} />

              <div>
                <h3 className={`font-bold ${theme.heading}`}>
                  Additional Technology
                </h3>

                <p className={`mt-1 ${theme.text}`}>
                  Flutter Basics — Cross-platform mobile application
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION - KEEP YOUR EXISTING EDUCATION CONTENT */}
      <section id="education" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="03"
            title="Education"
            subtitle="My academic background and Java full stack development training."
            darkMode={darkMode}
          />

          <div className="grid gap-6 lg:grid-cols-2">
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

            <EducationCard
              image={jspiders}
              title="JSpiders Training Institute"
              subtitle="Java Full Stack Developer"
              date="07/2025 – 11/2025"
              points={[
                "Learning Java, Spring Boot, SQL, and backend development.",
                "Working on real-world full-stack projects with React.",
              ]}
              darkMode={darkMode}
              color="violet"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={`border-y py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="04"
            title="Work Experience"
            subtitle="Professional experience building and maintaining full-stack enterprise applications."
            darkMode={darkMode}
          />

          <div className={`rounded-3xl border p-7 sm:p-10 ${theme.card}`}>
            <div className="flex flex-col justify-between gap-5 border-b border-slate-300/20 pb-6 md:flex-row">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                  Software Developer
                </p>

                <h3 className={`mt-2 text-2xl font-bold ${theme.heading}`}>
                  Thincnext
                </h3>

                <p className={`mt-2 ${theme.text}`}>
                  Full Stack Development • Backend Focus
                </p>
              </div>

              <span className="h-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600">
                July 2025 – Present
              </span>
            </div>

            <ul className="mt-7 space-y-5">
              {[
                "Developed end-to-end full-stack features using Java, Spring Boot, React.js, and MySQL.",
                "Designed and implemented secure REST APIs, JWT Authentication, and Role-Based Access Control.",
                "Developed React.js frontend modules and managed application state using Redux Toolkit.",
                "Resolved production issues through debugging, log analysis, and defect fixes.",
                "Improved application performance by optimizing APIs and database queries.",
              ].map((item) => (
                <li key={item} className={`flex gap-4 ${theme.text}`}>
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-cyan-500" />
                  <p className="leading-7">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="05"
            title="Featured Projects"
            subtitle="Projects demonstrating backend, full-stack, microservices and AI development experience."
            darkMode={darkMode}
          />

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 ${theme.card}`}
              >
                <div className="border-b border-slate-300/20 p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-600">
                        {project.type}
                      </span>

                      <h3 className={`mt-5 text-2xl font-bold ${theme.heading}`}>
                        {project.title}
                      </h3>

                      <p className={`mt-2 ${theme.text}`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-500 transition group-hover:rotate-6 group-hover:scale-110">
                      {project.icon}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <ul className="space-y-4">
                    {project.description.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-sm leading-6 ${theme.text}`}
                      >
                        <span className="text-cyan-500">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-lg border px-3 py-2 text-xs ${theme.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-500 transition hover:text-blue-500"
                  >
                    View Project
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className={`border-t py-24 ${theme.section}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`overflow-hidden rounded-[2rem] border ${theme.card}`}
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-8 text-white sm:p-12">
                <p className="font-semibold uppercase tracking-[0.2em]">
                  Get In Touch
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Let's build something great together.
                </h2>

                <p className="mt-6 leading-7 text-white/80">
                  I am open to Java Backend Developer and Full Stack Developer
                  opportunities.
                </p>

                <a
                  href="mailto:avaghankartik@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:scale-105"
                >
                  Send Email
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="p-8 sm:p-12">
                <h3 className={`text-2xl font-bold ${theme.heading}`}>
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
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t py-8 text-center ${
          darkMode
            ? "border-white/10 bg-slate-950"
            : "border-slate-200 bg-white"
        }`}
      >
        <p className={`text-sm ${theme.text}`}>
          © 2026 Kartik R Avaghan • Built with React, Vite & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SectionHeading({ number, title, subtitle, darkMode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-bold text-cyan-500">
          {number}
        </span>

        <div className="h-px w-12 bg-cyan-500/50" />
      </div>

      <h2
        className={`mt-4 text-4xl font-black sm:text-5xl ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 max-w-3xl text-lg leading-7 ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

function Feature({ icon, title, text, darkMode }) {
  return (
    <div
      className={`rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mb-4 text-cyan-500">{icon}</div>

      <h4 className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
        {title}
      </h4>

      <p
        className={`mt-2 text-sm leading-6 ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function ProfileItem({ label, value, darkMode }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>

      <p
        className={`mt-1 font-medium ${
          darkMode ? "text-slate-200" : "text-slate-800"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

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
    color === "violet" ? "text-violet-500" : "text-cyan-500";

  return (
    <div
      className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-2 ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <img
          src={image}
          alt={title}
          className="h-20 w-20 rounded-2xl object-cover shadow-xl"
        />

        <div>
          <h2
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>

          <p className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            {subtitle}
          </p>

          <p className={`mt-3 font-semibold ${colorClass}`}>{date}</p>
        </div>
      </div>

      <ul
        className={`mt-7 space-y-3 ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className={colorClass}>•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
  darkMode,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-cyan-500">{icon}</div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500">{title}</p>

          <p
            className={`mt-1 truncate text-sm font-medium group-hover:text-cyan-500 ${
              darkMode ? "text-slate-200" : "text-slate-800"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}