import { motion } from "framer-motion";
import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
const BtnScroll = () => {
  const [enter, setEnter] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`absolute bottom-3 left-3 drop-shadow-custom button border-[2px] border-secondary rounded-full md:fixed md:bottom-20
    md:hover:border-secondary md:hover:bg-primary md:hover:rounded-[1rem] `}
    >
      {enter ? (
        <UseAnimations animation={arrowUp} strokeColor="#fa8000" size={50} />
      ) : (
        <UseAnimations animation={arrowUp} strokeColor="white" size={50} />
      )}
    </motion.button>
  );
};

export default BtnScroll;
