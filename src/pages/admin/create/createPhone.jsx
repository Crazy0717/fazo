import "./create.scss"
import { Asidebar } from "../../../components"
import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AiOutlineUpload } from "react-icons/ai"
import ServiceData from "../../../service/service"
import axios from "axios"

const createPhone = () => {
  const user = useSelector((state) => state.auth)
  const [productImages, setProductImages] = useState([])
  const [productImagesObj, setProductImagesObj] = useState([])
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ discount_time: "2024-04-23" })

  const handleChange = (e, type = "text") => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "number" ? Number(value) : value,
    }))
  }

  const createProduct = async (e) => {
    e.preventDefault()
    try {
      const createResponse = await ServiceData.createData(
        `Phones/create_phones`,
        [formData]
      )
      const response = await ServiceData.getData(`Phones/get_phones`)
      putImages(response.data.data[0])
    } catch (error) {
      console.log("error in createProduct()" + error)
    }
  }

  const putImages = async (product) => {
    try {
      productImagesObj.forEach(async (imageObj) => {
        const imageFormData = new FormData()
        imageFormData.append("new_files", imageObj)
        const image = await axios.post(
          `files/create_file?source=phone&source_id=${product.id}`,
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      })
    } catch (error) {
      console.log("putImages " + error)
    }
  }

  const handleImage = (e) => {
    setProductImages([
      ...productImages,
      {
        blobLink: URL.createObjectURL(e.target.files[0]),
      },
    ])
    setProductImagesObj([...productImagesObj, e.target.files[0]])
  }

  if (user?.role === "user") {
    navigate("/")
  }

  return (
    <div className="create">
      <Asidebar />
      <div className="main">
        <h1>Create smartphone:</h1>
        <div className="image-stage">
          <label id="fileLabel" htmlFor="fileInput">
            <AiOutlineUpload id="icon" />
            Загрузит картину
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImage}
          />
          {productImages &&
            productImages.map((image, index) => (
              <img key={index} src={image.blobLink} alt="" />
            ))}
        </div>
        <form onSubmit={createProduct} className="inputs">
          <TextField
            id="name"
            name="description"
            label="Имя товара"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            name="brand"
            label="Бренд товара"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            name="model"
            label="Модель товара"
            onChange={handleChange}
            variant="outlined"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="weight"
            type="number"
            min={0}
            placeholder="Вес товара"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="count"
            type="number"
            min={0}
            placeholder="Количество товара"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="price"
            type="number"
            id="price"
            min={0}
            placeholder="Цена товара"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="year"
            type="number"
            id="row-two"
            min={0}
            placeholder="Дата изготовления товара"
            required
          />
          <TextField
            onChange={handleChange}
            name="country"
            id="row-two"
            label="Место изготовления товара"
            variant="outlined"
            required
          />
          <TextField
            onChange={handleChange}
            name="color"
            id="row-two"
            label="Цвет товара"
            variant="outlined"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="display"
            type="number"
            id="row-two"
            min={0}
            placeholder="Разрешение дисплея товара"
            required
          />

          <input
            onChange={(e) => handleChange(e, "number")}
            name="ram_size"
            type="number"
            id="row-two"
            min={0}
            placeholder="RAM"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="rom_size"
            type="number"
            id="row-two"
            min={0}
            placeholder="ROM"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="battery"
            type="number"
            id="row-two"
            min={0}
            placeholder="Батарея"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="discount"
            type="number"
            id="row-two"
            min={0}
            placeholder="Скидка"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="self_camera"
            type="number"
            id="row-two"
            min={0}
            placeholder="Передняя камера"
            required
          />
          <input
            onChange={(e) => handleChange(e, "number")}
            name="camera"
            type="number"
            id="row-two"
            min={0}
            placeholder="Задняя камера"
            required
          />
          <Button type="submit">Создать</Button>
        </form>
      </div>
    </div>
  )
}

export default createPhone
