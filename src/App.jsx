import Nav from "./Components/Nav"
import ImgProfile from "../public/ImgProfile.jpg"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaCss3,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiZod,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si"
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri"
import ProjectCard from "./Components/ProjectCard"
import todoImg from "../public/TodoApp.jpg"
import Coktail from "../public/Coktail.jpg"
import Cripto from "../public/Cripto.jpg"
import clima from "../public/Clima.jpg"
import Portafolio from "../public/Portafolio.jpg"
import Veterinarian from "../public/Veterinaria.jpg"
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline"
import {useEffect, useState} from "react"
import {FiGithub} from "react-icons/fi"
import {LuLinkedin} from "react-icons/lu"
import {GrDocumentUser} from "react-icons/gr"
import {PiStudent} from "react-icons/pi"
import {TbDeviceDesktopCode} from "react-icons/tb"
import {VscTools} from "react-icons/vsc"

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
    id: "#pet",
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
    <div
      className="relative min-h-screen w-full  
      bg-gradient-to-r dark:from-slate-900 dark:via-black dark:to-slate-900
      bg-[length:150%_100%] bg-[40%_0%] dark:bg-black overflow-auto "
    >
      <Nav />
      <main className="flex-grow mt-20">
        <div className="container px-4 py-8 mx-auto max-w-6xl">
          <section id="info" className="">
            <img
              src={ImgProfile}
              alt="Profile Picture"
              className="rounded-full shadow-lg border-4 w-40 h-40 mx-auto mb-2 dark:border-gray-400 border-lgnav"
            />
            <div className="flex justify-center items-center">
              <h1 className="font-bold  text-4xl font-second  dark:text-white text-lgnav mt-6 whitespace-nowrap">
                Luis Rodriguez
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <h1 className="font-bold  text-2xl font-mono  dark:text-btnNav-default text-h1lg mt-1 whitespace-nowrap">
                {typedText}
                {/* Cursor visible solo mientras está escribiendo */}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="dark:text-yellow-50 text-lgnav font-second font-normal  text-lg max-w-2xl text-center leading-relaxed">
                Frontend Developer specializing in building modern, functional,
                and responsive web interfaces using technologies like React,
                TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                className="flex items-center  justify-center w-12 h-12 dark:text-white ease-in-out delay-150 hover:-translate-y-1 text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
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
                className="flex items-center justify-center w-12 h-12 ease-in-out delay-150 hover:-translate-y-1 dark:text-white text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() =>
                  window.open("https://github.com/Luindex", "_blank")
                }
              >
                <FiGithub className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 ease-in-out delay-150 hover:-translate-y-1 dark:text-white text-lgnav dark:bg-primary-dark bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() => window.open("/path-to-your-cv.pdf", "_blank")} //todo
              >
                <GrDocumentUser className="text-xl" />
              </button>
            </div>
          </section>

          <section>
            <div className="flex justify-center items-center mt-32">
              <h1
                id="about"
                className="font-bold  font-second  dark:text-btnNav-default text-3xl  text-h1lg mt-6 whitespace-nowrap"
              >
                About Me
              </h1>
            </div>
            <div className="justify-center mt-10 flex flex-col items-center">
              <p className="dark:text-white text-lgnav font-second font-light text-md max-w-2xl text-center leading-relaxed">
                Hello, I am Luis Carlos Rodriguez, I live in Medellin Colombia ,
                I am a Systems Engineering student. I like design and
                programming. Outside of the Studio, I enjoy exploring design,
                technology and the infinite possibilities they bring to life.
              </p>

              <p className="dark:text-white text-lgnav font-second font-light text-md mt-4 max-w-2xl text-center leading-relaxed">
                {" "}
                As a frontend developer, I specialize in creating intuitive,
                responsive and visually appealing web applications. I work with
                modern tools like React, TypeScript, and Tailwind CSS to create
                seamless user experiences. I pride myself on writing clean,
                maintainable code and transforming ideas into beautiful,
                functional interfaces that users love to interact with
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="flex flex-col  items-center mt-32 mb-20">
            <h1 className="font-bold font-sans text-3xl dark:text-btnNav-default text-h1lg mb-8 whitespace-nowrap">
              Experience
            </h1>

            <div
              className="w-full flex gap-5 max-w-4xl  mb-5 p-8 rounded-lg shadow-lg border-dashed border-2  dark:border-gray-600  
                  self-end rounded-bl-[50px]"
            >
              <PiStudent className=" text-5xl dark:text-btnNav-default" />
              <div className=" flex flex-col ">
                <p className="text-gray-700 text-base dark:text-gray-100 font-second font-normal">
                  As a Systems Engineering student, I started developing web
                  page prototypes with HTML and CSS to visualize my ideas, and
                  then I learned JavaScript to add interaction to my projects.
                  <div className=" flex gap-3">
                    <FaHtml5 className=" text-xl  mt-2 text-techColors-html" />
                    <FaCss3 className="  text-xl  mt-2 text-techColors-css" />
                    <FaJs className="  text-xl  mt-2 text-techColors-js" />
                  </div>
                </p>
              </div>
            </div>

            <div
              className="w-full flex gap-5 max-w-4xl mb-5 bg-inherit p-10 rounded-lg shadow-lg border-dashed border-2 dark:border-gray-600 border-lgnav 
                  self-start rounded-br-[50px]"
            >
              <p className="text-gray-700 dark:text-gray-100 font-second font-normal">
                Once my page had the basic HTML, CSS and javascript components,
                I decided to find a framework that would provide me with
                something more used in the work field so I started studying
                React and tailwindcss where my first Project was{" "}
                <span className="relative dark:text-exph1-default dark:hover:text-btnNav-default font-bold transition-opacity cursor-pointer group">
                  Pet veterian
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-btnNav-hover transition-all duration-300 group-hover:w-full"></span>
                </span>
                , where I learned many new things that I implemented in my
                personal projects.
                <div className=" flex gap-3">
                  <FaReact className=" text-xl  mt-2 text-techColors-react" />
                  <RiTailwindCssFill className="  text-xl  mt-2 text-techColors-twlcss" />
                </div>
              </p>
              <TbDeviceDesktopCode className=" text-7xl   text-center mx-2 dark:text-btnNav-default" />
            </div>

            {/* Tercer div - Derecha */}
            <div
              className="w-full flex  gap-5  max-w-4xl bg-inherit p-10 rounded-lg shadow-lg border-dashed border-2 dark:border-gray-600 border-lgnav 
                  self-end rounded-bl-[50px]"
            >
              <VscTools className=" text-6xl dark:text-btnNav-default" />
              <p className="text-gray-700 dark:text-gray-100 font-second font-normal">
                In more advanced stages, I integrated my projects with local
                servers using tools like Vite and Next.js. In projects such as{" "}
                {""}
                <span className="relative dark:text-exph1-default dark:hover:text-btnNav-default font-bold cursor-pointer group">
                  Cripto React
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-btnNav-hover transition-all duration-300 group-hover:w-full"></span>
                </span>{" "}
                and{" "}
                <span className="relative dark:text-exph1-default dark:hover:text-btnNav-default font-bold cursor-pointer group">
                  Weather Forecast
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-btnNav-hover transition-all duration-300 group-hover:w-full"></span>
                </span>
                , I implemented technologies such as Axios, Zod and Redux,
                increasing the complexity of my developments.
                <div className=" flex gap-3">
                  <SiNextdotjs className=" text-xl  mt-2 dark:text-white" />
                  <SiVite className=" text-xl  mt-2 text-techColors-vite" />
                  <SiZod className="  text-xl  mt-2 text-techColors-css" />
                  <SiRedux className="  text-xl  mt-2 text-indigo-600" />
                  <SiTypescript className="text-xl  mt-2 text-blue-700" />
                </div>
              </p>
            </div>
          </section>

          <section>
            <div className=" bg-transparent ">
              <main className="">
                <div className="container px-4 py-1 max-w-6xl">
                  <section className="">
                    <h1 className="font-bold font-second dark:text-btnNav-default text-3xl  text-h1lg text-center mb-12">
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
          </section>

          <div className="mt-16 text-center">
            <h2 className="font-bold font-sans text-3xl dark:text-gray-400 text-h1lg mt-6 mb-40 whitespace-nowrap">
              Contact
            </h2>
            <section>
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
                  className="flex items-center gap-4 bg-transparent p-4 rounded-lg shadow-md border border-gray-700 w-64 h-28"
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
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
