import axios from "axios";

import { baseURL } from "../config";
export const getTrain = async () => {
  try {
    const { data } = await axios.get(baseURL + "train");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addTrain = async (details) => {
  try {
    const { data } = await axios.post(baseURL + "train", details);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrains = async (id) => {
  try {
    const newvalu = id;
    const { data } = await axios.delete(baseURL + "train/" + newvalu);
    return data;
  } catch (error) {
    console.log(error);
  }
};
