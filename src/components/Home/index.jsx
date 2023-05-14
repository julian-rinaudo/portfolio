import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkdin from "react-useanimations/lib/linkedin";
import scrollDown from "react-useanimations/lib/scrollDown";
import Carrousel from "./Carrousel";
import ImgJs from "../../assets/pseudo.png";
import IconStar from "../../assets/63934072b143767c6aa620f8_start-icon.svg.png";
import ImgCarrousel from "../../assets/carrousel.png";
import OrangeBracket from "../../assets/63a0c6b60bea3337228ddf1b_orange-bracket-icon.webp.png";
import BlueBracket from "../../assets/63a0c6b6c43de849388e0475_blue-bracket-icon.webp.png";
import imgCircular from "../../assets/circular-icon-header.svg.png";
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
      <motion.img
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="hidden absolute translate-y-[-15px] md:flex md:w-24 lg:w-32"
        src={OrangeBracket}
        alt="orange-bracket"
      />

      <motion.img
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 10 }}
        viewport={{ once: true }}
        className=" w-5 absolute top-16 left-6 md:w-[25px] md:top-[150px] md:left-[100px] 2xl:w-[30px]"
        src={IconStar}
        alt="start icon"
      />
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="home text-center pt-[150px] lg:pt-[120px] 2xl:pt-[200px] pb-28 px-4"
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
      <div className="flex flex-col justify-center items-center gap-[30px] sm:flex-row">
        <LinkRoll to="proyects" smooth={true}>
          <Btn text={"proyectos"} />
        </LinkRoll>
        <Link
          target="_blank"
          to={
            "https://drive.google.com/file/d/1Ery_q5BxQiZvE76YUNQijG5s3OXpXowa/view?usp=sharing"
          }
        >
          <Btn text={"Mi CV"} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center relative">
      <UseAnimations
            className="hidden absolute top-[60px] opacity-[0.7] lg:block"
            animation={scrollDown}
            size={40}
          />
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: -10 }}
          viewport={{ once: true }}
          className="w-8 absolute top-[-50px] right-8 md:w-[25px] md:right-[100px] lg:right-[150px]"
          src={IconStar}
          alt="start icon"
        />
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 10 }}
          viewport={{ once: true }}
          className=" hidden h-[80px] absolute md:flex md:top-[-30px] md: left-[50px] lg:top-[-5px] lg:left-[80px]"
          src={imgCircular}
          alt="icon"
        />

        <motion.img
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden absolute translate-y-[-15px] md:flex md:w-24 md:right-0 md:top-[-180px] lg:w-32 lg:bottom-[100px]"
          src={BlueBracket}
          alt="orange-bracket"
        />
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
