import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import airplay from "react-useanimations/lib/airplay";
import iconGitHub from "../../assets/iconGitHub.svg";
import vectorIcon from "../../assets/Vector.svg";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ContentCard = ({
  id,
  alt,
  img,
  title,
  description,
  tech,
  deploy,
  github,
}) => {
  return (
    <>
      <motion.div variants={item}>
        <div className=" overflow-hidden min-h-[220px] bg-primary">
          <img
            className=" hover:scale-[1.1] ease-out duration-[0.3s] w-full min-h-[220px] max-h-[282px] object-cover"
            src={img ? img : ""}
            alt={alt}
          />
        </div>
      </motion.div>
      <div className="py-[20px] px-[15px]">
        <div className="flex items-center justify-between">
          <p className=" font-body font-medium text-[23px] text-white">
            {title}
          </p>
          <img className="w-[40px]" src={vectorIcon} alt="row" />
        </div>
        <p className=" opacity-[0.8] font-body font-regular text-[15px] text-white">
          {description}
        </p>
        <div className="flex flex-wrap max-w-[85%] pt-[10px] gap-3">
          {tech.map((technology) => {
            return (
              <p
                key={technology}
                className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]"
              >
                {technology}
              </p>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-[40px] gap-[7px]">
          {deploy && (
            <UseAnimations
              className="cursor-pointer"
              animation={airplay}
              strokeColor="white"
              size={40}
            />
          )}
          <Link to={github}>
          <img
            className="h-[30px] cursor-pointer"
            src={iconGitHub}
            alt="icon github"
          />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
