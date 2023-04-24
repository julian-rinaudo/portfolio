import { motion } from "framer-motion";
import iconBlue from "../../assets/639c93db3dd0bf18b1ae768a_blue-square-icon.svg";
import Card from "./Card"
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

const Proyects = () => {
  return (
    <section
      id="proyects"
      className=" proyects relative pb-[100px] w-[100%] bg-top bg-auto bg-emerald-500 "
    >
      <motion.img
        initial={{ opacity: 0, x: 24 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        className="absolute right-0 top-[-50px] h-[90px]"
        src={iconBlue}
        alt="iconBlue"
      />
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        className=" text-white text-center py-20 text-[40px] font-body font-medium"
      >
        Proyectos
      </motion.h2>
      <Card />
    </section>
  );
};

export default Proyects;
