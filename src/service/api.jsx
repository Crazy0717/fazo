import axios from "axios"
import { getItem } from "../helpers/persistance-storage"

axios.defaults.baseURL = "http://127.0.0.1:8000"
// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

axios.interceptors.request.use((config) => {
  const token = getItem("token")
  const authorization = token ? `Bearer ${token}` : ""
  config.headers.Authorization = authorization
  return config
})


export default axios
