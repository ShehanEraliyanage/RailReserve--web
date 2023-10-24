import axios from "axios";

import { baseURL } from "../config";

export const getTraveller = async () => {
  try {
    const { data } = await axios.get(baseURL + "travelerAuthenticate");
    return data;
  } catch (error) {
    console.log(error);
  }
};
