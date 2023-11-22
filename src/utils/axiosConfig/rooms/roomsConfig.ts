import { BACKEND_URL } from "@constants/env/env";

export const roomsConfig = {
  method: "get",
  url: `${BACKEND_URL}/rooms`,
  headers: {
    "Content-Type": "application/json",
  },
};
