import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
const Footer = () => {
  return (
    <footer className="bg-black p-[20px] lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center lg:justify-start">
        <p className="text-white">© 2023 | Julian Rinaudo</p>
      </div>
      <div className="flex justify-center items-center lg:justify-end">
        <Link to={"https://www.linkedin.com/in/julian-rinaudo/"}>
          <UseAnimations
            className="cursor-pointer"
            strokeColor="white"
            animation={linkedin}
            size={30}
          />
        </Link>
        <Link to={"https://www.instagram.com/julianrinaudo/"}>
          <UseAnimations
            classID="cursor-pointer"
            strokeColor="white"
            animation={instagram}
            size={30}
          />
        </Link>
        <Link to={"https://github.com/julian-rinaudo"}>
          <UseAnimations
            className="cursor-pointer"
            strokeColor="white"
            animation={github}
            size={30}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
