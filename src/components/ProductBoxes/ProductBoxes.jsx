import "./ProductBoxes.scss"
// icons
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"
import Boxes from "../boxes/Boxes"

const ProductBoxes = () => {
  const [cheapProducts, setCheapProducts] = useState()

  useEffect(() => {
    getCheapProducts()
  }, [])

  const getCheapProducts = async () => {
    try {
      const response = await ServiceData.getData("main/get_cheap_product")
      setCheapProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(cheapProducts)

  return (
    <div className="productBoxes">
      <Boxes boxesData={cheapProducts?.data.slice(0, 8)} />
    </div>
  )
}

export default ProductBoxes
