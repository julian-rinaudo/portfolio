import { motion } from "framer-motion";
const Proyects = () => {
  return (
    <section className="proyects min-h-[200vh] w-[100%] bg-top bg-auto bg-emerald-500 ">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        className=" text-white text-center pt-10 text-[40px] font-body font-medium"
      >
        Proyectos
      </motion.h2>
      <div>Proyecto1</div>
      <div>Proyecto2</div>
      <div>Proyecto3</div>
    </section>
  );
};

export default Proyects;
