import { motion } from "framer-motion";
import iconBlue from "../../assets/639c93db3dd0bf18b1ae768a_blue-square-icon.svg";
import Card from "./Card";
import proyects from "../../utils/proyects";
const Proyects = () => {
  return (
    <section
      id="proyects"
      className=" proyects relative pb-[100px] w-[100%] bg-top bg-cover"
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
      <div className="flex flex-wrap justify-center items-center">
        {proyects.map(
          ({
            id,
            img,
            alt,
            title,
            description,
            technologies,
            github,
            deploy,
          }) => {
            return (
              <Card
                key={id}
                img={img}
                title={title}
                description={description}
                tech={technologies}
                github={github}
                deploy={deploy}
                alt={alt}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Proyects;
