import "./Box.scss"
// icons
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { IoCloseOutline } from "react-icons/io5"
import { PiScales } from "react-icons/pi"
import { useSelector } from "react-redux"
import ServiceData from "../../service/service"

const Box = ({ item, favorite }) => {
  const { isloading } = useSelector((state) => state.boxes)

  // category_id
  // name
  const handleFavorite = async () => {
    try {
      const data = await ServiceData.postData(
        `likes/create_likes?source=${item.name}&source_id=${item.category_id}`
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddCartBox = async (itemDetail) => {
    try {
      const data = await ServiceData.postData(
        `create_trades?source=${itemDetail.name}&source_id=${itemDetail.category_id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="box">
      <div className="box_top">
        <div
          className={isloading ? "box_top_image isLoading" : "box_top_image"}
        >
          <div className={favorite ? "productDel active" : "productDel"}>
            <IoCloseOutline />
          </div>
          <img loading="lazy" src="/images/phone.png" alt="" />
        </div>

        <div className="box_top_price">
          <p className={isloading ? "isLoading" : ""}>{item?.price} сум</p>
          <span className={isloading ? "isLoading" : ""}>
            {item?.discount_price} сум
          </span>
        </div>
        <div className="box_top_name isLoading">
          <p className={isloading ? "isLoading" : ""}>{item?.description}</p>
        </div>
      </div>
      <div className="box_bottom">
        <div className="box_bottom_icons">
          <div className="icon">
            <FiShoppingCart onClick={() => handleAddCartBox(item)} />
          </div>
          <hr />
          <div
            onClick={() => handleFavorite(item)}
            style={{ display: favorite ? "none" : "flex" }}
            className="icon"
          >
            <FiHeart />
          </div>
          <hr />
          <div className="icon">
            <PiScales />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
