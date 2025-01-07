import {useState, useEffect} from "react"
import {MoonIcon, SunIcon, LanguageIcon} from "@heroicons/react/24/outline"
import {GrDocumentDownload} from "react-icons/gr"

const Nav = () => {
  const [darkMode, setDarkMode] = useState("dark")
  const [language, setLanguage] = useState("es")
  const [activeMenu, setActiveMenu] = useState("")

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const toggleDarkMode = (mode) => {
    setDarkMode(mode)
    if (mode === "dark") {
      document.documentElement.classList.add("dark")
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      document.documentElement.classList.toggle("dark", systemDarkMode)
    }
    setActiveMenu("")
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setActiveMenu("")
  }

  return (
    <nav className="fixed top-0 left-0 w-full dark:bg-opacity-5 shadow-md z-50 backdrop-blur">
      <div className=" px-4 py-2 mr-12 flex justify-between ">
        <div className="px-4 py-2 flex items-center justify-end">
          <ul className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white font-second font-sm px-2 py-1 rounded-lg font-xl dark:hover:text-btnNav-default ease-in-out delay-150 hover:-translate-y-1  cursor-pointer  transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-second font-sm px-2 py-1 rounded-lg font-xl dark:hover:text-btnNav-default ease-in-out delay-150 hover:-translate-y-1  cursor-pointer  transition"
            >
              About
            </a>

            <li>
              <a
                href="#Experience"
                className="text-white font-second font-sm px-2 py-1 rounded-lg font-xl dark:hover:text-btnNav-default ease-in-out delay-150 hover:-translate-y-1  cursor-pointer  transition"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white font-second font-sm px-2 py-1 rounded-lg font-xl dark:hover:text-btnNav-default ease-in-out delay-150 hover:-translate-y-1  cursor-pointer  transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white font-second font-sm px-2 py-1 rounded-lg font-xl dark:hover:text-btnNav-default ease-in-out delay-150 hover:-translate-y-1  cursor-pointer  transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-3 mr-6 my-1.5">
          {/* Menú Dark Mode */}
          <div className="relative">
            <button
              className="flex items-center text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover ease-in-out delay-150 hover:-translate-y-1 scale-110 transition hover:bg-gray-200 focus:ring focus:ring-lgnav dark:focus:ring-blue-600  duration-200"
              onClick={() =>
                setActiveMenu((prev) => (prev === "darkMode" ? "" : "darkMode"))
              }
            >
              {darkMode === "dark" ? (
                <MoonIcon className="w-5 h-5 text-white rounded-lg" />
              ) : darkMode === "light" ? (
                <SunIcon className="w-5 h-5 text-lgnav" />
              ) : (
                <div className="w-5 h-5 text-gray-400">🌙</div>
              )}
            </button>

            {activeMenu === "darkMode" && (
              <div className="absolute top-10 right-0 text-lgnav bg-primary-light dark:bg-transparent dark:text-gray-300 border border-gray-200  dark:border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2  cursor-pointer "
                  onClick={() => toggleDarkMode("light")}
                >
                  Light
                </div>
                <div
                  className="px-4 py-2 cursor-pointer  "
                  onClick={() => toggleDarkMode("dark")}
                >
                  Dark
                </div>
                <div
                  className="px-4 py-2 cursor-pointer "
                  onClick={() => toggleDarkMode("system")}
                >
                  System
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover ease-in-out delay-150 hover:-translate-y-1 scale-110 transition hover:bg-gray-200 focus:ring focus:ring-lgnav dark:focus:ring-blue-600  duration-200"
              onClick={() =>
                setActiveMenu((prev) => (prev === "language" ? "" : "language"))
              }
            >
              <LanguageIcon className="w-5 h-5 dark:text-white text-lgnav" />
            </button>
            {activeMenu === "language" && (
              <div className="absolute top-10 right-0 bg-primary-light text-lgnav border-gray-200  dark:bg-transparent dark:text-gray-300 border dark:border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer   "
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </div>
                <div
                  className="px-4 py-2 cursor-pointer   "
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
              </div>
            )}
          </div>

          <button
            className="flex items-center gap-x-1 text-white px-2 py-2 rounded-lg shadow-md ease-in-out delay-150 hover:-translate-y-1 dark:bg-btnNav-default dark:hover:bg-btnNav-hover scale-110 transition focus:ring   duration-200"
            onClick={() => window.open("/mi-cv.pdf", "_blank")}
          >
            <GrDocumentDownload className="w-4 h-4 text-black  font-Sutittle font-bold transition " />
            <span className=" text-black font-bold  text-xs">CV</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
