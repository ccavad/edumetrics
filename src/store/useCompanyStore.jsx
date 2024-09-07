import { create } from "zustand";
import { languages } from "../utils/statics/constants";
import { getCompanyData } from "../services/api/apiService";

export const useCompanyStore = create((set, get) => ({
  companyData: {},
  setCompanyData: (data) => set({ companyData: data }),
  language: languages["aze"],
  setLanguage: (lang) =>
    set((state) => {
      if (Object.values(languages).includes(lang)) {
        return { language: lang };
      }
    }),
  initCompanyDataLoading: false,
  initCompanyData: async () => {
    set({ initDataLoading: true });
    try {
      const { data } = await getCompanyData();
      if (data) {
        set({ companyData: data, initDataLoading: false });
      }
    } catch (error) {
      console.error("getCompanyData error: ", error);
      set({ initDataLoading: false });
    }
  },
}));
