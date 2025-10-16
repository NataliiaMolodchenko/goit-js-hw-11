import axios from "axios";

const API_KEY = "52793899-4a5f0ec6d72e6751efee977ec";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
