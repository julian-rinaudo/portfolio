import { useState } from "react";
import {motion} from "framer-motion"
import { Toaster } from "sonner";
import useSubmit from "../../hooks/useSubmit";
import imgCircular from "../../assets/circular-icon-header.svg.png"
import Form from "./Form";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const handleInputTextChange = (e) => setName(e.target.value);
  const handleInputEmailChange = (e) => setEmail(e.target.value);
  const handleTextAreaChange = (e) => setTextArea(e.target.value);

  const { loading, handleSubmit } = useSubmit(name, email, textArea);

  return (
    <section className="relative proyects bg-right-top">
      <Toaster position="top-center" />
      <div className="absolute top-[-10px] w-[100%] h-[35px] bg-black"></div>
      <div className="h-full">
        <div className="absolute top-[0] left-0 right-0">
          <motion.p 
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-white text-center text-[30px] font-body font-medium">
            Trabajemos Juntos!
          </motion.p>
        </div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center py-[100px] px-[20px] ">
          <Form
            handleInputTextChange={handleInputTextChange}
            handleInputEmailChange={handleInputEmailChange}
            handleTextAreaChange={handleTextAreaChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </motion.div>
      </div>
      <motion.img 
      initial={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 10 }}
      viewport={{ once: false, amount: 0.7 }}
      className="h-[80px] absolute bottom-0" src={imgCircular} alt="icon" />
    </section>
  );
};

export default Contact;
