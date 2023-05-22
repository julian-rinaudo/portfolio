import PuffLoader from "react-spinners/PuffLoader";

const Btn = ({ text, loading }) => {
  return (
    <div className="rounded-full drop-shadow-custom lg:hover:drop-shadow-hover">
      <button
        className={`flex justify-center w-[140px] capitalize button font-body border-[2px] border-secondary rounded-full text-[17px] font-medium text-white py-[16px] px-[27px] bg-secondary md:py-[20px] md:w-[180px] md:text-[20px] lg:hover:border-[2px] 
        lg:hover:border-secondary lg:hover:bg-primary lg:hover:text-secondary lg:hover:rounded-[1rem] 2xl:py-[25px] 2xl:px-[100px] 2xl:text-[23px]`}
      >
        {loading ? <PuffLoader color="#000" size={30} /> : text}
      </button>
    </div>
  );
};

export default Btn;
