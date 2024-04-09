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
  getImages: async (fileName) => {
    try {
      const cartImage = await fetch(`http://127.0.0.1:8000/files/${fileName}`)
      const blob = await cartImage.blob()
      const imageObjectURL = URL.createObjectURL(blob)
      return imageObjectURL
    } catch (error) {
      console.log("error while get images" + error)
    }
  },
}

export default ServiceData
