import "./InterestingProducts.scss"
// icons
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { PiScales } from "react-icons/pi"
import { IoIosArrowRoundForward } from "react-icons/io"
import { Box } from "../../ui"

const InterestingProducts = ({ title }) => {
  return (
    <div className="interesting_products">
      <div className="interesting_products_top">
        <h2>{title}</h2>
        <div className="boxes_top_seeAll">
          Посмотреть все
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="interesting_products_boxes">
        <Box
          title={"Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite"}
          price={"7 250 000 сум/мес"}
          discount_price={"9 500 000"}
        />
        <Box
          title={"Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite"}
          price={"7 250 000 сум/мес"}
          discount_price={"9 500 000"}
        />
        <Box
          title={"Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite"}
          price={"7 250 000 сум/мес"}
          discount_price={"9 500 000"}
        />
      </div>
    </div>
  )
}

export default InterestingProducts
