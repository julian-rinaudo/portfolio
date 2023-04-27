import { useState } from "react";
import { Toaster, toast } from "sonner";
import Form from "./Form";
const Contact = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputTextChange = (e) => setName(e);

  const je = () => {
    setTimeout(() => {
      toast.message("Mensaje enviado correctamente  ✔", {
        description: "Contestaré lo mas rapido que pueda ❤️",
      });
      setLoading(false);
    }, 2500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    je();
    setTimeout(() => {
      e.target.submit();
    }, 4000);
    console.log("funciono");
  };
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
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
