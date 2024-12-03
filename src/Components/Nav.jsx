import {useState} from "react"
import {
  MoonIcon,
  SunIcon,
  GlobeAltIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline"

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
    <nav className="fixed top-0  left-0 w-full bg-gray-900/90 dark:bg-black/80 shadow-md z-50 backdrop-blur">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-200"></div>

        <div className="flex items-center space-x-6">
          {/* Icono para Modo Oscuro */}
          <div className="relative">
            <button
              className="flex items-center"
              onClick={() =>
                setActiveMenu((prev) => (prev === "darkMode" ? "" : "darkMode"))
              }
            >
              {darkMode ? (
                <MoonIcon className="w-6 h-6 text-white rounded-lg hover:bg-slate-800 " />
              ) : (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              )}
            </button>
            {activeMenu === "darkMode" && (
              <div className="absolute top-8 right-0 bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-300 border border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                  onClick={() => toggleDarkMode("light")}
                >
                  Light
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
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
              className="flex items-center"
              onClick={() =>
                setActiveMenu((prev) => (prev === "language" ? "" : "language"))
              }
            >
              <GlobeAltIcon className="w-6 h-6 text-white" />
            </button>
            {activeMenu === "language" && (
              <div className="absolute top-8 right-0 bg-gray-700 text-gray-200 dark:bg-gray-800 dark:text-gray-300 border border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
              </div>
            )}
          </div>

          {/* Botón para Descargar CV */}
          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-500 transition-all duration-200"
            onClick={() => window.open("/mi-cv.pdf", "_blank")}
          >
            <DocumentIcon className="w-5 h-5 mr-2" />
            Descargar CV
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
