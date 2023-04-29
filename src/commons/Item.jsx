import React from "react";
import {motion} from "framer-motion"
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
const Item = ({ img, p1, p2 }) => {
  return (
    <motion.div
      initial={"hidden"}
      variants={container}
      transition={{ duration: 0.5 }}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex justify-center items-center gap-2"
    >
      <img className="w-[60px]" src={img} alt="computer" />
      <div className="text-[13px] w-[200px]">
        <p className="font-bold text-center">{p1}</p>
        {p2 && <p className="text-center">{p2}</p>}
      </div>
    </motion.div>
  );
};

export default Item;
