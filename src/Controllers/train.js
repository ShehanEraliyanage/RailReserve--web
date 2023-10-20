import axios from "axios";

import { baseURL } from "../config";

export const getTrain = async () => {
  const { data } = await axios.get(baseURL + `train`);
  console.log("🚀 ~ file: train.js:8 ~ getTrain ~ data:", data);
  return data;
};
