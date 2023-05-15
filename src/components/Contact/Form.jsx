import { useTranslation } from "react-i18next";
import Btn from "../../commons/Btn";
const Form = ({ handleInputTextChange, handleSubmit, handleInputEmailChange, handleTextAreaChange ,loading }) => {
  const {t} = useTranslation()
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/4e800379c3f49c4e513245d479a73207"
      method="POST"
      className="flex flex-col justify-center items-center gap-7 bg-card py-[51px] px-[38px] w-[500px] min-w-[300px] rounded"
    >
      <label className="w-full flex flex-col text-white text-[15px]">
        {t('label.name')}
        <input
          onChange={(e) => handleInputTextChange(e)}
          className=" bg-transparent border-b mt-1"
          type="text"
          name="nombre"
        />
      </label>
      <label className="w-full flex flex-col text-white mb-[30px] text-[15px]">
        {t('label.email')}
        <input
        onChange={(e) => handleInputEmailChange(e)}
          className=" bg-transparent border-b mt-1"
          type="email"
          name="email"
        />
      </label>
      <label className="w-full flex flex-col text-white text-[15px]">
        {t('label.textarea')}
        <textarea
        onChange={(e) => handleTextAreaChange(e)}
          className="bg-transparent border-b mt-1"
          name="description"
          cols="30"
          rows="3"
        ></textarea>
      </label>
      <Btn loading={loading} text={t("btn.3")} />
      <input type="hidden" name="_next" value="https://portfolio-julian-rinaudo.vercel.app/" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};
export default Form;
