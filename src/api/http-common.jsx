import axios from "axios";


const BASE_URL = 'http://api.chuotgreen.com/api';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-type": "application/json"
  }
});
export const api = axios.create({
  baseURL: BASE_URL
})

export const getCategories = async () => {
  const response = await api.get('/categories')
  return response.data
}