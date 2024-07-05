import "./InterestingProducts.scss"
import { Box } from "../../ui"

const InterestingProducts = ({ title, data }) => {
  return (
    <div className="interesting_products">
      <div className="interesting_products_top">
        <h2>{title}</h2>
      </div>
      <div className="interesting_products_boxes">
        {data && data.map((item) => <Box item={item} />)}
      </div>
    </div>
  )
}

export default InterestingProducts
