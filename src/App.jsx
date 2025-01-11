import Nav from "./Components/Nav"
import ImgProfile from "../public/ImgProfile.jpg"
import {FaReact, FaHtml5, FaJs, FaCss3} from "react-icons/fa"
import {SiTypescript, SiVite, SiZod, SiRedux, SiNextdotjs} from "react-icons/si"
import {RiTailwindCssFill} from "react-icons/ri"
import ProjectCard from "./Components/ProjectCard"
import todoImg from "../public/TodoApp.jpg"
import Coktail from "../public/Coktail.jpg"
import Cripto from "../public/Cripto.jpg"
import clima from "../public/Clima.jpg"
import Portafolio from "../public/Portafolio.jpg"
import Veterinarian from "../public/Veterinaria.jpg"
import {useEffect, useState} from "react"
import {FiGithub} from "react-icons/fi"
import {LuLinkedin} from "react-icons/lu"
import {GrDocumentUser} from "react-icons/gr"
import {PiStudent} from "react-icons/pi"
import {TbDeviceDesktopCode} from "react-icons/tb"
import {pEN} from "./translations/en/global"
import {pES} from "./translations/es/globalES"
import {VscTools} from "react-icons/vsc"

let projects = [
  {
    image: todoImg, // Cambia por la URL de tu imagen
    title: "Todo List App",
    description:
      "This is a todo list project developed with React, TypeScript and Vite. The application allows users to add, edit, delete and mark tasks as completed, as well as filter tasks by their status.",
    technologies: ["React", "TypeScript", "Tailwind Css"],
    liveLink: "https://illustrious-gnome-0e5d7c.netlify.app/",
    repoLink: "https://github.com/Luindex/Todo-List",
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
  const [language, setLanguage] = useState("en")

  const fullText = "Frontend Developer"
  const [typedText, setTypedText] = useState("")
  const [index, setIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 40)

      return () => clearTimeout(timer)
    } else {
      setIsTypingComplete(true)
    }
  }, [index, fullText])

  return (
    <div
      className="relative min-h-screen w-full  
      bg-gradient-to-r dark:from-slate-900 dark:via-black dark:to-slate-900
       from-slate-50 via-indigo-100 to-slate-50
      bg-[length:150%_100%] bg-[40%_0%] dark:bg-black overflow-auto "
    >
      <Nav language={language} setLanguage={setLanguage} />
      <main className="flex-grow mt-20">
        <div className="container px-4 py-8 mx-auto max-w-6xl">
          <section id="info" className="">
            <img
              src={ImgProfile}
              alt="Profile Picture"
              className="rounded-full shadow-lg border-4 w-40 h-40 mx-auto mb-2 dark:border-gray-400 border-black"
            />
            <div className="flex justify-center items-center">
              <h1 className="font-bold  text-4xl font-second  dark:text-white text-black mt-6 whitespace-nowrap">
                Luis Rodriguez
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <h1 className="font-bold  text-2xl font-mono dark:text-btnNav-default text-h1lg mt-1 whitespace-nowrap">
                {typedText}
                {/* Cursor visible solo mientras está escribiendo */}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="dark:text-yellow-50 text-black font-second font-normal  text-lg max-w-2xl text-center leading-relaxed">
                {language === "en" ? pEN.des : pES.des}
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                className="flex items-center  justify-center w-12 h-12 dark:text-white ease-in-out delay-150 hover:-translate-y-1 text-black dark:bg-slate-900 bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-slate-800 transition-all focus:outline-none"
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
                className="flex items-center justify-center w-12 h-12 ease-in-out delay-150 hover:-translate-y-1 dark:text-white text-black dark:bg-slate-900 bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-slate-800  transition-all focus:outline-none"
                onClick={() =>
                  window.open("https://github.com/Luindex", "_blank")
                }
              >
                <FiGithub className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 ease-in-out delay-150 hover:-translate-y-1 dark:text-white text-black dark:bg-slate-900 bg-slate-100 hover:bg-slate-200   rounded-full shadow-lg dark:hover:bg-slate-800  transition-all focus:outline-none"
                onClick={() =>
                  window.open(
                    "/Luis_Rodriguez_Frontend_Developer.pdf",
                    "_blank"
                  )
                }
              >
                <GrDocumentUser className="text-xl" />
              </button>
            </div>
          </section>

          <section id="about">
            <div className="flex justify-center items-center mt-32">
              <h1 className="font-bold  font-second  dark:text-btnNav-default text-3xl  text-h1lg mt-6 whitespace-nowrap">
                {language === "en" ? pEN.about_me : pES.acerda_de}
              </h1>
            </div>
            <div className="justify-center mt-10 flex flex-col items-center">
              <p className="dark:text-white text-black font-second font-light text-md max-w-2xl text-center leading-relaxed">
                {language === "en" ? pEN.about_me1 : pES.acerda_de1}
              </p>

              <p className="dark:text-white text-black font-second font-light text-md mt-4 max-w-2xl text-center leading-relaxed">
                {" "}
                {language === "en" ? pEN.about_me2 : pES.acerda_de2}
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section
            id="Experience"
            className="flex flex-col  items-center mt-32 mb-20"
          >
            <h1 className="font-bold font-second text-3xl dark:text-btnNav-default text-h1lg mb-8 whitespace-nowrap">
              {language === "en" ? pEN.experience : pES.experiencia}
            </h1>

            <div
              className="w-full flex gap-5 max-w-4xl  mb-5 p-8 rounded-lg shadow-lg border-dashed border-2  dark:border-gray-600 border-black  
                  self-end rounded-bl-[50px]"
            >
              <PiStudent className=" text-5xl dark:text-btnNav-default text-black" />
              <div className=" flex flex-col ">
                <p className="text-gray-700 text-base dark:text-gray-100 font-second font-normal">
                  {language === "en" ? pEN.experience_1 : pES.experiencia_1}
                  <div className=" flex gap-3">
                    <FaHtml5 className=" text-xl  mt-2 text-techColors-html" />
                    <FaCss3 className="  text-xl  mt-2 text-techColors-css" />
                    <FaJs className="  text-xl  mt-2 text-techColors-js" />
                  </div>
                </p>
              </div>
            </div>

            <div
              className="w-full flex gap-5 max-w-4xl mb-5 bg-inherit p-10 rounded-lg shadow-lg border-dashed border-2 dark:border-gray-600 border-black
                  self-start rounded-br-[50px]"
            >
              <p className="text-gray-700 dark:text-gray-100 font-second font-normal">
                {language === "en" ? pEN.experience_2 : pES.experiencia_2}{" "}
                <span
                  onClick={() =>
                    window.open("https://stellar-mochi-ae943c.netlify.app/")
                  }
                  className="relative dark:text-exph1-default text-h1lg dark:hover:text-btnNav-default hover:text-h1lg-hover font-bold transition-opacity cursor-pointer group"
                >
                  Pet veterian
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 dark:bg-btnNav-hover bg-h1lg-hover  transition-all duration-300 group-hover:w-full"></span>
                </span>
                {language === "en" ? pEN.experience_2_2 : pES.experiencia_2_2}
                <div className=" flex gap-3">
                  <FaReact className=" text-xl  mt-2 text-techColors-react" />
                  <RiTailwindCssFill className="  text-xl  mt-2 text-techColors-twlcss" />
                </div>
              </p>
              <TbDeviceDesktopCode className=" text-7xl   text-center mx-2 dark:text-btnNav-default text-black" />
            </div>

            {/* Tercer div - Derecha */}
            <div
              className="w-full flex  gap-5  max-w-4xl bg-inherit p-10 rounded-lg shadow-lg border-dashed border-2 dark:border-gray-600 border-black 
                  self-end rounded-bl-[50px]"
            >
              <VscTools className=" text-6xl dark:text-btnNav-default text-black" />
              <p className="text-gray-700 dark:text-gray-100 font-second font-normal">
                {language === "en" ? pEN.experience_3 : pES.experiencia_3} {""}
                <span
                  onClick={() =>
                    window.open(
                      "https://melodious-bublanina-f4baad.netlify.app/"
                    )
                  }
                  className="relative dark:text-exph1-default text-h1lg dark:hover:text-btnNav-default hover:text-h1lg-hover font-bold cursor-pointer group"
                >
                  Cripto React
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 dark:bg-btnNav-hover bg-h1lg-hover transition-all duration-300 group-hover:w-full"></span>
                </span>{" "}
                {language === "en" ? "and" : "y"}{" "}
                <span
                  onClick={() =>
                    window.open("https://melodic-blini-20c2fd.netlify.app/")
                  }
                  className="relative dark:text-exph1-default text-h1lg dark:hover:text-btnNav-default hover:text-h1lg-hover font-bold cursor-pointer group"
                >
                  Weather Forecast
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 dark:bg-btnNav-hover bg-h1lg-hover transition-all duration-300 group-hover:w-full"></span>
                </span>
                {""}
                {language === "en" ? pEN.experience_3_2 : pES.experiencia_3_2}
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

          <section id="projects">
            <div className=" bg-transparent ">
              <main className="">
                <div className="container px-4 py-1 max-w-6xl">
                  <section>
                    <h1 className="font-bold font-second dark:text-btnNav-default text-3xl  text-h1lg text-center mb-12">
                      {language === "en" ? pEN.projects : pES.proyectos}
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

          <div className="mt-16 text-center " id="contact">
            <section id="contact" className=" text-end py-12">
              <span
                onClick={() => window.open("mailto:rodriguesluis414@gmail.com")}
                className="relative dark:text-btnNav-default text-black  dark:hover:text-btnNav-default font-sm font-second font-medium mr-5  cursor-pointer group"
              >
                {language === "en" ? "Contact Me" : "Contacto"}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 dark:bg-btnNav-hover bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>{" "}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
