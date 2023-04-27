import UseAnimations from "react-useanimations";
import loadingv2 from "react-useanimations/lib/loading2";

const Btn = ({ text, loading }) => {
  return (
    <div className="rounded-full drop-shadow-custom hover:drop-shadow-hover">
      <button
        className={`capitalize button font-body border-[2px] border-secondary rounded-full text-[17px] font-medium text-white py-[16px] px-[27px] bg-secondary hover:border-[2px] 
        hover:border-secondary hover:bg-primary hover:text-secondary hover:rounded-[1rem]`}
      >
        {loading ? <UseAnimations animation={loadingv2} /> : text}
      </button>
    </div>
  );
};

export default Btn;
