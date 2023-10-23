import axios from "axios";

import { baseURL } from "../config";

export const getReservation = async () => {
  try {
    const { data } = await axios.get(baseURL + "reservation");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addReservation = async (details) => {
  try {
    const { data } = await axios.post(baseURL + "reservation", details);
    return data;
  } catch (error) {
    console.log(error);
  }
};
