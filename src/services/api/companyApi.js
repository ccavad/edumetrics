import axios from "axios";
import { EDU_URL } from "./constants";

export const getCompanyData = async () => {
  const url = EDU_URL + "/json";
  return axios(url);
};
