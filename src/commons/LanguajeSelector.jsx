import React, { useState } from "react";
import i18n from "../config/i18n";

function LanguageSelector() {
  const languaje = window.localStorage.i18nextLng;
  const changeLanguage = (e) => {
    window.location.reload()
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={languaje} onChange={changeLanguage} class="appearance-none outline-none text-[17px] px-4 rounded-md bg-transparent text-gray-700 cursor-pointer">
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
}


export default LanguageSelector;
