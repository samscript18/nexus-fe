import { secrets } from "../constants/secrets.const";
import axios from "axios";

export const http = axios.create({
  baseURL: secrets.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
