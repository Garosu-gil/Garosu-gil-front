import axios from "axios";

const requestApi = axios.create({ baseURL: "http://13.125.225.199:8888" });

export default requestApi;
