import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About me",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        description:
          "Frontend Developer specializing in building modern, functional, and responsive web interfaces using technologies like React, TypeScript, and Tailwind CSS",
      },
      about: {
        title: "About Me",
        p1: "Hello, I am Luis Carlos Rodriguez, I live in Medellin Colombia, I am a Systems Engineering student. I like design and programming. Outside of the Studio, I enjoy exploring design, technology and the infinite possibilities they bring to life.",
        p2: "As a frontend developer, I specialize in creating intuitive, responsive and visually appealing web applications. I work with modern tools like React, TypeScript, and Tailwind CSS to create seamless user experiences. I pride myself on writing clean, maintainable code and transforming ideas into beautiful, functional interfaces that users love to interact with",
      },
      experience: {
        title: "Experience",
        elSolNec_cargo: "Frontend Mobile Developer",
        elSolNec_dates: "Jan 2026 – Present",
        elSolNec:
          "Currently working at El Sol Nec as a Frontend Mobile Developer, contributing to the development of Common Health Tracker, a mobile application built with React Native and TypeScript. I am responsible for building and maintaining UI components, managing application state with Zustand, and integrating with backend services to deliver a seamless health tracking experience for users.",
        cargo: "Software Developer Intern",
        dates: "Jan 2025 – Aug 2025",
        invamer:
          "During my internship, I collaborated with the Solutions and IT team on the development of Central Empleados, an internal system for the Human Resources department. I participated in both frontend and backend development, focusing on backend logic and data management using Laravel (PHP). I worked in an Agile Scrum environment, using Jira for task tracking and team coordination. This experience solidified my understanding of development workflows in real-world environments, teamwork, and best coding practices in production environments.",
        p1: "As a Systems Engineering student, I began creating web page prototypes using HTML, CSS, and JavaScript to bring my ideas to life. As I advanced, I explored modern frameworks and libraries, focusing on React to build dynamic and responsive interfaces. My first project",
        p1_2: ", allowed me to apply real frontend concepts and start shaping my development workflow, combining structure, functionality, and design",
        p3: "In more advanced stages, I integrated my projects with local servers using tools like Vite and Next.js. In projects such as",
        p3_2: ", I implemented technologies such as Axios, Zod and Redux, increasing the complexity of my developments.",
        and: "and",
      },
      projects: {
        title: "Projects",
      },
      contact: {
        label: "Contact Me",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Acerca de mi",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        description:
          "Desarrollador frontend especializado en la creación de interfaces web modernas, funcionales y responsivas utilizando tecnologías como React, TypeScript y Tailwind CSS.",
      },
      about: {
        title: "Acerca de mi",
        p1: "Hola, soy Luis Carlos Rodriguez, vivo en Medellín Colombia, soy estudiante de Ingeniería de Sistemas. Me gusta el diseño y la programación. Fuera del estudio, disfruto explorando el diseño, la tecnología y las infinitas posibilidades que traen a la vida.",
        p2: "Como desarrollador frontend, me especializo en la creación de aplicaciones web intuitivas, responsivas y visualmente atractivas. Trabajo con herramientas modernas como React, TypeScript y Tailwind CSS para crear experiencias de usuario perfectas. Me enorgullezco de escribir código limpio y fácil de mantener y de transformar ideas en interfaces hermosas y funcionales con las que a los usuarios les encanta interactuar.",
      },
      experience: {
        title: "Experiencia",
        elSolNec_cargo: "Desarrollador Frontend Mobile",
        elSolNec_dates: "Ene 2026 – Presente",
        elSolNec:
          "Actualmente trabajo en El Sol Nec como Desarrollador Frontend Mobile, contribuyendo al desarrollo de Common Health Tracker, una aplicación móvil construida con React Native y TypeScript. Soy responsable de construir y mantener componentes de UI, gestionar el estado de la aplicación con Zustand e integrar servicios backend para ofrecer una experiencia de seguimiento de salud fluida a los usuarios.",
        cargo: "Practicante de desarrollo de software",
        dates: "Ene 2025 – Ago 2025",
        invamer:
          "Durante mi periodo de prácticas, colaboré con el equipo de Soluciones e Informática en el desarrollo de Central Empleados, un sistema interno para el departamento de Recursos Humanos. Participé tanto en el desarrollo frontend como backend, centrándome en la lógica backend y la gestión de datos con Laravel (PHP). Trabajé en un entorno Agile Scrum, utilizando Jira para el seguimiento de tareas y la coordinación del equipo. Esta experiencia consolidó mi comprensión de los flujos de trabajo de desarrollo en entornos reales, el trabajo en equipo y las buenas prácticas de código en entornos de producción.",
        p1: "Como estudiante de Ingeniería de Sistemas, comencé a crear prototipos de páginas web con HTML, CSS y JavaScript para dar vida a mis ideas. A medida que avanzaba, exploré frameworks y librerías modernas, centrándome en React para crear interfaces dinámicas y responsivas. Mi primer proyecto.",
        p1_2: ", me permitió aplicar conceptos reales de frontend y empezar a definir mi flujo de trabajo de desarrollo, combinando estructura, funcionalidad y diseño.",
        p3: "En etapas más avanzadas, integré mis proyectos con servidores locales usando herramientas como Vite y Next.js. En proyectos como",
        p3_2: ", Implementé tecnologías como Axios, Zod y Redux, aumentando la complejidad de mis desarrollos.",
        and: "y",
      },
      projects: {
        title: "Proyectos",
      },
      contact: {
        label: "Contacto",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
