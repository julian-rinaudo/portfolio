import { motion } from "framer-motion";
import ImgComputer from "../../assets/computer.svg";
import ImgScrum from "../../assets/scrum.svg";
import ImgPairProgramm from "../../assets/pair-programming.svg";
import Item from "../../commons/Item";
import CodeWindow from "./CodeWindow";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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
          {t("about")}
        </motion.h1>
        <div className="py-[100px] lg:flex lg:items-center lg:justify-center lg:gap-[200px] lg:p-[130px]">
          <CodeWindow />
          <div className="flex flex-col justify-center items-center gap-[60px] pt-[100px] lg:pt-0">
            <Item
              img={ImgScrum}
              p1={t("scrum")}
              p2={t("applied")}
            />
            <Item
              img={ImgComputer}
              p1={t("hours")}
              p2={t("bootcamp")}
            />
            <Item
              img={ImgPairProgramm}
              p1={"Pair Programming"}
              p2={t("pair")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
