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
export const activeTraveller = async (id) => {
  try {
    const newvalu = id;
    const { data } = await axios.get(
      baseURL + "travelerAuthenticate/active/" + newvalu
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deactiveTraveller = async (id) => {
  try {
    const newvalu = id;
    const { data } = await axios.get(
      baseURL + "travelerAuthenticate/deactive/" + newvalu
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
