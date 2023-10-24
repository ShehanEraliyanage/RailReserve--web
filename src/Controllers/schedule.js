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

export const addSchedule = async (details) => {
  try {
    const { data } = await axios.post(baseURL + "schedule", details);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSchedules = async (id) => {
  try {
    const newvalu = id;
    const { data } = await axios.delete(baseURL + "schedule/" + newvalu);
    return data;
  } catch (error) {
    console.log(error);
  }
};
