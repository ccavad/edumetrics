import { create } from "zustand";

export const useCompanyStore = create((set) => ({
  companyData: {},
  setCompanyData: (data) => set((state) => ({ companyData: data })),
}));
