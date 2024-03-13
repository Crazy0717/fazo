import axios from "./api";

const ServiceData = {
  getData: async (url , type) => {
    const data = await axios.get(`${url}` );
    return data;
  },
};

export default ServiceData;
