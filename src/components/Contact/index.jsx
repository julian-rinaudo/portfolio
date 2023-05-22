import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import useSubmit from "../../hooks/useSubmit";
import Form from "./Form";
import BtnScroll from "../../commons/BtnScroll";
import { Link as LinkRoll } from "react-scroll";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const handleInputTextChange = (e) => setName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleTextAreaChange = (e) => setTextArea(e.target.value);

  //mostrar btnScroll
  const [show, setShow] = useState(false);

  window.onscroll = function () {
    let y = window.scrollY;
    if (y > 700) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const { loading, handleSubmit } = useSubmit(name, email, textArea);

  const { t } = useTranslation();

  return (
    <section className="relative proyects bg-right-top">
      <Toaster position="top-center" />
      <div className="absolute top-[-10px] w-[100%] h-[35px] bg-black"></div>
      <div className="h-full lg:grid grid-cols-2">
        <div className="flex justify-center absolute top-[0] left-0 right-0 lg:col-span-1 lg:relative lg:items-center">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-center text-[30px] font-body font-medium lg:text-[40px]"
          >
            {t("contact")}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center py-[100px] px-[20px] lg:col-span-1"
        >
          <Form
            handleInputTextChange={handleInputTextChange}
            handleInputEmailChange={handleInputEmailChange}
            handleTextAreaChange={handleTextAreaChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </motion.div>
      </div>
      {show && (
        <LinkRoll to="home" smooth={true}>
          <BtnScroll />
        </LinkRoll>
      )}
    </section>
  );
};

export default Contact;
