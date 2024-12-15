import Nav from "./Components/Nav"
import ImgProfile from "../public/ImgProfile.jpg"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiZod,
  SiRedux,
} from "react-icons/si"
import {RiNextjsFill} from "react-icons/ri"
import ProjectCard from "./Components/ProjectCard"
import todoImg from "../public/TodoApp.jpg"
import Coktail from "../public/Coktail.jpg"
import Cripto from "../public/Cripto.jpg"
import clima from "../public/Clima.jpg"
import Portafolio from "../public/Portafolio.jpg"
import Veterinarian from "../public/Veterinaria.jpg"
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline"
import Footer from "./Components/Footer"
import {useEffect, useState} from "react"
import {FiGithub} from "react-icons/fi"
import {LuLinkedin} from "react-icons/lu"
import {GrDocumentUser} from "react-icons/gr"

const projects = [
  {
    image: todoImg, // Cambia por la URL de tu imagen
    title: "Todo List App",
    description:
      "This is a to-do list project developed with React, TypeScript and Vite. The app allows users to add, edit, delete, and mark tasks as completed, as well as filter tasks based on their status.",
    technologies: ["React", "TypeScript", "Tailwind Css"],
    liveLink: "https://illustrious-gnome-0e5d7c.netlify.app/", // URL del proyecto en vivo
    repoLink: "https://github.com/Luindex/Todo-List", // URL del repositorio
  },
  {
    image: Coktail,
    title: "Beverage Search",
    description:
      "drinks react is a web application developed with react and typescript that allows users to search for drinks by ingredient and category, as well as save their favorite drinks",
    technologies: ["React", "Redux", "Zod", "Zustand", "React-Router"],
    liveLink: "https://splendid-concha-154198.netlify.app/",
    repoLink: "https://github.com/Luindex/Bebidas-React-TypeScript",
  },
  {
    image: Cripto,
    title: "Cripto React",
    description:
      "Cryptocurrency is an application developed with React and TypeScript that allows users to check the value of a cryptocurrency depending on the currency you choose.",
    technologies: ["React", "Redux", "Tailwind", "Axios", "Zustand", "Zod"],
    liveLink: "https://melodious-bublanina-f4baad.netlify.app/",
    repoLink: "https://github.com/Luindex/CriptoReacTypescript",
  },
  {
    image: clima,
    title: "Weather Forecast",
    description:
      "This project is a climate status consultant developed using React, TypeScript and Zod. It provides a simple interface for users to enter the location and get updated information about the weather in that area.",
    technologies: ["React", "Redux", "Typescript", "Tailwind CSS", "Zod"],
    liveLink: "https://melodic-blini-20c2fd.netlify.app/",
    repoLink: "https://github.com/Luindex/Clima-React-TypeScript",
  },
  {
    image: Veterinarian,
    title: "Pet Veterinarian",
    description:
      "This is a web application developed with React and Tailwind CSS, designed to facilitate pet-related queries. The main objective is to provide pet owners with a quick and easy tool to manage and consult information.",
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://stellar-mochi-ae943c.netlify.app/",
    repoLink: "https://github.com/Luindex/Veterinaria-Pet",
  },
  {
    image: Portafolio,
    title: "Portfolio",
    description:
      "A responsive e-commerce platform with a modern UI and seamless shopping experience.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    liveLink: "",
    repoLink: "https://github.com/Luindex/Portafolio",
  },

  // Agrega más proyectos aquí
]

function App() {
  // Skills data
  const skills = [
    {
      skill: "React",
      level: "Advanced",
      icon: <FaReact className="text-blue-500" />,
    },
    {
      skill: "TypeScript",
      level: "Intermediate",
      icon: <SiTypescript className="text-blue-600" />,
    },
    {
      skill: "Tailwind CSS",
      level: "Advanced",
      icon: <SiTailwindcss className="text-teal-400" />,
    },
    {
      skill: "JavaScript",
      level: "Advanced",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      skill: "HTML5",
      level: "Expert",
      icon: <FaHtml5 className="text-orange-600" />,
    },
    {
      skill: "CSS3",
      level: "Expert",
      icon: <FaCss3Alt className="text-blue-400" />,
    },
    {
      skill: "Node.js",
      level: "Intermediate",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      skill: "Vite",
      level: "Intermediate",
      icon: <SiVite className="text-sky-700" />,
    },
    {
      skill: "Next js",
      level: "Intermediate",
      icon: <RiNextjsFill className=" text-slate-900 dark:text-white" />,
    },
    {
      skill: "Axios",
      level: "Intermediate",
      icon: <SiAxios className=" text-violet-800" />,
    },
    {
      skill: "Zod",
      level: "Intermediate",
      icon: <SiZod className="text-sky-800" />,
    },
    {
      skill: "Redux",
      level: "Intermediate",
      icon: <SiRedux className="text-indigo-700" />,
    },
  ]

  const fullText = "Frontend Developer" // Texto completo a escribir
  const [typedText, setTypedText] = useState("") // Estado para el texto animado
  const [index, setIndex] = useState(0) // Posición en el texto
  const [isTypingComplete, setIsTypingComplete] = useState(false) // Controla si terminó de escribir

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]) // Añade la siguiente letra
        setIndex((prev) => prev + 1) // Incrementa posición
      }, 40) // Velocidad del tipeo

      return () => clearTimeout(timer) // Limpia el timer
    } else {
      setIsTypingComplete(true) // Marca como completo
    }
  }, [index, fullText])

  return (
    <div className="relative min-h-screen w-full dark:bg-primary-dark bg-primary-light overflow-auto">
      <Nav />
      <main className="flex-grow mt-20">
        <div className="container px-4 py-8 mx-auto max-w-6xl">
          <section className="mb-48">
            <div className="relative w-40 h-40 mx-auto mb-12">
              <img
                src={ImgProfile}
                alt="Profile Picture"
                className="rounded-full shadow-lg border-4 dark:border-gray-400 border-lgnav"
              />
              <div className="flex justify-center items-center">
                <h1 className="font-bold font-sans text-4xl dark:text-white text-lgnav mt-6 whitespace-nowrap">
                  Luis Rodriguez
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold font-sans text-2xl text-whi dark:text-gray-400 text-h1lg mt-6 whitespace-nowrap">
                {typedText}
                {/* Cursor visible solo mientras está escribiendo */}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="dark:text-gray-500 text-lgnav  text-lg max-w-2xl text-center leading-relaxed">
                Frontend Developer specializing in building modern, functional,
                and responsive web interfaces using technologies like React,
                TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                className="flex items-center justify-center w-12 h-12 dark:text-white text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/luis-carlos-rodrigues-111163252/",
                    "_blank"
                  )
                }
              >
                <LuLinkedin className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 dark:text-white text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() =>
                  window.open("https://github.com/Luindex", "_blank")
                }
              >
                <FiGithub className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 dark:text-white text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() => window.open("/path-to-your-cv.pdf", "_blank")} //todo
              >
                <GrDocumentUser className="text-xl" />
              </button>
            </div>

            <div className="flex justify-center items-center mt-32">
              <h1 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg mt-6 whitespace-nowrap">
                About Me
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="dark:text-gray-500 text-lgnav text-lg max-w-2xl text-center leading-relaxed">
                Passionate about designing and developing intuitive digital
                experiences. I enjoy learning new technologies, solving
                problems, and collaborating with teams to turn ideas into
                reality
              </p>
            </div>

            {/* Work Experience */}

            <div className="flex flex-col items-center mt-32 mb-20">
              <h1 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg mb-8 whitespace-nowrap">
                Experience
              </h1>

              <div className="w-full max-w-4xl bg-inherit p-8 rounded-lg shadow-lg border dark:border-gray-600 border-lgnav">
                <p className="dark:text-gray-400 text-lgnav text-sm leading-relaxed">
                  In my stage as a Systems Engineering student I have developed
                  academic and personal projects, where I focused more on
                  Fronted and also a little of Fronted.
                </p>

                <ul className="mt-6 space-y-4 dark:text-gray-400 text-lgnav  text-base">
                  <li className="flex items-center gap-3  text-xs">
                    <span className="dark:text-white text-h1lg">
                      <FaReact />
                    </span>
                    Building responsive user interfaces with modern technologies
                    like React and Tailwind CSS.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="dark:text-white text-h1lg">
                      <FaCode />
                    </span>
                    Writing clean, reusable, and maintainable code using
                    TypeScript and JavaScript.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="dark:text-white text-h1lg">
                      <FaDatabase />
                    </span>
                    Designing and managing data structures with SQL and
                    implementing seamless integrations with APIs.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="dark:text-white text-h1lg">
                      <FaLaptopCode />
                    </span>
                    Collaborating in multidisciplinary teams to deliver creative
                    and functional solutions.
                  </li>
                </ul>

                <p className="dark:text-gray-400 text-lgnav text-sm leading-relaxed mt-6">
                  These experiences have shaped my ability to adapt to new
                  challenges, solve problems, and continuously improve as a
                  developer.
                </p>
              </div>
            </div>

            {/* Proyectos */}

            <div className=" bg-transparent ">
              {/* Código existente */}
              <main className="">
                <div className="container px-4 py-1 max-w-6xl">
                  {/* Sección de Proyectos */}
                  <section className="">
                    <h1 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg text-center mb-12">
                      Projects
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          image={project.image}
                          title={project.title}
                          description={project.description}
                          technologies={project.technologies}
                          liveLink={project.liveLink}
                          repoLink={project.repoLink}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </main>
            </div>

            {/* Skills Section */}
            <div className="flex justify-center items-center mt-32">
              <h1 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg mt-6 mb-8 whitespace-nowrap">
                Skills
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {skills.map(({skill, level, icon}, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center bg-transparent p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  <div className="text-5xl mb-4 transition-transform transform group-hover:rotate-12">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-lgnav">
                    {skill}
                  </h3>
                  <p className="text-sm dark:text-gray-400 text-h1lg">
                    {level}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg mt-6 mb-16 whitespace-nowrap">
                Contact
              </h2>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Correo Electrónico */}
                <a
                  href="mailto:rodriguesluis414@gmail.com"
                  className="flex items-center gap-4 bg-transparent p-4 rounded-lg shadow-md border border-gray-700  w-64 h-28"
                >
                  <EnvelopeIcon className="w-8 h-8 dark:text-white text-h1lg" />
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white text-lgnav text-start">
                      Email
                    </h3>
                    <p className="dark:text-white text-lgnav text-sm">
                      rodriguesluis414@gmail.com
                    </p>
                  </div>
                </a>

                {/* Número Telefónico */}
                <a
                  href="tel:+3188413911"
                  className="flex items-center gap-4 bg-transparent p-4 rounded-lg shadow-md border border-gray-700   w-64 h-28"
                >
                  <PhoneIcon className="w-8 h-8 dark:text-white text-h1lg" />
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white text-lgnav text-start">
                      Phone
                    </h3>
                    <p className="dark:text-white text-lgnav text-sm">
                      +57 318-841-3911
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
