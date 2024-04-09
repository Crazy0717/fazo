import "./RecommendBoxes.scss"
import Boxes from "../boxes/Boxes"
import { useEffect, useState } from "react"
import ServiceData from "../../service/service"

const RecommendBoxes = () => {
  const [recommendProducts, setRecommendProducts] = useState()

  useEffect(() => {
    getRecommendProducts()
  }, [])

  const getRecommendProducts = async () => {
    try {
      const response = await ServiceData.getData("/main/get_cheap_product")
      setRecommendProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="recommendBoxes">
      <Boxes boxesData={recommendProducts?.data.slice(0, 6)} />
    </div>
  )
}

export default RecommendBoxes
