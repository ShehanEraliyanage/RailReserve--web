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
  console.log(details);
  try {
    const { data } = await axios.post(baseURL + "reservation", details);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReservation = async (id) => {
  console.log("🚀 ~ file: reservation.js:25 ~ deleteReservation ~ id:", id);
  try {
    const newvalu = id;
    const { data } = await axios.delete(baseURL + "reservation/" + newvalu);
    return data;
  } catch (error) {
    console.log(error);
  }
};
