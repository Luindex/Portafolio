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
    <div className=" dark:border-transparent border-lgnav bg-transparent p-6 rounded-lg shadow-lg  transform hover:scale-105 transition-all duration-300 dark:hover:bg-gray-900 hover:bg-opacity-100 dark:shadow-primary_hover hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4   "
      />
      <h3 className="text-xl font-bold dark:text-white font-second text-lgnav mb-2">
        {title}
      </h3>
      <p className=" text-lgnav dark:text-white text-sm font-second font-extralight leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="dark:bg-gray-700  bg-lgnav text-white  transition-all dark:text-gray-300 px-3 py-1 text-xs rounded-full"
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
          <FaGithub className=" dark:text-gray-100  dark:hover:text-gray-200 text-h1lg hover:text-h1lg-hover transition-transform text-xl transform hover:scale-125 " />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-teal-400 hover:underline"
        >
          <FaExternalLinkAlt className="dark:text-gray-100  dark:hover:text-gray-200 text-h1lg hover:text-h1lg-hover transition-transform text-lg transform hover:scale-125 " />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
