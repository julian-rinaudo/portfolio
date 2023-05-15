import BrokenOffice from "../assets/Globant.png";
import Tmdb from "../assets/tmdb.png";
import Ecommerce from "../assets/ecommerce.png";
import Portfolio from "../assets/portfolio.png";
const languaje = window.localStorage.i18nextLng;

const proyects = [
  {
    id: 1,
    img: BrokenOffice,
    title: "Broken Office",
    description: languaje === "en" ? "App for Globant" : "App para Globant",
    technologies: ["React", "Redux", "Material UI"],
    github: "https://github.com/orgs/BrokenOffice/repositories",
    deploy: "",
    alt: "img broken office",
  },
  {
    id: 2,
    img: Tmdb,
    title: "TMDB",
    description:
      languaje === "en" ? "Movies and Series App" : "App de Peliculas y Series",
    technologies: [
      "React",
      "Redux",
      "Sass",
      "PostgreSQL",
      "Express",
      "Node",
      "Sequelize",
    ],
    github: "https://github.com/julian-rinaudo/26-checkpoint-TMDB",
    alt: "img tmdb",
  },
  {
    id: 3,
    img: Ecommerce,
    title: "E-Commerce",
    description:
      languaje === "en"
        ? "E-Commerce of customized t-shirts"
        : "E-Commerce de remeras customizadas",
    technologies: [
      "Tailwind",
      "Redux",
      "React",
      "Sequelize",
      "PostgreSQL",
      "Node",
      "Express",
    ],
    github: "https://github.com/julian-rinaudo/ecommerce",
    alt: "img ecommerce",
  },
  {
    id: 4,
    img: Portfolio,
    title: languaje === "en" ? "This Portfolio" : "Este Portfolio",
    description: languaje === "en" ? "My Portfolio 2023" : "Mi Portfolio 2023",
    technologies: ["Vite", "Tailwind", "React"],
    github: "https://github.com/julian-rinaudo/portfolio",
    alt: "img portfolio",
  },
];

export default proyects;
