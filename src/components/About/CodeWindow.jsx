import {motion} from "framer-motion"

const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="window-shadow w-full max-w-[600px] bg-[#292928] h-[340px] rounded-[10px] p-3"
    >
      <div className="flex gap-2 pb-9">
        <div className="w-[13px] h-[13px] bg-[#ff5e57] rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-[#febc2e] rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-[#2bc740] rounded-full"></div>
      </div>
      <div className=" w-full text-white ml-5">
        <span className=" text-[#7c6ad7]">const </span>
        <span className="text-yellow-400">person </span>
        <span className="text-[#2bbac5]">= </span>
        <span className=" text-orange-300">{"{"}</span>
        <br />
        <br />
        <div className=" ml-5 mt-[-10px]">
          <span className="text-red-500">
            {" "}
            name<span className="text-white">:</span>{" "}
            <span className="text-[#6ba564]">"Julian"</span>
          </span>
          ,
          <br />
          <span className="text-red-500">
            {" "}
            lastName<span className="text-white">:</span>{" "}
            <span className="text-[#6ba564]">"Rinaudo"</span>
          </span>
          ,
          <br />
          <span className="text-red-500">
            {" "}
            age<span className="text-white">:</span>{" "}
            <span className="text-orange-300">22</span>
          </span>
          , <br />
          <span className="text-red-500">
            {" "}
            education<span className="text-white">:</span>{" "}
            <span className="text-[#7c6ad7]">{"["}</span>
          </span>{" "}
          <br />
          <span className="ml-4 text-[#6ba564]">
            "Bootcamp FullStack de JS"
          </span>
          , <br />
          <span className="ml-4 text-[#6ba564]">"Técnico Marketing"</span>{" "}
          <br />
          <span className="text-[#7c6ad7]">{"]"}</span> <br />
        </div>
        <span className=" text-orange-300">{"}"}</span> ;
      </div>
    </motion.div>
  );
};


export default CodeWindow