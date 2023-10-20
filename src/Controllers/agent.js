import axios from "axios";

import { baseURL } from "../config";

export const addAgent = async (details) => {
  const { data } = await axios.post(
    baseURL + "api/v1/userAuthenticate/register",
    details
  );
  return data;
};
