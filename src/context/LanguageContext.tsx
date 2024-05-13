import { Dispatch, SetStateAction, createContext, useContext } from "react"

export interface Lang {
    l: 'ES' | 'EN'
}

interface languageContext {
    l: 'ES' | 'EN',
    setL: Dispatch<SetStateAction<'ES' | 'EN'>>
}

export const LanguageContext = createContext<languageContext | undefined>(undefined)


export const useLanguage = () => {
    return useContext(LanguageContext)
 }