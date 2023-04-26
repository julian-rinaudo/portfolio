import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
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
  enter,
  setEnter,
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
        <div
          onMouseEnter={() => setEnter(true)}
          className=" overflow-hidden min-h-[220px] bg-primary"
        >
          <img
            className={`${
              enter && "scale-[1.1]"
            } ease-out duration-[0.3s] w-full min-h-[220px] max-h-[282px] object-cover`}
            src={img ? img : ""}
            alt={alt}
          />
        </div>
      </motion.div>
      <div onMouseEnter={() => setEnter(true)} className="py-[20px] px-[15px]">
        <div
          onMouseEnter={() => setEnter(true)}
          className="flex items-center justify-between"
        >
          <p
            onMouseEnter={() => setEnter(true)}
            className=" font-body font-medium text-[23px] text-white "
          >
            {title}
          </p>
          <img
            className={`w-[40px] ${
              enter ? "rotate-[-45deg] scale-[1.2]" : "rotate-[0deg] "
            } duration-[0.3s]`}
            src={vectorIcon}
            alt="row"
          />
        </div>
        <p
          onMouseEnter={() => setEnter(true)}
          className=" opacity-[0.8] font-body font-regular text-[15px] text-white"
        >
          {description}
        </p>
        <div
          onMouseEnter={() => setEnter(true)}
          className="flex flex-wrap max-w-[85%] mx-0 pt-[10px] gap-3"
        >
          {tech.map((technology) => {
            return (
              <p
                onMouseEnter={() => setEnter(true)}
                key={technology}
                className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]"
              >
                {technology}
              </p>
            );
          })}
        </div>
        <div
          onMouseEnter={() => setEnter(true)}
          className="flex items-center justify-center pt-[40px] gap-[7px]"
        >
          {deploy && (
            <UseAnimations
              className="cursor-pointer lg:hidden"
              animation={airplay}
              strokeColor="white"
              size={40}
            />
          )}
          <Link to={github}>
            <img
              onMouseEnter={() => setEnter(true)}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Ir al Github!"
              className="h-[30px] cursor-pointer"
              src={iconGitHub}
              alt="icon github"
            />
          </Link>
          <Tooltip id="my-tooltip" />
        </div>
      </div>
    </>
  );
};

export default ContentCard;
