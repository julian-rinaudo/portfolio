import UseAnimations from "react-useanimations";
import loadingv2 from "react-useanimations/lib/loading2";

const Btn = ({ text, size, py, px, loading }) => {
  return (
    <div className="rounded-full drop-shadow-custom hover:drop-shadow-hover">
      <button
        className={`capitalize button font-body border-[2px] border-secondary rounded-full text-[${size}px] font-medium text-white py-[${py}px] px-[${px}px] bg-secondary hover:border-[2px] 
        hover:border-secondary hover:bg-primary hover:text-secondary hover:rounded-[1rem]`}
      >
        {loading ? <UseAnimations animation={loadingv2} /> : text}
      </button>
    </div>
  );
};

export default Btn;
