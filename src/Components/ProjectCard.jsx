import React from "react"
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="  dark:border-gray-700 border-lgnav bg-transparent p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold dark:text-white text-lgnav mb-2">
        {title}
      </h3>
      <p className="dark:text-gray-400 text-lgnav text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="dark:bg-gray-700 dark:hover:bg-gray-600 bg-lgnav text-white cursor-pointer transition-all dark:text-gray-300 px-3 py-1 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-6 items-center">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-teal-400 hover:underline"
        >
          <FaGithub className=" dark:text-gray-100  dark:hover:text-gray-50 text-h1lg hover:text-h1lg-hover transition-transform text-xl transform hover:scale-110 " />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-teal-400 hover:underline"
        >
          <FaExternalLinkAlt className=" dark:text-gray-100  dark:hover:text-gray-50 text-h1lg hover:text-h1lg-hover  transition-transform transform hover:scale-110 " />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
