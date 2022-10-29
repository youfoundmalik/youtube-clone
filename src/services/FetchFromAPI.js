import { BASE_URL, options } from "../config/Axios";

const axios = require("axios");

export const FetchFromAPI = async (url, signal) => {
  try {
    const {data} = await axios.get(`${BASE_URL}${url}`, options, signal);
    return data
  } catch (error) {}
};
