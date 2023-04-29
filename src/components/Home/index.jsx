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
import Btn from "../../commons/Btn";

const Home = () => {
  return (
    <section className="flex flex-col bg-primary min-h-[100vh]">
      <div className="flex justify-end items-center p-5 gap-1">
        <Link to={"https://www.linkedin.com/in/julian-rinaudo/"}>
          <UseAnimations
            className="cursor-pointer"
            animation={linkdin}
            size={32}
          />
        </Link>
        <Link to={"https://github.com/julian-rinaudo"}>
          <UseAnimations
            className="cursor-pointer"
            animation={github}
            size={32}
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
        className=" w-5 absolute top-16 left-6 md:w-[25px] md:top-[280px] md:left-[100px] 2xl:w-[30px]" 
        src={IconStar}
        alt="start icon"
      />
      <motion.img
        initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: -10 }}
        viewport={{ once: false, amount: 0.7 }}
        className=" w-8 absolute bottom-[45%] right-8 md:w-[40px] md:bottom-[40%] md:right-[100px] 
        lg:right-[170px] 2xl:w-[48px] 2xl:bottom-[200px] 2xl:right-[300px]"
        src={IconStar}
        alt="start icon"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="home text-center pt-[150px] 2xl:pt-[200px] pb-28 px-4"
      >
        <p className="home_name font-body font-semibold text-3xl sm:text-4xl sm:pb-3 md:text-[45px] lg:text-[55px] lg:pb-5 xl:text-[65px] xl:pb-10 2xl:text-[75px]">
          Soy Julian Rinaudo
        </p>
        <div className="flex justify-center flex-col items-center md:flex-row md:gap-2 ">
          <div className="flex justify-center items-center gap-2 md:gap-0">
            <p className="home_stack font-body font-bold text-4xl sm:text-[42px] sm:pb-3 md:text-[52px] md:pb-0 lg:text-[65px] xl:text-[75px] 2xl:text-[85px]">
              FullStack
            </p>
            <img
              className=" object-contain w-24 sm:pb-3 md:w-[130px] md:pb-0 lg:w-[140px] xl:w-[130px] 2xl:w-[150px]"
              src={ImgJs}
              alt="icon JS"
            />
          </div>
          <p className="home_dev text-4xl font-body font-bold sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[75px] 2xl:text-[85px]">
            Developer
          </p>
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <LinkRoll to="proyects" smooth={true}>
          <Btn text={"proyectos"} />
        </LinkRoll>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-full max-[640px]:h-[240px] "
          src={ImgCarrousel}
          alt="carrosel"
        />
        <div className="absolute flex justify-center items-center w-[85%] h-12 overflow-hidden lg:h-[100px]">
          <div className="flex items-center w-[100%]">
            <Carrousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
