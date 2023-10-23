import axios from "axios";

import { baseURL } from "../config";

export const getReservation = async () => {
  const config = {
    headers: {
      "Content-type": "application/json charset=utf-8 ",
      "accept": "*/*",
      "server": "Kestrel",
      "timing-allow-origin": "*",
    },
  };
  try {
    const { data } = await axios.get(
      "http://localhost:7087/api/v1/reservation",
      config
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
