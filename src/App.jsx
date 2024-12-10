import {useState} from "react"
import Nav from "./Components/Nav"
import ImgProfile from "../public/ImgProfile.jpg"
import {
  FaLinkedin,
  FaGithub,
  FaFileDownload,
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

const projects = [
  {
    image: "https://via.placeholder.com/300x200", // Cambia por la URL de tu imagen
    title: "Todo List App",
    description:
      "A simple and effective Todo List application to manage tasks and track progress.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://your-todo-app.com", // URL del proyecto en vivo
    repoLink: "https://github.com/your-github/todo-list", // URL del repositorio
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "E-commerce Website",
    description:
      "A responsive e-commerce platform with a modern UI and seamless shopping experience.",
    technologies: ["Next.js", "Redux", "Tailwind CSS"],
    liveLink: "https://your-ecommerce.com",
    repoLink: "https://github.com/your-github/ecommerce-site",
  },
  // Agrega más proyectos aquí
]

function App() {
  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  const handleMouseMove = (event) => {
    const {pageX, pageY} = event
    setMousePos({x: pageX, y: pageY})
  }

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
      icon: <RiNextjsFill className=" text-gray-600" />,
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

  return (
    <div
      className="relative min-h-screen w-full bg-primary-dark overflow-auto"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle closest-side at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.2) 0px, rgba(0, 0, 0, 0.9) 80px)`,
      }}
    >
      <Nav />
      <main className="flex-grow mt-20">
        <div className="container px-4 py-8 mx-auto max-w-6xl">
          <section className="mb-48">
            <div className="relative w-40 h-40 mx-auto mb-12">
              <img
                src={ImgProfile}
                alt="Profile Picture"
                className="rounded-full shadow-lg border-4 border-gray-400"
              />
              <div className="flex justify-center items-center">
                <h1 className="font-bold font-sans text-4xl text-white mt-6 whitespace-nowrap">
                  Luis Rodriguez
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold font-sans text-2xl text-gray-400 mt-10 whitespace-nowrap">
                Frontend Developer
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="text-gray-500 text-lg max-w-2xl text-center leading-relaxed">
                Frontend Developer specializing in building modern, functional,
                and responsive web interfaces using technologies like React,
                TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-10">
              <button
                className="flex items-center justify-center w-12 h-12 text-white bg-primary-dark rounded-full shadow-lg hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/luis-carlos-rodrigues-111163252/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 text-white bg-primary-dark rounded-full shadow-lg hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() =>
                  window.open("https://github.com/Luindex", "_blank")
                }
              >
                <FaGithub className="text-xl" />
              </button>
              <button
                className="flex items-center justify-center w-12 h-12 text-white bg-primary-dark rounded-full shadow-lg hover:bg-primary_hover transition-all focus:outline-none"
                onClick={() => window.open("/path-to-your-cv.pdf", "_blank")} //todo
              >
                <FaFileDownload className="text-xl" />
              </button>
            </div>

            <div className="flex justify-center items-center mt-32">
              <h1 className="font-bold font-sans text-2xl text-gray-400 mt-6 whitespace-nowrap">
                About Me
              </h1>
            </div>
            <div className="flex justify-center mt-10">
              <p className="text-gray-500 text-lg max-w-2xl text-center leading-relaxed">
                Passionate about designing and developing intuitive digital
                experiences. I enjoy learning new technologies, solving
                problems, and collaborating with teams to turn ideas into
                reality
              </p>
            </div>

            {/* Work Experience */}

            <div className="flex flex-col items-center mt-32 mb-20">
              <h1 className="font-bold font-sans text-2xl text-gray-400 mb-8 whitespace-nowrap">
                Experience
              </h1>

              <div className="w-full max-w-4xl bg-inherit p-8 rounded-lg shadow-lg border border-gray-600">
                <p className="text-gray-400 text-sm leading-relaxed">
                  In my stage as a Systems Engineering student I have developed
                  academic and personal projects, where I focused more on
                  Fronted and also a little of Fronted.
                </p>

                <ul className="mt-6 space-y-4 text-gray-400 text-base">
                  <li className="flex items-center gap-3 text-xs">
                    <span className="text-white">
                      <FaReact />
                    </span>
                    Building responsive user interfaces with modern technologies
                    like React and Tailwind CSS.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="text-white">
                      <FaCode />
                    </span>
                    Writing clean, reusable, and maintainable code using
                    TypeScript and JavaScript.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="text-white">
                      <FaDatabase />
                    </span>
                    Designing and managing data structures with SQL and
                    implementing seamless integrations with APIs.
                  </li>
                  <li className="flex items-center gap-3 text-xs">
                    <span className="text-white">
                      <FaLaptopCode />
                    </span>
                    Collaborating in multidisciplinary teams to deliver creative
                    and functional solutions.
                  </li>
                </ul>

                <p className="text-gray-400 text-sm leading-relaxed mt-6">
                  These experiences have shaped my ability to adapt to new
                  challenges, solve problems, and continuously improve as a
                  developer.
                </p>
              </div>
            </div>

            {/* Proyectos */}

            <div className=" bg-primary-dark ">
              {/* Código existente */}
              <main className="">
                <div className="container px-4 py-1 max-w-6xl">
                  {/* Sección de Proyectos */}
                  <section className="">
                    <h1 className="font-bold font-sans text-2xl text-gray-400 text-center mb-12">
                      Projects
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h1 className="font-bold font-sans text-2xl text-gray-400 mt-6 whitespace-nowrap">
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
                  <h3 className="text-xl font-bold text-white">{skill}</h3>
                  <p className="text-sm text-gray-400">{level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
