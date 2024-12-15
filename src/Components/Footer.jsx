import React from "react"
import {FiGithub} from "react-icons/fi"
import {GrDocumentUser} from "react-icons/gr"
import {LuLinkedin} from "react-icons/lu"

const Footer = () => {
  return (
    <footer className=" bg-transparent text-gray-700 py-5">
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto flex justify-end mr-52 items-center gap-2 px-4">
          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luis-carlos-rodrigues-111163252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center dark:text-white text-h1lg px-4 py-2 rounded-lg transition-colors"
          >
            <LuLinkedin className="text-sm" />
          </a>

          {/* Botón GitHub */}
          <a
            href="https://github.com/Luindex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  dark:text-white text-h1lg px-4 py-2 rounded-lg transition-colors"
          >
            <FiGithub className="text-sm" />
          </a>

          {/* Botón CV */}
          <a
            href="/cv.pdf" /* Asegúrate de tener el archivo CV en la ruta correcta */
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center dark:text-white text-h1lg px-4 py-2 rounded-lg transition-colors"
          >
            <GrDocumentUser className="text-sm" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
