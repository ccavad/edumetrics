import axios from "axios";
import { EDU_URL } from "./constants";

export const getCompanyData = async (lang = "aze") => {
  const url = EDU_URL + `/home/${lang}`;
  return axios(url);
};

export const addUser = async (body) => {
  const url = EDU_URL + "/addUser";
  return axios.post(url, body);
};

export const accessToken = async (body) => {
  const url = EDU_URL + "/accessToken";
  return axios.post(url, body);
};

export const checkEmail = async (email) => {
  const url = EDU_URL + `/checkEmail/${email}`;
  return axios(url);
};

export const checkUsername = async (username) => {
  const url = EDU_URL + `/checkUsername/${username}`;
  return axios(url);
};

export const getTopics = async () => {
  const url = EDU_URL + "/getTopics";
  return axios(url);
};

export const getTopTopics = async () => {
  const url = EDU_URL + "/getTopTopics";
  return axios(url);
};
