import React from "react";

const TechContent = ({setEnter, setOpen, open, arrOfTech, tech}) => {
  return (
    <div
      onMouseEnter={() => setEnter(true)}
      className="flex flex-wrap max-w-[85%] mx-0 pt-[10px] gap-3"
    >
      {!open
        ? arrOfTech.map((technology) => {
            return (
              <p
                onMouseEnter={() => setEnter(true)}
                key={technology}
                className=" bg-primary py-[4px] px-[7px] rounded-[12px] font-body font-medium opacity-[0.8]"
              >
                {technology}
              </p>
            );
          })
        : tech.map((technology) => {
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
      {tech.length > 3 && !open && (
        <div className="flex flex-col justify-end h-[32px]">
          <span
            onClick={() => setOpen(!open)}
            className="text-primary hover:text-orange-300"
          >
            ... Más{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default TechContent;
