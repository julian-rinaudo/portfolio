import { useState } from "react";
import { toast } from "sonner";

const useSubmit = () => {
  const [loading, setLoading] = useState(false);

  const message = () => {
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
    message();
    setTimeout(() => {
      e.target.submit();
    }, 4000);
  };
  return {
    loading,
    handleSubmit,
  };
};

export default useSubmit;
