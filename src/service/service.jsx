import axios from "./api"

const ServiceData = {
  getData: async (url) => {
    const data = await axios.get(url)
    return data
  },
  postData: async (url) => {
    const data = await axios.post(url)
    return data
  },
}

export default ServiceData
