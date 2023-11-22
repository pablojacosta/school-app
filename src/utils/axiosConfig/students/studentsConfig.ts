import { BACKEND_URL } from "@constants/env/env";

export const studentsConfig = {
  method: "get",
  url: `${BACKEND_URL}/students`,
  headers: {
    "Content-Type": "application/json",
  },
};
