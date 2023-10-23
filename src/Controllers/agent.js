import axios from "axios";

import { baseURL } from "../config";

export const addAgent = async (details) => {
  try {
    const { data } = await axios.post(baseURL + `userAuthenticate/register`, {
      headers: {
        "Content-Type": "application/json",
        charset: "utf-8",
      },
    });
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
