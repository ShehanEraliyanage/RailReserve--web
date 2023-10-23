import axios from "axios";

import { baseURL } from "../config";
export const getTrain = async () => {
  try {
    const { data } = await axios.get(baseURL + "train");
    console.log("🚀 ~ file: train.js:16 ~ getTrain ~ data:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
