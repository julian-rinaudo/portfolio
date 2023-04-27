import { useState } from "react";
import { toast } from "sonner";
import validateEmail from "../utils/validateEmail";
const useSubmit = (name, email, textArea) => {
  const [loading, setLoading] = useState(false);

  const message = () => {
    setTimeout(() => {
      toast.message("Mensaje enviado correctamente  🚀", {
        description: "Contestaré lo mas rapido que pueda ❤️",
      });
      setLoading(false);
    }, 2500);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length && email.length && textArea.length > 0) {
      if(validateEmail(email)){
        setLoading(true);
        message();
        setTimeout(() => {
          e.target.submit();
        }, 4000);
      }else{
        toast('⚠ Cuidado que tenes datos incorrectos!!')
      }
   }else{
      toast('🚨 Todos los campos son obligatorios!!')
   }
  };
  return {
    loading,
    handleSubmit,
  };
};

export default useSubmit;
