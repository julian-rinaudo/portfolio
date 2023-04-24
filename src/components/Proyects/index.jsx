import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Proyects = () => {
  return (
    <section id="proyects" className="proyects pb-[100px] w-[100%] bg-top bg-auto bg-emerald-500 ">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        className=" text-white text-center py-20 text-[40px] font-body font-medium"
      >
        Proyectos
      </motion.h2>
      <div className="px-[20px] flex flex-col gap-[45px]">
        <motion.div
          initial={"hidden"}
          variants={container}
          transition={{ duration: 0.5 }}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
        >
          <motion.div
          variants={item}
          >
            <div className="min-h-[220px] bg-primary"></div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={container}
          transition={{ duration: 0.5 }}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
        >
          <motion.div
          variants={item}
          >
            <div className="min-h-[220px] bg-primary"></div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={container}
          transition={{ duration: 0.5 }}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="min-h-[336px] max-h-[700px] max-w-[500px] bg-card"
        >
          <motion.div
          variants={item}
          >
            <div className="min-h-[220px] bg-primary"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyects;
