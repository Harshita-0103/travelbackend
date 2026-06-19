import axios from "axios";

const api = axios.create({
 baseURL: "https://travelbackend-n5db.onrender.com"
});
export default api;
