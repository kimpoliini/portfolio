import { createContext } from "react";


export const languageContext = createContext({
    lang: "se",
    setLang: (lang) => {}
})