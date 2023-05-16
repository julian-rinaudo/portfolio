import React from "react";

const TitleContent = ({ setEnter, enter, title, vectorIcon }) => {
  return (
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
  );
};

export default TitleContent;
