import { motion } from "framer-motion";
import { useState } from "react";
import ContentCard from "./CardContent";

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

const Card = ({ alt, img, title, description, tech, deploy, github }) => {
  const [enter, setEnter] = useState(false);
  return (
    <div className="px-[20px] flex flex-col mt-[45px]">
      <motion.div
        onMouseEnter={() => setEnter(true)}
        onMouseOut={() => setEnter(false)}
        initial={"hidden"}
        variants={container}
        transition={{ duration: 0.5 }}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.7 }}
        className="rounded min-h-[336px] cursor-pointer max-h-[700px] max-w-[500px] bg-card"
      >
        <ContentCard
          setEnter={setEnter}
          enter={enter}
          img={img}
          alt={alt}
          title={title}
          description={description}
          tech={tech}
          github={github}
          deploy={deploy}
        />
      </motion.div>
    </div>
  );
};
export default Card;
