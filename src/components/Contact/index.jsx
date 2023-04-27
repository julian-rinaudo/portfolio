import { useState } from "react";
import { Toaster } from "sonner";
import useSubmit from "../../hooks/useSubmit";
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
          <p className="text-white text-center text-[30px] font-body font-medium">
            Trabajemos Juntos!
          </p>
        </div>
        <div className="flex justify-center py-[100px] px-[20px] ">
          <Form
            handleInputTextChange={handleInputTextChange}
            handleInputEmailChange={handleInputEmailChange}
            handleTextAreaChange={handleTextAreaChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
