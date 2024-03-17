import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.153:8765";
// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

export default axios;
