import React, { useState } from "react"
import { FaRegHeart } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { RiWechatLine } from "react-icons/ri"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { PiScales } from "react-icons/pi"

import "./Filter_inside_product_direction.scss"
import ServiceData from "../../service/service"
const Filter_inside_product_direction = ({ item }) => {
  const [Heart, setHeart] = useState(false)

  const handleFavorite = async () => {
    try {
      const data = await ServiceData.postData(
        `likes/create_likes?source=${item?.name}&source_id=${item?.id}`
      )
    } catch (error) {
      console.log(error)
    }
  }
  const handleRemoveFavorite = async () => {
    try {
      const data = await ServiceData.deleteData(
        `likes/delete_likes?delete_all=false&source=${item.name}&source_id=${item.id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddCartBox = async () => {
    try {
      const data = await ServiceData.postData(
        `trade/create_trades?source=${item.name}&source_id=${item.id}`
      )
    } catch (error) {
      console.log(error)
    }
  }

  if (item) {
    return (
      <div className="Filter_inside_product_direction">
        <div className="Product_data">
          <div className="name">
            <h1>{item.description}</h1>
          </div>
          <div className="priceAndCard">
            <p>
              {item.price} сум <AiOutlineExclamationCircle />
            </p>
            <div className="Card">
              <FiShoppingCart onClick={handleAddCartBox} />
              <hr />
              {Heart ? (
                <FaHeart
                  color="red"
                  onClick={() => {
                    setHeart(!Heart), handleRemoveFavorite()
                  }}
                />
              ) : (
                <FaRegHeart
                  onClick={() => {
                    setHeart(!Heart), handleFavorite()
                  }}
                />
              )}

              <hr />
              <PiScales />
            </div>
          </div>
          <div className="text">
            <p>
              <RiWechatLine /> VIP скидки для VIP клиентов
            </p>
          </div>
          <div className="buttons">
            <button>Купить сейчас</button>
            <button>Купить в рассрочку сейчас</button>
          </div>

          <div className="data">
            <div className="contract">
              <p>Название для договора</p>
            </div>
            <div className="name">
              <p>MacBook Pro 13 MXK32ZP/A Space </p>
              <p>Gray Full HD 1920x1080 IPS / Core™</p>
              <p> i7-1165G7 / 8GB RAM / 256GB SSD</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter_inside_product_direction
