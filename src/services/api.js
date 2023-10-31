import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-740x.onrender.com'
  // baseURL: 'http://localhost:3333'
})