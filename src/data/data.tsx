import { NotebookPen, CheckCheck, BookCheck } from "lucide-react";
import { PortfolioProject } from "./types";
import { FaWindows } from "react-icons/fa6";

export const listItems = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export const shortcuts = [
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + B
      </span>
    ),
    description: "Open/Close Side Menu",
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + M
      </span>
    ), description: "Open/Close Spotlight Search"
  },
  {
    shortcut: (
      <span>
        Ctrl + <FaWindows className="inline-block mr-1" /> + D
      </span>
    ), description: "Toggle Dark/Light Mode"
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ), description: "Cut selected text"
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ), description: "Undo last action"
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ), description: "Redo last action"
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ), description: "Save the current document"
  },
  {
    shortcut: (
      <span>
        <FaWindows className="inline-block mr-1" /> + /
      </span>
    ), description: "Close dialog or cancel"
  },
];

export const futureProjects: PortfolioProject[] = [
  {
    id: "futureProject1",
    title: "Future E-commerce Platform",
    description:
      "This project involves building a scalable and robust e-commerce platform that can handle high traffic, provide excellent user experience, and integrate with various payment systems.",
    focuses: [
      "Performance Optimization",
      "User Experience",
      "Scalability and Load Balancing",
      "Security and Payment Integration",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "TailwindCSS"],
    images: [
      { src: "/images/inspiration1.jpg", alt: '', description: '' },
      { src: "/images/inspiration2.jpg", alt: '', description: '' },
      { src: "/images/inspiration3.jpg", alt: '', description: '' },
    ],
    timeline: [
      "Research and Initial Planning",
      "Prototype and Design",
      "Development (Frontend and Backend)",
      "Testing and Deployment",
    ],
    inspiration: [
      "/images/inspiration4.jpg",
      "/images/inspiration5.jpg",
      "/images/inspiration6.jpg",
    ],
    githubLink: "https://github.com/yourgithub/future-ecommerce",
    liveLink: "https://future-ecommerce.com",
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "mybussiness",
    title: "My Website Business Project",
    description:
      "This is a personal photography portfolio showcasing my journey through various landscapes and cityscapes. The project features a dynamic gallery, an interactive gallery layout, and optimized images for different screen sizes.",
    technologies: ["Next.js", "TypeScript", "Docker", "Tailwind", "Yup"],
    features: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    images: [
      { src: "/images/business/contact_form.png", alt: "contact form", description: '' },
      { src: "/images/business/elevate_business.png", alt: "elevate_business", description: '' },
      { src: "/images/business/our_values.png", alt: "our_values", description: '' },
      { src: "/images/business/payment_plans.png", alt: "payment", description: '' },
      { src: "/images/business/personalized_web_design.png", alt: "personalized_web_design", description: '' },
      { src: "/images/business/portfolio_website.png", alt: "portfolio_website", description: '' },
      { src: "/images/business/professional_website.png", alt: "professional_website", description: '' },
    ],
  },
  {
    id: "iacwebsite",
    title: "International Activites Club Official Website",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["Next.js", "TypeScript", "Docker", "Tailwind", "Chart.js", "Yup"],
    features: [],
    images: [
      { src: "/images/iac/about_classes.png", alt: '', description: '' },
      { src: "/images/iac/introduction.png", alt: '', description: '' },
      { src: "/images/iac/main_page.png", alt: '', description: '' },
      { src: "/images/iac/overview.png", alt: '', description: '' },
      { src: "/images/iac/staff_page.png", alt: '', description: '' },
    ],
    liveLink: "https://iacafterschools.com/",
  },
  {
    id: "quizapplication",
    title: "A Full-Stack Quiz Application",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    technologies: ["localStorage", "sessionStorage", "JavaScript", "cookies"],
    features: [],
    images: [
      { src: "/images/quizapp/registration.png", alt: '', description: '' },
      { src: "/images/quizapp/taking_quiz.png", alt: '', description: '' },
      { src: "/images/quizapp/quiz_selection.png", alt: '', description: '' },
      { src: "/images/quizapp/quiz_history.png", alt: '', description: '' },
      { src: "/images/quizapp/level_selection.png", alt: '', description: '' },
      { src: "/images/quizapp/leaderboard_selection.png", alt: '', description: '' },
      { src: "/images/quizapp/leaderboard.png", alt: '', description: '' },
    ],
    githubLink: "https://github.com/tmchuynh/Quiz-App",
  },
  {
    id: "sudoku",
    title: "A Sudoku Application for CodeNinjas",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      { src: "/images/sudoku/game.png", alt: '', description: '' },
    ],
    githubLink: "https://github.com/tmchuynh/sudoku",
  },
  {
    id: "frontendbook",
    title: "A Front-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      { src: "/images/frontend/table_of_contents.png", alt: '', description: '' },
      { src: "/images/frontend/abbr.png", alt: '', description: '' },
      { src: "/images/frontend/accessibility.png", alt: '', description: '' },
      { src: "/images/frontend/document_structure.png", alt: '', description: '' },
      { src: "/images/frontend/css.png", alt: '', description: '' },
      { src: "/images/frontend/quizapp.png", alt: '', description: '' },
      { src: "/images/frontend/next.png", alt: '', description: '' },
      { src: "/images/frontend/framework.png", alt: '', description: '' },
    ],
  },
  {
    id: "backendbook",
    title: "A Back-end Development Book for Beginners",
    description:
      "An e-commerce platform built with React and Node.js. It supports user authentication, a shopping cart, and a complete checkout system.",
    features: [],
    images: [
      { src: "/images/backend/github.png", alt: '', description: '' },
      { src: "/images/backend/principles.png", alt: '', description: '' },
      { src: "/images/backend/design_principles.png", alt: '', description: '' },
      { src: "/images/backend/databases.png", alt: '', description: '' },
      { src: "/images/backend/containers.png", alt: '', description: '' },
      { src: "/images/backend/web_dev.png", alt: '', description: '' },
      { src: "/images/backend/base.png", alt: '', description: '' },
    ],
  },
];

export const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: NotebookPen,
    },
    {
      title: "About Me",
      url: "/about",
      icon: NotebookPen,
    },
    {
      title: "Information",
      icon: CheckCheck,
      items: [
        {
          title: "Resume",
          url: "#",
        },
        {
          title: "Education",
          url: "#",
        },
        {
          title: "Relevant Experiences",
          url: "#",
        },
        {
          title: "Miscellaneous",
          url: "#",
        },
      ],
    },
    {
      title: "Contact",
      url: "/",
      icon: NotebookPen,
    },

  ],
  "information": [
    {
      title: "Projects",
      icon: BookCheck,
      items: [
        {
          title: "My Business",
          url: "/projects/mybussiness",
        },
        {
          title: "IAC Website",
          url: "/projects/iacwebsite",
        },
        {
          title: "Quiz Application",
          url: "/projects/quizapplication",
        },
        {
          title: "Sudoku",
          url: "/projects/sudoku",
        },
        {
          title: "Front-End Development Book",
          url: "/projects/frontendbook",
        },
        {
          title: "Back-End Development Book",
          url: "/projects/backendbook",
        },
      ],
    },
    {
      title: "Future Projects",
      icon: NotebookPen,
      items: [
        {
          title: "Full-Stack Web Development",
          url: "/futureProjects/futureProject1",
        },
        {
          title: "Front-end Development",
          url: "/roadmaps/frontend",
        },
        {
          title: "Back-end Development",
          url: "/roadmaps/backend",
        },
        {
          title: "Pre Medical",
          url: "/roadmaps/premed",
        },
        {
          title: "Business",
          url: "/roadmaps/business",
        },
        {
          title: "Law",
          url: "/roadmaps/law",
        },
        {
          title: "Entrepreneurship",
          url: "/roadmaps/entrepreneurship",
        },
      ],
    },
  ],
};