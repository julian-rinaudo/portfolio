import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import useSubmit from "../../hooks/useSubmit";
import imgCircular from "../../assets/circular-icon-header.svg.png";
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
      <div className="h-full lg:grid grid-cols-2">
        <div className="flex justify-center absolute top-[0] left-0 right-0 lg:col-span-1 lg:relative lg:items-center">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-center text-[30px] font-body font-medium lg:text-[40px]"
          >
            Trabajemos Juntos!
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
    </section>
  );
};

export default Contact;
