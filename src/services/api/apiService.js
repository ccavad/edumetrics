import axios from "axios";
import { EDU_URL } from "./constants";
import { languages } from "../../utils/statics/constants";
import { useAuthStore } from "../../store/useAuthStore";

const token = useAuthStore.getState().token;

export const getCompanyData = async (lang = languages["aze"]) => {
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

export const getExamTypes = async () => {
  const url = EDU_URL + "/examTypes";
  return axios(url);
};

export const getExams = async () => {
  const url = EDU_URL + "/getExams";
  return axios.post(url, {
    headers: {
      Token: token,
    },
  });
};

export const getExamDetail = async (id) => {
  const url = EDU_URL + `/getExamDetail/${id}`;
  console.log("token", token);
  return axios(url, {
    headers: {
      Token: JSON.parse(localStorage.getItem("notSafeAuthToken")) || token,
    },
  });
};
