import axios from "./api";

const HomeServiceData = {
  getData: async (url) => {
    const data  = await axios.get(`${url}`);
    return data;
  },
};

export default HomeServiceData;
