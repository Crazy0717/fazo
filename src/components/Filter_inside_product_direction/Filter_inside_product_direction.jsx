import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdFilterListAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiScales } from "react-icons/pi";

import "./Filter_inside_product_direction.scss";
const Filter_inside_product_direction = () => {
  const [Heart, setHeart] = useState(false);

  return (
    <div className="Filter_inside_product_direction">
      <div className="Product_data">
        <div className="name">
          <h1>MacBook Pro 13 MXK32ZP/A Space Gray</h1>
        </div>
        <div className="priceAndCard">
          <p>
            16 559 000 cум <AiOutlineExclamationCircle />
          </p>
          <div className="Card">
            <FiShoppingCart />
            <hr />
            {Heart ? (
              <FaHeart color="red" onClick={() => setHeart(!Heart)} />
            ) : (
              <FaRegHeart onClick={() => setHeart(!Heart)} />
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
  );
};

export default Filter_inside_product_direction;
