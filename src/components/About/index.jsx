import ImgArrow from "../../assets/curved-arrow-with-broken-line.png";
import ImgComputer from "../../assets/computer.svg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className=" bg-primary font-body px-10 min-h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount:0.3 }}
          className="text-center font-medium text-[40px] py-10"
        >
          Sobre mi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          className="about_p text-center leading-7 pb-14"
        >
          Tengo 22 años, estudie y finalize la Tecnicatura en Marketing.
          Terminando esta carrera fue donde descubri y me apacione por la
          programación. Y asi es como ademas de otros cursos realizados sobre
          programación, curse con exito un{" "}
          <span className="font-bold">
            Bootcamp de programación FullStack de Plataforma 5.
          </span>
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: "50deg" }}
          viewport={{ once: false, amount: 0.7 }}
          className="w-[100px] rotate-60"
          src={ImgArrow}
          alt="arrow"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center gap-2 pt-12"
        >
          <img className="w-[60px]" src={ImgComputer} alt="computer" />
          <div className="text-[13px]">
            <p className="font-bold">+800 Horas</p>
            <p>Programando</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
