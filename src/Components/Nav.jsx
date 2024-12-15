import {useState, useEffect} from "react"
import {MoonIcon, SunIcon, LanguageIcon} from "@heroicons/react/24/outline"
import {GrDocumentUser} from "react-icons/gr"

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
      <div className="container px-4 py-2 flex items-center justify-end">
        <div className="flex items-center space-x-3 mr-6 my-1.5">
          {/* Menú Dark Mode */}
          <div className="relative">
            <button
              className="flex items-center text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover hover:bg-gray-200 focus:ring focus:ring-lgnav dark:focus:ring-blue-600  transition-all duration-200"
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
              <div className="absolute top-8 right-0 text-lgnav bg-primary-light dark:bg-primary-dark dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2  cursor-pointer dark:hover:bg-primary_hover transition-all"
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
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover transition-all"
                  onClick={() => toggleDarkMode("system")}
                >
                  System
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover hover:bg-gray-200 focus:ring focus:ring-lgnav dark:focus:ring-blue-600 transition-all duration-200"
              onClick={() =>
                setActiveMenu((prev) => (prev === "language" ? "" : "language"))
              }
            >
              <LanguageIcon className="w-5 h-5 dark:text-white text-lgnav" />
            </button>
            {activeMenu === "language" && (
              <div className="absolute top-8 right-0 bg-primary-light text-lgnav border-gray-200  dark:bg-primary-dark dark:text-gray-300 border dark:border-gray-600 rounded-lg shadow-lg py-1 animate-fadeIn">
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover transition-all "
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </div>
                <div
                  className="px-4 py-2 cursor-pointer dark:hover:bg-primary_hover transition-all "
                  onClick={() => changeLanguage("en")}
                >
                  English
                </div>
              </div>
            )}
          </div>

          <button
            className="flex items-center text-white px-2 py-2 rounded-lg shadow-md dark:hover:bg-primary_hover hover:bg-gray-200 focus:ring focus:ring-blue-500 transition-all duration-200"
            onClick={() => window.open("/mi-cv.pdf", "_blank")}
          >
            <GrDocumentUser className="w-4 h-4 dark:text-white text-lgnav " />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
