import vectorIcon from "../../../../assets/Vector.svg";
import { getTech } from "../../../../utils/getTech";
import { useState } from "react";
import TechContent from "./TechContent";
import RepoContent from "./RepoContent";
import TitleContent from "./TitleContent";
import ImgContent from "./ImgContent";

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
  const [open, setOpen] = useState(false);
  const shortArray = getTech(tech);
  const arrOfTech = shortArray ? shortArray : tech;

  return (
    <>
      <ImgContent setEnter={setEnter} enter={enter} img={img} alt={alt} item={item}/>
      <div onMouseEnter={() => setEnter(true)} className="py-[20px] px-[15px]">
        <p
          onMouseEnter={() => setEnter(true)}
          className=" opacity-[0.8] font-body font-regular text-[15px] text-white"
        >
          {description}
        </p>
        <TitleContent
          setEnter={setEnter}
          enter={enter}
          title={title}
          vectorIcon={vectorIcon}
        />
        <TechContent
          setEnter={setEnter}
          setOpen={setOpen}
          open={open}
          arrOfTech={arrOfTech}
          tech={tech}
        />
        <RepoContent deploy={deploy} github={github} />
      </div>
    </>
  );
};

export default ContentCard;
