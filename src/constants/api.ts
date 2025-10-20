export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const API = {
  MEAL: `${API_URL}/meals`,
  BODYRECORDS: `${API_URL}/body-records`,
  HEALTH: `${API_URL}/health`,
};
