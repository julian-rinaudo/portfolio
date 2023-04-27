const Contact = () => {
  return (
    <section className="relative proyects bg-right-top">
      <div className="absolute top-[-10px] w-[100%] h-[35px] bg-black"></div>
      <div className="h-full">
        <div className="absolute top-[0] left-0 right-0">
          <p className="text-white text-center text-[30px] font-body font-medium">
            Trabajemos Juntos!
          </p>
        </div>
        <div className="flex justify-center py-[100px] px-[20px]">
          <form
            action="https://formsubmit.co/4e800379c3f49c4e513245d479a73207"
            method="POST"
            className="flex flex-col justify-center items-center gap-7 bg-card py-[51px] px-[38px] w-[335px] rounded"
          >
            <label className="w-full flex flex-col text-white text-[14px]">
              Nombre
              <input className=" bg-transparent border-b" type="text" name="nombre" />
            </label>
            <label className="w-full flex flex-col text-white mb-[30px] text-[14px]">
              Email
              <input className=" bg-transparent border-b" type="email" name="email" />
            </label>
            <label className="w-full flex flex-col text-white text-[14px]">
              Descripción
            <textarea className="bg-transparent border-b" name="description" cols="30" rows="3"></textarea>
              </label>
              <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
