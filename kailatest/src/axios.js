import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8801/api/",
  withCredentials: true,
});

export const getUsers = async () => {
  const response = await makeRequest.get("/guest/")
  return response.data
}
