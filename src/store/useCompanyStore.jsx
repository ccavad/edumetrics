import { create } from "zustand";
import { languages } from "../utils/statics/constants";

export const useCompanyStore = create((set) => ({
  companyData: {},
  setCompanyData: (data) => set((state) => ({ companyData: data })),
  language: languages["aze"],
  setLanguage: (lang) =>
    set((state) => {
      if (Object.values(languages).includes(lang)) {
        return { language: lang };
      }
    }),
}));
