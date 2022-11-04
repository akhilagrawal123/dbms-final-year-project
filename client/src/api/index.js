import axios from 'axios';

const config = {
    "Access-Control-Allow-Origin" : "",
    "Allow": "GET",
}
const API = axios.create({baseURL: "http://localhost:8000/"}, config);

export const FetchJobs = () => API.get("/jobs");