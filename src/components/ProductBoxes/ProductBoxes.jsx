import "./ProductBoxes.scss"
// icons
import { Box } from "../../ui"
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
      const response = await ServiceData.getData("/main/get_cheap_product")
      setCheapProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="productBoxes">
      <Boxes boxesData={cheapProducts?.data} />
      {/* <Box
        title={"Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite"}
        price={"7 250 000 сум/мес"}
        discount_price={"9 500 000 сум"}
      /> */}

    </div>
  )
}

export default ProductBoxes
