import axios from "axios";

import { baseURL } from "../config";
export const getTrain = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      "https://localhost:7087/api/v1/train",
      config
    );
    console.log("🚀 ~ file: train.js:16 ~ getTrain ~ data:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getReservation = async () => {
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   try {
//     const { data } = await axios.get(
//       "https://localhost:7087/api/v1/reservation",
//       config
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
