import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"; // Replace with your backend URL

export const listChallenges = async () => {
  try {
    const response = await axios.get(`${BASE_URL}challenges/`);
    return response.data;
  } catch (error) {
    console.error("Error listing challenges:", error);
    throw error;
  }
};