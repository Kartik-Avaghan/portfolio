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
} from "lucide-react";

import kartik from "./assets/kartik.jpeg";
import stjit from "./assets/stjit.jpg";
import jspiders from "./assets/jspiders.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "about",
    "skills",
    "education",
    "experience",
    "projects",
    "contact",
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
      icon: <BriefcaseBusiness size={32} />,
      type: "Company Project",
      description: [
        "Developed backend modules for vehicle management, including creation, publishing, CRUD operations, and optimized data handling.",
        "Built an admin dashboard for managing vehicle inventories, pricing, listing publication, and staff and user management.",
        "Integrated frontend and backend services to provide seamless data flow and a consistent user experience.",
      ],
      stack: ["Spring Boot", "React.js", "Redux Toolkit", "MySQL"],
      link: "https://github.com/Kartik-Avaghan",
    },
    {
      title: "KFCC",
      subtitle: "Film Chamber Workflow Management System",
      icon: <Workflow size={32} />,
      type: "Company Project",
      description: [
        "Developed dynamic role-based dashboards for a multi-level workflow management system.",
        "Implemented role-specific approval processes and concurrent workflow management.",
        "Integrated React.js frontend modules with Spring Boot REST APIs using reusable components, validation, and optimized state management.",
      ],
      stack: ["Spring Boot", "React.js", "Redux Toolkit", "REST APIs"],
      link: "https://github.com/Kartik-Avaghan",
    },
    {
      title: "PG Management System",
      subtitle: "Full-Stack Management Platform",
      icon: <Database size={32} />,
      type: "Academic Project",
      description: [
        "Built a full-stack PG management system with JWT authentication, RBAC, room allocation, complaint management, and CRUD operations.",
        "Developed secure backend APIs using Spring Boot and integrated them with a React.js frontend.",
        "Implemented a Payment Microservice with payment gateway integration and containerized deployment using Docker.",
      ],
      stack: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
      link: "https://github.com/Kartik-Avaghan/pgmanagement",
    },
    {
      title: "AI Chatbot",
      subtitle: "Spring AI & Ollama LLM",
      icon: <BrainCircuit size={32} />,
      type: "Academic Project",
      description: [
        "Developed an AI-powered chatbot integrating Spring AI with Ollama LLM for real-time responses and streaming.",
        "Built scalable Spring Boot REST APIs for efficient prompt handling.",
        "Developed a React.js frontend to provide a seamless and responsive chat experience.",
      ],
      stack: ["Java", "Spring Boot", "Spring AI", "Ollama", "React.js"],
      link: "https://github.com/Kartik-Avaghan",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white scroll-smooth">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 z-[100] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
        <div className="absolute top-[300px] right-[-150px] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] left-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-1 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-110">
              KA
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide sm:text-xl">
                Kartik Avaghan
              </h1>
              <p className="text-xs text-slate-400">
                Java Full Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium capitalize text-slate-300 transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 backdrop-blur-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 capitalize text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-center font-semibold text-slate-950"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center pt-28 pb-16"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Available for new opportunities
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Hello, I'm
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl xl:text-7xl">
              Kartik{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                R Avaghan
              </span>
            </h2>

            <h3 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
              Java Full Stack Developer
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Full Stack Developer with{" "}
              <span className="font-semibold text-slate-200">
                1+ year of experience
              </span>{" "}
              building scalable applications using Java, Spring Boot, React.js,
              MySQL, and RESTful APIs, with a strong focus on backend
              development.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/Kartik_Avaghan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-blue-500/40"
              >
                Download Resume
                <ArrowDown
                  size={19}
                  className="transition group-hover:translate-y-1"
                />
              </a>

              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                View My Projects
                <ChevronRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "React.js",
                "MySQL",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-violet-500/30 blur-2xl animate-pulse" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <img
                  src={kartik}
                  alt="Kartik Avaghan"
                  className="h-72 w-72 rounded-[1.5rem] object-cover shadow-2xl sm:h-96 sm:w-96"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs text-slate-400">Experience</p>
                <p className="text-xl font-bold text-cyan-400">1+ Year</p>
              </div>

              <div className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs text-slate-400">Primary Focus</p>
                <p className="font-bold text-white">Backend Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="01"
            title="About Me"
            subtitle="A backend-focused full stack developer building secure and scalable applications."
          />

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-10">
              <p className="text-lg leading-8 text-slate-300">
                I am a Full Stack Developer with strong expertise in backend
                development using{" "}
                <span className="font-semibold text-white">
                  Java and Spring Boot
                </span>
                . I have experience building secure REST APIs, implementing JWT
                Authentication and Role-Based Access Control, designing database
                solutions with MySQL, and integrating backend services with
                React.js applications.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Feature
                  icon={<Server />}
                  title="Backend Focus"
                  text="Spring Boot, REST APIs, Security, JPA/Hibernate and business logic."
                />

                <Feature
                  icon={<ShieldCheck />}
                  title="Secure Applications"
                  text="JWT Authentication, OAuth2 and Role-Based Access Control."
                />

                <Feature
                  icon={<Database />}
                  title="Database Design"
                  text="MySQL database design, queries and application data management."
                />

                <Feature
                  icon={<Layers />}
                  title="End-to-End Development"
                  text="Integrating React.js frontends with scalable backend services."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-7">
              <User className="mb-6 text-cyan-400" size={38} />

              <h3 className="text-2xl font-bold">Quick Profile</h3>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium text-slate-200">
                    Bengaluru, India
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Experience</p>
                  <p className="font-medium text-slate-200">
                    1+ Year in Software Development
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Specialization</p>
                  <p className="font-medium text-slate-200">
                    Java Backend & Full Stack Development
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Currently</p>
                  <p className="font-medium text-slate-200">
                    Software Developer at Thincnext
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            title="Technical Skills"
            subtitle="Technologies and tools I use to build secure, scalable and modern applications."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group rounded-3xl border border-white/10 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-blue-400/40 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 to-blue-500/10 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Terminal className="text-violet-400" size={28} />

              <div>
                <h3 className="font-bold">Additional Technology</h3>
                <p className="mt-1 text-slate-400">
                  Flutter Basics — Cross-platform Android/iOS application
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education - PRESERVED */}
      <section id="education" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="03"
            title="Education"
            subtitle="My academic background and Java full stack development training."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* College - Kept */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={stjit}
                  alt="STJ Institute Of Technology"
                  className="h-20 w-20 rounded-2xl object-cover shadow-xl"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    STJ Institute Of Technology
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Bachelors in Electronics and Communication Engineering
                  </p>

                  <p className="mt-3 font-semibold text-cyan-400">
                    2021 – 2025
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  Studied core electronics subjects and communication systems.
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  Implemented several projects based on Electronics Engineering
                  Course.
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400">•</span>
                  CGPA: 8.8
                </li>
              </ul>
            </div>

            {/* JSpiders / Internship Card - Kept */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={jspiders}
                  alt="JSpiders"
                  className="h-20 w-20 rounded-2xl object-cover shadow-xl"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    JSpiders Training Institute
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Java Full Stack Developer
                  </p>

                  <p className="mt-3 font-semibold text-violet-400">
                    07/2025 – 11/2025
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-violet-400">•</span>
                  Learning Java, Spring Boot, SQL, and backend development.
                </li>

                <li className="flex gap-3">
                  <span className="text-violet-400">•</span>
                  Working on real-world full-stack projects with React.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-white/5 bg-white/[0.02] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="04"
            title="Work Experience"
            subtitle="Professional experience building and maintaining full-stack enterprise applications."
          />

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent sm:block" />

            <div className="relative sm:pl-16">
              <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 text-slate-950 sm:flex">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl transition duration-300 hover:border-cyan-400/30 sm:p-9">
                <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                      Software Developer
                    </p>

                    <h3 className="text-2xl font-bold">Thincnext</h3>

                    <p className="mt-2 text-slate-400">
                      Full Stack Development • Backend Focus
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                    July 2025 – Present
                  </span>
                </div>

                <ul className="mt-7 space-y-5">
                  <ExperienceItem>
                    Developed end-to-end full-stack features using Java, Spring
                    Boot, React.js, and MySQL, primarily contributing to backend
                    development, REST API implementation, and business logic.
                  </ExperienceItem>

                  <ExperienceItem>
                    Designed and implemented secure REST APIs, JWT
                    Authentication, and Role-Based Access Control for enterprise
                    applications.
                  </ExperienceItem>

                  <ExperienceItem>
                    Developed React.js frontend modules, integrated REST APIs,
                    and managed application state using Redux Toolkit.
                  </ExperienceItem>

                  <ExperienceItem>
                    Resolved production issues through debugging, log analysis,
                    and defect fixes across backend and frontend applications.
                  </ExperienceItem>

                  <ExperienceItem>
                    Improved application performance by optimizing APIs, database
                    queries, and resolving performance bottlenecks.
                  </ExperienceItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            number="05"
            title="Featured Projects"
            subtitle="Projects demonstrating my experience in backend development, full-stack systems, microservices and AI integration."
          />

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between border-b border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7">
                  <div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                      {project.type}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-slate-400">{project.subtitle}</p>
                  </div>

                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-400 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {project.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <ul className="space-y-4">
                    {project.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-slate-400 sm:text-base"
                      >
                        <span className="mt-1 text-cyan-400">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    View GitHub
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-blue-950/30 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              {/* Left */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-8 text-slate-950 sm:p-12">
                <p className="font-semibold uppercase tracking-[0.2em]">
                  Get In Touch
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Let's build something great together.
                </h2>

                <p className="mt-6 max-w-md leading-7 text-slate-900/80">
                  I am open to Java Backend Developer and Full Stack Developer
                  opportunities where I can contribute to building scalable and
                  reliable software applications.
                </p>

                <a
                  href="mailto:avaghankartik@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:scale-105"
                >
                  Send Email
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Right */}
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <ContactCard
                    icon={<Mail />}
                    title="Email"
                    value="avaghankartik@gmail.com"
                    href="mailto:avaghankartik@gmail.com"
                  />

                  <ContactCard
                    icon={<Phone />}
                    title="Phone"
                    value="+91 7349524086"
                    href="tel:+917349524086"
                  />

                  <ContactCard
                    icon={<Linkedin />}
                    title="LinkedIn"
                    value="kartik-r-avaghan"
                    href="https://www.linkedin.com/in/kartik-r-avaghan/"
                    external
                  />

                  <ContactCard
                    icon={<Github />}
                    title="GitHub"
                    value="Kartik-Avaghan"
                    href="https://github.com/Kartik-Avaghan"
                    external
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Kartik R Avaghan • Built with React, Vite & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

/* =========================
   Reusable Components
========================= */

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-bold text-cyan-400">
          {number}
        </span>

        <div className="h-px w-12 bg-cyan-400/50" />
      </div>

      <h2 className="mt-4 text-4xl font-black sm:text-5xl">{title}</h2>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
      <div className="mb-4 text-cyan-400">{icon}</div>

      <h4 className="font-bold text-white">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function ExperienceItem({ children }) {
  return (
    <li className="flex gap-4 text-slate-400">
      <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      <p className="leading-7">{children}</p>
    </li>
  );
}

function ContactCard({ icon, title, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >
      <div className="flex items-center gap-3">
        <div className="text-cyan-400">{icon}</div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500">{title}</p>

          <p className="mt-1 truncate text-sm font-medium text-slate-200 transition group-hover:text-cyan-300">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}