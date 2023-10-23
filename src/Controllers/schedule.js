import axios from "axios";

import { baseURL } from "../config";

export const getSchedule = async () => {
  try {
    const { data } = await axios.get(baseURL + "schedule");
    return data;
  } catch (error) {
    console.log(error);
  }
};
