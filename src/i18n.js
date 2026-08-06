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
          "Frontend Developer building modern, responsive mobile and web applications with React Native, React, Next.js, and TypeScript.",
      },
      about: {
        title: "About Me",
        p1: "Hi, I'm Luis Carlos Rodriguez, a frontend developer and Systems Engineering student based in Medellín, Colombia. I'm passionate about design and programming — outside of my studies, I enjoy exploring design, technology, and the endless possibilities they bring to life.",
        p2: "I specialize in building intuitive, responsive applications for both mobile and web. I currently work with React Native, Expo, and TypeScript on mobile, and with React and Next.js on the web, creating seamless user experiences. I take pride in writing clean, maintainable code and turning ideas into functional interfaces that users love to interact with.",
      },
      experience: {
        title: "Experience",
        elSolNec_cargo: "Frontend Developer",
        elSolNec_dates: "Jan 2026 – Present",
        elSolNec:
          "I currently work at El Sol N.E.C as a Frontend Developer on a healthcare platform, contributing to both its mobile application (React Native, TypeScript, Expo) and its web frontend (Next.js, TypeScript, MUI). I build and maintain reusable UI components — including file and document management modules — manage application state with Zustand and Redux Toolkit, and integrate with backend services and enterprise authentication (Azure AD / MSAL). I also help keep our CI/CD pipelines healthy in Azure DevOps.",
        cargo: "Software Developer Intern (Fullstack)",
        dates: "Jan 2025 – Aug 2025",
        invamer:
          "During my internship, I worked with the Solutions & IT team on Central Empleados, an internal system for the Human Resources department. I contributed across the stack: building dynamic UI modules (home, file upload, document viewer, and job position forms) on the frontend, and implementing backend logic and data management with Laravel (PHP). I worked in an Agile Scrum environment, using Jira for task tracking and team coordination — an experience that solidified my understanding of real-world development workflows and production coding practices.",
        p1: "As a Systems Engineering student, I started by building web page prototypes with HTML, CSS, and JavaScript to bring my ideas to life. As I advanced, I explored modern frameworks and libraries — focusing on React — to build dynamic, responsive interfaces. My first project,",
        p1_2: ", let me apply real frontend concepts and start shaping my development workflow, combining structure, functionality, and design.",
      },
      projects: {
        title: "Projects",
        todo: {
          description:
            "A task management app built with React, TypeScript, and Vite. Users can add, edit, delete, and complete tasks, and filter them by status.",
        },
        beverage: {
          description:
            "A web application built with React and TypeScript that lets users search for drinks by ingredient or category and save their favorites.",
        },
        crypto: {
          description:
            "A cryptocurrency price checker built with React and TypeScript. Users select a cryptocurrency and a currency to get its current exchange value in real time.",
        },
        weather: {
          description:
            "A weather app built with React, TypeScript, and Zod. Users enter any location and get up-to-date weather information through a clean, simple interface.",
        },
        vet: {
          description:
            "A patient management app for veterinary clinics, built with React and Tailwind CSS. It gives pet owners and vets a quick, easy way to register and track pet information.",
        },
        portfolio: {
          description:
            "My personal portfolio — a responsive single-page site built with React, Vite, and Tailwind CSS, featuring dark mode and language switching.",
        },
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
        about: "Acerca de mí",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        description:
          "Desarrollador Frontend que construye aplicaciones móviles y web modernas y responsivas con React Native, React, Next.js y TypeScript.",
      },
      about: {
        title: "Acerca de mí",
        p1: "Hola, soy Luis Carlos Rodriguez, desarrollador frontend y estudiante de Ingeniería de Sistemas en Medellín, Colombia. Me apasionan el diseño y la programación — fuera de mis estudios, disfruto explorando el diseño, la tecnología y las infinitas posibilidades que traen a la vida.",
        p2: "Me especializo en crear aplicaciones intuitivas y responsivas tanto para móvil como para web. Actualmente trabajo con React Native, Expo y TypeScript en móvil, y con React y Next.js en web, creando experiencias de usuario fluidas. Me enorgullece escribir código limpio y mantenible, y convertir ideas en interfaces funcionales con las que a los usuarios les encanta interactuar.",
      },
      experience: {
        title: "Experiencia",
        elSolNec_cargo: "Desarrollador Frontend",
        elSolNec_dates: "Ene 2026 – Presente",
        elSolNec:
          "Actualmente trabajo en El Sol N.E.C como Desarrollador Frontend en una plataforma del sector salud, contribuyendo tanto a su aplicación móvil (React Native, TypeScript, Expo) como a su frontend web (Next.js, TypeScript, MUI). Construyo y mantengo componentes de UI reutilizables — incluyendo módulos de gestión de archivos y documentos —, gestiono el estado de la aplicación con Zustand y Redux Toolkit, e integro servicios backend y autenticación empresarial (Azure AD / MSAL). También ayudo a mantener sanos los pipelines de CI/CD en Azure DevOps.",
        cargo: "Practicante de Desarrollo de Software (Fullstack)",
        dates: "Ene 2025 – Ago 2025",
        invamer:
          "Durante mis prácticas trabajé con el equipo de Soluciones y TI en Central Empleados, un sistema interno para el departamento de Recursos Humanos. Contribuí en todo el stack: construí módulos de UI dinámicos (inicio, carga de archivos, visor de documentos y formularios de cargos) en el frontend, e implementé lógica de backend y gestión de datos con Laravel (PHP). Trabajé en un entorno ágil Scrum, usando Jira para el seguimiento de tareas y la coordinación del equipo — una experiencia que consolidó mi comprensión de los flujos de desarrollo reales y las buenas prácticas de código en producción.",
        p1: "Como estudiante de Ingeniería de Sistemas, comencé creando prototipos de páginas web con HTML, CSS y JavaScript para dar vida a mis ideas. A medida que avanzaba, exploré frameworks y librerías modernas — centrándome en React — para crear interfaces dinámicas y responsivas. Mi primer proyecto,",
        p1_2: ", me permitió aplicar conceptos reales de frontend y empezar a dar forma a mi flujo de trabajo de desarrollo, combinando estructura, funcionalidad y diseño.",
      },
      projects: {
        title: "Proyectos",
        todo: {
          description:
            "Una aplicación de gestión de tareas construida con React, TypeScript y Vite. Permite agregar, editar, eliminar y completar tareas, y filtrarlas por estado.",
        },
        beverage: {
          description:
            "Una aplicación web construida con React y TypeScript que permite buscar bebidas por ingrediente o categoría y guardar tus favoritas.",
        },
        crypto: {
          description:
            "Un consultor de precios de criptomonedas construido con React y TypeScript. Eliges una criptomoneda y una divisa para ver su valor actual en tiempo real.",
        },
        weather: {
          description:
            "Una aplicación del clima construida con React, TypeScript y Zod. Ingresas cualquier ubicación y obtienes información actualizada del clima en una interfaz simple y limpia.",
        },
        vet: {
          description:
            "Una aplicación de gestión de pacientes para clínicas veterinarias, construida con React y Tailwind CSS. Ofrece a dueños y veterinarios una forma rápida de registrar y consultar la información de las mascotas.",
        },
        portfolio: {
          description:
            "Mi portafolio personal — un sitio responsive de una sola página construido con React, Vite y Tailwind CSS, con modo oscuro y cambio de idioma.",
        },
      },
      contact: {
        label: "Contáctame",
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
