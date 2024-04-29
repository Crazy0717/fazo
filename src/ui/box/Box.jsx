import "./Box.scss"
// icons
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { IoCloseOutline } from "react-icons/io5"
import { PiScales } from "react-icons/pi"
import { useDispatch, useSelector } from "react-redux"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"
import { addFavorite } from "../../slices/notifications"
import { Link } from "react-router-dom"

const Box = ({ item, favorite, helper, setHelper }) => {
  const { isloading } = useSelector((state) => state.boxes)
  const { favoriteDeterminer } = useSelector((state) => state.notifications)
  const [imageUrl, setImageUrl] = useState()
  const dispatch = useDispatch()

  const getImage = async () => {
    try {
      const image = await ServiceData.getImages(item?.files[0].new_files)
      setImageUrl(image)
    } catch (error) {
      console.log("get image in box.js:" + error)
    }
  }

  const handleFavorite = async () => {
    try {
      if (favoriteDeterminer.includes(`${item?.id}${item?.category_id}`)) {
        handleRemoveFavorite()
      } else {
        const data = await ServiceData.postData(
          `likes/create_likes?source=${item?.name}&source_id=${item?.id}`
        )
        dispatch(addFavorite(`${item?.id}${item?.category_id}`))
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleRemoveFavorite = async () => {
    try {
      const data = await ServiceData.deleteData(
        `likes/delete_likes?delete_all=false&source=${item.name}&source_id=${item.id}`
      )
      setHelper(!helper)
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddCartBox = async (itemDetail) => {
    try {
      const data = await ServiceData.postData(
        `create_trades?source=${itemDetail.name}&source_id=${itemDetail.id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getImage()
  }, [])

  if (item) {
    return (
      <div className="box">
        <div className="box_top">
          <div
            className={isloading ? "box_top_image isLoading" : "box_top_image"}
          >
            <div
              onClick={handleRemoveFavorite}
              className={favorite ? "productDel active" : "productDel"}
            >
              <IoCloseOutline />
            </div>
            <Link to={`/product/${item.name}/${item.id}`}>
              <img loading="lazy" src={imageUrl} alt="" />
            </Link>
          </div>

          <div className="box_top_price">
            <p className={isloading ? "isLoading" : ""}>{item.price} сум</p>
            <span className={isloading ? "isLoading" : ""}>
              {item.discount_price} сум
            </span>
          </div>
          <div className="box_top_name isLoading">
            <Link to={`/product/${item.name}/${item.id}`}>
              <p className={isloading ? "isLoading" : ""}>{item.description}</p>
            </Link>
          </div>
        </div>
        <div className="box_bottom">
          <div className="box_bottom_icons">
            <div className="icon">
              <FiShoppingCart onClick={() => handleAddCartBox(item)} />
            </div>
            <hr />
            <div
              onClick={handleFavorite}
              style={{ display: favorite ? "none" : "flex" }}
              className={
                favoriteDeterminer.includes(`${item.id}${item.category_id}`)
                  ? "icon active"
                  : "icon"
              }
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
}

export default Box
