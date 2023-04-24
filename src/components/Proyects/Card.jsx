import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import airplay from "react-useanimations/lib/airplay";
import iconGitHub from "../../assets/iconGitHub.svg"
import vectorIcon from "../../assets/Vector.svg";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Card = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[45px]">
      <motion.div
        initial={"hidden"}
        variants={container}
        transition={{ duration: 0.5 }}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
      >
        <motion.div variants={item}>
          <div className="min-h-[220px] bg-primary">
            {/* IMAGEN DE PROYECTO */}
          </div>
        </motion.div>
        <div className="py-[20px] px-[15px]">
          <div className="flex items-center justify-between">
            <p className=" font-body font-medium text-[23px] text-white">
              TMDB
            </p>
            <img className="w-[40px]" src={vectorIcon} alt="row" />
          </div>
          <p className=" opacity-[0.8] font-body font-regular text-[15px] text-white">
            App de peliculas y series
          </p>
          <div className="flex flex-wrap max-w-[85%] pt-[10px] gap-3">
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              React
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Redux
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Tailwind
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              PostgreSQL
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Express
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Node
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Sequelize
            </p>
          </div>
          <div className="flex items-center justify-center mt-[40px] gap-[7px]">
            <UseAnimations className="cursor-pointer" animation={airplay} strokeColor="white" size={45} />
            <img className="h-[35px] cursor-pointer" src={iconGitHub} alt="icon github" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={"hidden"}
        variants={container}
        transition={{ duration: 0.5 }}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
      >
        <motion.div variants={item}>
          <div className="min-h-[220px] bg-primary">
            {/* IMAGEN DE PROYECTO */}
          </div>
        </motion.div>
        <div className="py-[20px] px-[15px]">
          <div className="flex items-center justify-between">
            <p className=" font-body font-medium text-[23px] text-white">
              Broken Office
            </p>
            <img className="w-[40px]" src={vectorIcon} alt="row" />
          </div>
          <p className=" opacity-[0.8] font-body font-regular text-[15px] text-white">
            App para Globant
          </p>
          <div className="flex flex-wrap max-w-[85%] pt-[10px] gap-3">
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              React
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Material UI
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Redux
            </p>
          </div>
          <div className="flex items-center justify-center mt-[40px] gap-[7px]">
            <UseAnimations className="cursor-pointer" animation={airplay} strokeColor="white" size={45} />
            <img className="h-[35px] cursor-pointer" src={iconGitHub} alt="icon github" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={"hidden"}
        variants={container}
        transition={{ duration: 0.5 }}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
      >
        <motion.div variants={item}>
          <div className="min-h-[220px] bg-primary">
            {/* IMAGEN DE PROYECTO */}
          </div>
        </motion.div>
        <div className="py-[20px] px-[15px]">
          <div className="flex items-center justify-between">
            <p className=" font-body font-medium text-[23px] text-white">
              E-Commerce
            </p>
            <img className="w-[40px]" src={vectorIcon} alt="row" />
          </div>
          <p className=" opacity-[0.8] font-body font-regular text-[15px] text-white">
            App de peliculas y series
          </p>
          <div className="flex flex-wrap max-w-[85%] pt-[10px] gap-3">
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              React
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Tailwind
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              PostgreSQL
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Express
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Node
            </p>
            <p className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]">
              Sequelize
            </p>
          </div>
          <div className="flex items-center justify-center mt-[40px] gap-[7px]">
            <UseAnimations className="cursor-pointer" animation={airplay} strokeColor="white" size={45} />
            <img className="h-[35px] cursor-pointer" src={iconGitHub} alt="icon github" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Card;
