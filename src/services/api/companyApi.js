import axios from "axios";
import { EDU_URL } from "./constants";

export const getCompanyData = async () => {
  const url = EDU_URL + "/json";
  return axios(url);
};

export const registerUser = async (body, lang = "aze") => {
  const url = EDU_URL + `/register/${lang}`;
  return axios.post(url, body);
};

export const getTopics = async () => {
  const url = EDU_URL + "/getTopics";
  return axios(url);
};

export const getTopTopics = async () => {
  const url = EDU_URL + "/getTopTopics";
  return axios(url);
};
