import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          "title": "I'm, Julián Rinaudo",
          "btn": {
            1:"Proyects",
            2:"My CV",
            3:"Send"
          },
          "about": "About Me",
          "scrum":"SCRUM Methodology",
          "applied": "Applied in group projects",
          "hours": "+ 800 hours",
          "bootcamp": "Javascript Bootcamp 10hs per day",
          "pair": "Different partners every day for 2 months",
          "proyects": "Proyects",
          "tooltip": "Go To GitHub!",
          "more": "...More",
          "less": "...Less",
          "contact": "Let's work together!",
          "label":{
            "name": "Name",
            "email": "Email",
            "textarea": "Description",
          }
        },
      },
      es: {
        translation: {
          "title": "Soy Julián Rinaudo",
          "btn": {
            1:"Proyectos",
            2:"Mi CV",
            3:"Enviar"
          },
          "about": "Sobre mi",
          "scrum":"Metodologia SCRUM",
          "applied": "Aplicada en proyectos grupales",
          "hours": "+ 800 horas",
          "bootcamp": "Bootcamp de Javascript 10hs por dia",
          "pair": "Compañeros diferente todos los dias durante 2 meses",
          "proyects": "Proyectos",
          "tooltip": "Ir al GitHub!",
          "more": "...Más",
          "less": "...Menos",
          "contact": "Trabajemos Juntos!",
          "label":{
            "name": "Nombre",
            "email": "Email",
            "textarea": "Descripción",
          }
        },
      },
    },
  });

export default i18n;
