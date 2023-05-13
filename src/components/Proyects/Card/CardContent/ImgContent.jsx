import React from "react";
import { motion } from "framer-motion";

const ImgContent = ({item, setEnter, enter, img, alt}) => {
  return (
    <motion.div variants={item}>
      <div
        onMouseEnter={() => setEnter(true)}
        className="rounded overflow-hidden min-h-[220px] bg-primary"
      >
        <img
          className={`${
            enter && "scale-[1.1]"
          } ease-out duration-[0.3s] w-full min-h-[220px] max-h-[282px] object-cover `}
          src={img ? img : ""}
          alt={alt}
        />
      </div>
    </motion.div>
  );
};

export default ImgContent;
