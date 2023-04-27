import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkdin from "react-useanimations/lib/linkedin";
import Carrousel from "./Carrousel";
import ImgJs from "../../assets/pseudo.png";
import IconStar from "../../assets/63934072b143767c6aa620f8_start-icon.svg.png";
import ImgCarrousel from "../../assets/carrousel.png";
import Btn from "../../commons/Btn"

const Home = () => {
  return (
    <section className="flex flex-col bg-primary min-h-[100vh]">
      <div className="flex justify-end items-center p-5 gap-1">
        <Link to={"https://www.linkedin.com/in/julian-rinaudo/"}>
          <UseAnimations
            className="cursor-pointer"
            animation={linkdin}
            size={30}
          />
        </Link>
        <Link to={"https://github.com/julian-rinaudo"}>
          <UseAnimations
            className="cursor-pointer"
            animation={github}
            size={30}
          />
        </Link>
      </div>
      {/* <img
        className="md:w-24 lg:w-32 xl:w-32 2xl:w-32 translate-y-[-15px] hidden md:flex "
        src="src/assets/63a0c6b60bea3337228ddf1b_orange-bracket-icon.webp.png"
        alt="orange-bracket"
      /> */}
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 10 }}
        viewport={{ once: false, amount: 0.7 }}
        className=" w-5 absolute top-16 left-6"
        src={IconStar}
        alt="start icon"
      />
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: -10 }}
        viewport={{ once: false, amount: 0.7 }}
        className=" w-8 absolute bottom-[35%] right-8"
        src={IconStar}
        alt="start icon"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="home text-center text-3xl pt-[150px] pb-28 px-4"
      >
        <p className="home_name font-body font-semibold">Soy Julian Rinaudo</p>
        <div className="flex justify-center items-center text-4xl gap-2">
          <p className="home_stack font-body font-bold">FullStack</p>
          <img className=" object-contain w-24" src={ImgJs} alt="icon JS" />
        </div>
        <p className="home_dev text-4xl font-body font-bold">Developer</p>
      </motion.div>
      <div className="flex justify-center items-center">
        <LinkRoll to="proyects" smooth={true}>
          <Btn text={'proyectos'} size={17} py={16} px={27} />
        </LinkRoll>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-full max-[640px]:h-[240px]"
          src={ImgCarrousel}
          alt="carrosel"
        />
        <div className="absolute flex justify-center items-center w-[85%] h-12 overflow-hidden">
          <div className="flex items-center w-[100%]">
            <Carrousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
