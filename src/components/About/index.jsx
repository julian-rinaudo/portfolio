import { motion } from "framer-motion";
import ImgComputer from "../../assets/computer.svg";
import ImgPairProgramm from "../../assets/scrum.svg";
import ImgScrum from "../../assets/pair-programming.svg";
import Item from "../../commons/Item";

const About = () => {
  return (
    <section className=" bg-primary font-body px-5 min-h-full">
      <div className="flex flex-col ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-medium text-[40px] pt-[60px]"
        >
          Sobre mi
        </motion.h1>
        <div className="py-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="window-shadow w-full max-w-[600px] bg-[#292928] h-[340px] rounded-[10px] p-3"
          >
            <div className="flex gap-2 pb-9">
              <div className="w-[13px] h-[13px] bg-[#ff5e57] rounded-full"></div>
              <div className="w-[13px] h-[13px] bg-[#febc2e] rounded-full"></div>
              <div className="w-[13px] h-[13px] bg-[#2bc740] rounded-full"></div>
            </div>
            <div className=" w-full text-white ml-5">
              <span className=" text-[#7c6ad7]">const </span>
              <span className="text-yellow-400">person </span>
              <span className="text-[#2bbac5]">= </span>
              <span className=" text-orange-300">{"{"}</span>
              <br />
              <br />
              <div className=" ml-5 mt-[-10px]">
                <span className="text-red-500">
                  {" "}
                  name<span className="text-white">:</span>{" "}
                  <span className="text-[#6ba564]">"Julian"</span>
                </span>
                ,
                <br />
                <span className="text-red-500">
                  {" "}
                  lastName<span className="text-white">:</span>{" "}
                  <span className="text-[#6ba564]">"Rinaudo"</span>
                </span>
                ,
                <br />
                <span className="text-red-500">
                  {" "}
                  age<span className="text-white">:</span>{" "}
                  <span className="text-orange-300">22</span>
                </span>
                , <br />
                <span className="text-red-500">
                  {" "}
                  education<span className="text-white">:</span>{" "}
                  <span className="text-[#7c6ad7]">{"["}</span>
                </span>{" "}
                <br />
                <span className="ml-4 text-[#6ba564]">
                  "Bootcamp FullStack de JS"
                </span>
                , <br />
                <span className="ml-4 text-[#6ba564]">
                  "Técnico Marketing"
                </span>{" "}
                <br />
                <span className="text-[#7c6ad7]">{"]"}</span> <br />
              </div>
              <span className=" text-orange-300">{"}"}</span> ;
            </div>
          </motion.div>
          <div className="flex flex-col justify-center items-center gap-[60px] pt-[100px]">
            <Item img={ImgScrum} p1={"Metodologia SCRUM"} p2={"Aplicada en proyectos grupales"} />
            <Item img={ImgComputer} p1={"+ 800 horas"} p2={"Bootcamp de Javascript 10hs por dia"} />
            <Item img={ImgPairProgramm} p1={"Pair Programming"} p2={"Compañeros diferente todos los dias durante 2 meses"}/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
