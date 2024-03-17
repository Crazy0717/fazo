import axios from "./api";

const ServiceData = {
  getData: async (url) => {
    const data = await axios.get(`/${url}`);
    return data;
  },
};

export default ServiceData;
