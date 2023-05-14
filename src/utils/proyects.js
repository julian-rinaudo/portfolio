import BrokenOffice from "../assets/Globant.png";
import Tmdb from "../assets/tmdb.png";
import Ecommerce from "../assets/ecommerce.png";
import Portfolio from "../assets/portfolio.png";
const proyects = [
  {
    id: 1,
    img: BrokenOffice,
    title: "Broken Office",
    description: "App para Globant",
    technologies: ["React", "Redux", "Material UI"],
    github: "https://github.com/orgs/BrokenOffice/repositories",
    deploy: "",
    alt: "img broken office",
  },
  {
    id: 2,
    img: Tmdb,
    title: "TMDB",
    description: "App de peliculas y series",
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
    description: "E-Commerce de remeras customizadas",
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
    title: "Este Portfolio",
    description: "Mi Portfolio 2023",
    technologies: [
      "Vite",
      "Tailwind",
      "React",
    ],
    github: "https://github.com/julian-rinaudo/portfolio",
    alt: "img portfolio",
  },
];

export default proyects;
