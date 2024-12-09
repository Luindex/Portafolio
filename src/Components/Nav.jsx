import {useState} from "react"
import {MoonIcon, SunIcon, LanguageIcon} from "@heroicons/react/24/outline"
import {DocumentArrowDownIcon} from "@heroicons/react/16/solid"

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false) // Controla el modo oscuro/claro
  const [language, setLanguage] = useState("es") // Idioma seleccionado
  const [activeMenu, setActiveMenu] = useState("") // Controla cuál menú está activo: "darkMode" o "language"

  const toggleDarkMode = (mode) => {
    setDarkMode(mode === "dark")
    document.documentElement.classList.toggle("dark", mode === "dark")
    setActiveMenu("") // Cierra el menú después de seleccionar
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
    setActiveMenu("") // Cierra el menú después de seleccionar
  }

  return (
    <nav className="fixed top-0   left-0 w-full bg-primary bg-opacity-5 shadow-md z-50 backdrop-blur">
      <div className="container  px-4 py-2 flex items-center justify-between">
        <div className=" pl-12 font-serif text-2xl text-textTitle-default">
          Luindex {"</>"}{" "}
        </div>
        <div className="flex items-center space-x-3 mr-6 my-1.5">
          <div className="relative">
            <button
              className="flex items-center  text-white px-2 py-2 rounded-lg shadow-md hover:bg-primary_hover focus:ring focus:ring-blue-500 transition-all duration-200"
              onClick={() =>
                setActiveMenu((prev) => (prev === "darkMode" ? "" : "darkMode"))
              }
            >
              {darkMode ? (
                <MoonIcon className="w-5 h-5 text-white rounded-lg  " />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            {activeMenu === "darkMode" && (
              <div className="absolute top-8 right-0  text-gray-200 dark:bg-primary  dark:text-gray-300 border border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover transition-all"
                  onClick={() => toggleDarkMode("light")}
                >
                  Light
                </div>
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover transition-all"
                  onClick={() => toggleDarkMode("dark")}
                >
                  Dark
                </div>
              </div>
            )}
          </div>

          {/* Icono para Idioma */}
          <div className="relative">
            <button
              className="flex items-center  text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover focus:ring focus:ring-blue-500 transition-all duration-200"
              onClick={() =>
                setActiveMenu((prev) => (prev === "language" ? "" : "language"))
              }
            >
              <LanguageIcon className="w-5 h-5 text-white" />
            </button>
            {activeMenu === "language" && (
              <div className="absolute top-8 right-0 bg-gray-700 text-gray-200 dark:bg-primary dark:text-gray-300 border border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover"
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </div>
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
              </div>
            )}
          </div>

          {/* Botón para Descargar CV */}
          <button
            className="flex items-center  text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover focus:ring focus:ring-blue-500 transition-all duration-200"
            onClick={() => window.open("/mi-cv.pdf", "_blank")}
          >
            <DocumentArrowDownIcon className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
