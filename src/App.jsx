import React from "react";
import { Briefcase, Mail, Phone, Github, Linkedin } from "lucide-react";

// import java from "./assets/java.png";

// import springboot from "./assets/springboot.png";
// import react from "./assets/react.png";
// import tailwind from "./assets/tailwind.png";
// import mysql1 from "./assets/mysql1.png";
// import html2 from "./assets/html2.png";
// import bootstrap from "./assets/bootstrap.png";
// import js from "./assets/js.webp";
import kartik from "./assets/kartik.jpeg";
import stjit from "./assets/stjit.jpg";
import ecommerce from "./assets/projects/ecommerce.png";
import webapplication from "./assets/projects/webapplication.png";
import porfolio from "./assets/projects/porfolio.png";
import jspiders from "./assets/jspiders.jpg"
import pgmanagement from "./assets/projects/pgmanagement.png"
import Skill from "./Skill";


export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white  shadow-lg z-50 backdrop-blur bg-opacity-80">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <h1 className="rounded-xl px-3 py-1 text-2xl text-white font-bold bg-indigo-600 shadow-lg">KA</h1>
            <h1 className="text-2xl font-bold">Kartik Avaghan</h1>
          </div>

          <div className="hidden md:flex gap-6 text-lg font-medium">
            {[
              "about",
              "education",
              "skills",
              "experience",
              "projects",
              "contact",
            ].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-indigo-600 transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 p-4">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Hi, I am <span className="text-indigo-600">Kartik Avaghan</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              Full Stack Developer specializing in Java Spring Boot and React, dedicated to building modern, scalable, and user‑focused applications.
            </p>
            <div className="flex gap-4">
            <a 
  href="/Kartik_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition inline-block"
>
  Download Resume
</a>

              <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition">
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={kartik}
              alt="Kartik Avaghan"
              className="w-72 h-72 rounded-full shadow-2xl object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      

      {/* About */}
     <section id="about" className="py-15 bg-white">
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>

    <div className="flex flex-col md:flex-row gap-10">

      {/* LEFT SIDE */}
      <div className=" space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
          I am a passionate Full Stack Developer with a strong foundation in Java Spring Boot for backend development and React + Tailwind for building efficient frontend interfaces.
        </p>

        <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside">
          <li>Strong skills in HTML, CSS, JavaScript, React, MySql and Java.</li>
          <li>Focused on writing clean, scalable, and maintainable code.</li>
          <li>Dedicated to building responsive and user-friendly interfaces.</li>
        </ul>
      </div>

      {/* RIGHT SIDE = CONTACT INFO ONLY */}
      <div className="rounded-xl border-t-4 border-indigo-600 shadow-xl px-10  bg-white transition-all duration-200 hover:-translate-y-1
">
        <h2 className="text-xl font-semibold mb-2 pt-4">Contact Info</h2>
        <p className="font-semibold">Bengaluru, India</p>
        <p className="flex items-center gap-2 py-2"><Mail size={18} className="text-indigo-600"/><a
              href="mailto:avaghankartik@gmail.com"
              className="text-blue-600 hover:underline"
            >
              avaghankartik@gmail.com
            </a></p>
        <p className="flex items-center gap-2 "><Phone size={18} className="text-indigo-600"/> <a
              href="tel:+917349524086"
              className="text-blue-600 hover:underline"
            >
              +91 7349524086
            </a></p>

        <div className="flex gap-2 items-center mt-6 mb-4">
          <Linkedin size={18} className="text-blue-600"/>
          <a href="https://www.linkedin.com/in/kartik-r-avaghan/"
              target="_blank" className="flex items-center  hover:text-indigo-700 hover:underline  pr-4"> LinkedIn</a>

              <Github size={18} className="text-black"/>
          <a href="https://github.com/Kartik-Avaghan"
              target="_blank" className="flex items-center  hover:text-indigo-700 hover:underline"> GitHub</a>
        </div>
      </div>

    </div>
  </div>
</section>


<Skill/>

      {/* <section id="skills" className="py-20 ">
        <h2 className="text-3xl text-center font-bold mb-10">Skills</h2>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="flex gap-10 px-6 py-4 animate-skill-scroll whitespace-nowrap hide-scrollbar">
            {[
              { src: springboot, name: "Spring Boot" },
              { src: java, name: "Java" },
              { src: react, name: "React" },
              { src: tailwind, name: "Tailwind CSS" },
              { src: js, name: "JavaScript" },
              { src: html2, name: "HTML" },
              { src: mysql1, name: "MySQL" },
              { src: bootstrap, name: "Bootstrap" },
            ].map((skill, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg transition min-w-40 flex flex-col justify-center items-center bg-gray-50 border-b-4  border-indigo-600 ">
                <img src={skill.src} alt={skill.name} className="h-20 w-20 mb-3" />
                <p className="font-semibold text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { scrollbar-width: none; }
          .animate-skill-scroll {
            animation: scrollSkills 12s linear infinite;
          }
          @keyframes scrollSkills {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.25rem)); }
          }
        `}</style>
      </section> */}

      {/* Education */}
      <section id="education" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold mb-8">Education</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* Card 1 */}
      <div className="bg-white shadow-xl rounded-xl p-6 border-t-4 border-indigo-600 transition-all duration-300 hover:-translate-y-2">

  {/* Top: Logo + Institute Info (Side by Side) */}
  <div className="flex justify-between w-full items-center">
    
    {/* Logo */}
    <img 
      src={stjit} 
      alt="College" 
      className="h-20 w-20 rounded-full shadow object-cover"
    />

    {/* Text Info */}
    <div className="">
      <h2 className="font-semibold text-xl text-gray-900">
        STJ Institute Of Technology
      </h2>

      <p className="text-gray-600 mt-1">
        Bachelors in Electronics and Communication Engineering
      </p>

      <p className="text-gray-700 font-medium mt-2">
        2021 – 2025
      </p>
    </div>

  </div>

  {/* Bottom: Bullet Points */}
  <ul className="mt-6 text-gray-700 space-y-1 list-disc list-inside">
    <li>Studied core electronics subjects and communication systems.</li>
    <li>Implemented several projects based on Electronics Engineering Course.</li>
  </ul>

</div>



        
      

      {/* Card 2 */}
      <div className="bg-white shadow-xl rounded-xl p-6 border-b-4 border-indigo-600 transition-all duration-300 hover:-translate-y-2">

  {/* Top Row → Image + Institute Info Side by Side */}
  <div className="flex justify-around items-center w-full">
    
    {/* Logo */}
    <img 
      src={jspiders} 
      alt="JSpiders" 
      className="h-20 w-20 rounded-full shadow object-cover"
    />

    {/* Institute Info */}
    <div className="">
      <h2 className="font-semibold text-xl">JSpiders Training Institute</h2>
      <p className="text-gray-600 mt-1">Java Full Stack Developer</p>
      <p className="text-gray-700 font-medium mt-2">07/2025 – Present</p>
    </div>

  </div>

  {/* Bullet Points */}
  <ul className="mt-6 text-gray-700 space-y-1 list-disc list-inside">
    <li>Learning Java, Spring Boot, SQL, and backend development.</li>
    <li>Working on real-world full-stack projects with React.</li>
  </ul>

</div>


    </div>
  </div>
</section>


      {/* Experience */}
      <section id="experience" className="py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    
    <h2 className="text-3xl font-bold mb-10 text-left sm:text-left">
      Experience
    </h2>

    {/* Card 1 */}
    <div className="rounded-xl shadow-xl p-5 sm:p-6 border-l-4 border-indigo-600 bg-white hover:shadow-2xl transition-all">
      <div className="flex justify-between items-center sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
          Thincnext
        </h3>
        <span className="text-gray-600 text-sm sm:text-base">
          07/2025 - Present
        </span>
      </div>

      <ul className="list-disc list-inside text-gray-700 mt-4 text-base sm:text-lg space-y-1">
        <li>
          Software Developer – 
          <span className="font-semibold"> thincnext Pvt. Limited</span>
        </li>
        <li>Worked on Java Spring Boot backend APIs.</li>
        <li>Built interactive UI with React & Tailwind.</li>
        <li>Collaborated with senior developers on full-stack modules.</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="rounded-xl shadow-xl mt-8 p-5 sm:p-6 border-l-4 border-indigo-600 bg-white hover:shadow-2xl transition-all">
      <div className="flex justify-between items-center  sm:flex  sm:items-center sm:justify-between gap-2 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-semibold flex items-center  gap-2">
          Intern @ Thincnext
        </h3>
        <span className="text-gray-600 text-sm sm:text-base">
          02/2025 - 06/2025
        </span>
      </div>

      <ul className="list-disc list-inside text-gray-700 mt-4 text-base sm:text-lg space-y-1">
        <li>
          Junior Developer Intern – 
          <span className="font-semibold"> thincnext Pvt. Limited</span>
        </li>
        <li>Worked on Sree-LPG E-Commerce website.</li>
        <li>Built interactive UI with Shopify.</li>
        <li>Collaborated with senior developers.</li>
      </ul>
    </div>

  </div>
</section>


      {/* Projects */}
      <section id="projects" className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                img: pgmanagement,
                title: "PG Management",
                desc: "Role‑based PG management system allowing tenant allocation.",
                stack: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
              },
              {
                img: porfolio,
                title: "Tailor Dashboard",
                desc: "Role‑based dashboard with customer measurement capture.",
                stack: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
              },
              {
                img: webapplication,
                title: "Interior Design Web Page",
                desc: "Modern interior design landing page.",
                stack: ["HTML", "JavaScript", "Tailwind CSS"],
              },
              {
                img: ecommerce,
                title: "E-Commerce Website",
                desc: "Category‑based product fetching demo.",
                stack: ["React", "Tailwind", "API"],
              },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl shadow-xl bg-white   hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
">
                <img src={p.img} className="h-60 w-full rounded-t-2xl object-fit" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                  <p className="text-gray-700 mt-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-600">
                    {p.stack.map((s, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold mb-8  sm:text-left">Contact</h2>

    <div className="rounded-2xl shadow-xl p-8 bg-white border-l-4 border-indigo-600 hover:shadow-2xl transition-all duration-300">

      {/* Intro Text */}
      <p className="lg:text-xl mb-8 text-gray-800 max-w-3xl leading-relaxed">
        I’m open to freelance, full-time roles, and collaboration opportunities.
        Feel free to reach out and I’ll respond as soon as possible.
      </p>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2">

        {/* Email */}
        <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
          <Mail size={24} className="text-indigo-600 flex-shrink-0" />
          <div className="overflow-hidden">
            <p className="font-semibold text-gray-900">Email</p>
            <a
              href="mailto:avaghankartik@gmail.com"
              className="text-blue-600 hover:underline break-words  text-[14px] lg:text-[18px]"
            >
              avaghankartik@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
          <Phone size={24} className="text-indigo-600 flex-shrink-0" />
          <div className="overflow-hidden">
            <p className="font-semibold text-gray-900">Phone</p>
            <a
              href="tel:+917349524086"
              className="text-blue-600 hover:underline break-words text-[14px] lg:text-[18px]"
            >
              +91 7349524086
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
          <Linkedin size={24} className="text-indigo-600 flex-shrink-0" />
          <div className="overflow-hidden">
            <p className="font-semibold text-gray-900">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/kartik-r-avaghan/"
              target="_blank"
              className="text-blue-600 hover:underline break-words text-[14px] lg:text-[18px]"
            >
              linkedin.com/in/kartik-r-avaghan
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
          <Github size={24} className="text-indigo-600 flex-shrink-0" />
          <div className="overflow-hidden">
            <p className="font-semibold text-gray-900">GitHub</p>
            <a
              href="https://github.com/Kartik-Avaghan"
              target="_blank"
              className="text-blue-600 hover:underline break-words text-[14px] lg:text-[18px]"
            >
              github.com/Kartik-Avaghan
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="py-8 text-center text-gray-700 bg-white">
        © 2025 - Kartik Avaghan • Built with React, Vite & Tailwind
      </footer>
    </div>
  );
}
