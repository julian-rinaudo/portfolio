import { motion } from "framer-motion";
import ImgComputer from "../../assets/computer.svg";
import ImgScrum from "../../assets/scrum.svg";
import ImgPairProgramm from "../../assets/pair-programming.svg";
import Item from "../../commons/Item";
import CodeWindow from "./CodeWindow";

const About = () => {
  return (
    <section className=" bg-primary font-body px-5 min-h-full">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-medium text-[40px] pt-[60px] lg:text-[60px]"
        >
          Sobre mi
        </motion.h1>
        <div className="py-[100px] lg:flex lg:items-center lg:justify-center lg:gap-[200px] lg:p-[130px]">
          <CodeWindow />
          <div className="flex flex-col justify-center items-center gap-[60px] pt-[100px] lg:pt-0">
            <Item
              img={ImgScrum}
              p1={"Metodologia SCRUM"}
              p2={"Aplicada en proyectos grupales"}
            />
            <Item
              img={ImgComputer}
              p1={"+ 800 horas"}
              p2={"Bootcamp de Javascript 10hs por dia"}
            />
            <Item
              img={ImgPairProgramm}
              p1={"Pair Programming"}
              p2={"Compañeros diferente todos los dias durante 2 meses"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
