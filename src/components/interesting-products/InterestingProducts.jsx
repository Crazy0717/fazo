import "./InterestingProducts.scss";
// icons
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

const InterestingProducts = ({title}) => {
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
        <div className="boxes_box">
          <div className="boxes_box_top">
            <div className="box_top_image">
              <img src="/images/phone.png" alt="" />
            </div>

            <div className="box_top_price">
              <p> 7 250 000 сум/мес</p>
              <span>9 500 000 сум</span>
            </div>
            <div className="box_top_name">
              Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
            </div>
          </div>
          <div className="boxes_box_bottom">
            <div className="box_bottom_icons">
              <div className="icon">
                <FiShoppingCart />
              </div>
              <hr />
              <div className="icon">
                <FiHeart />
              </div>
              <hr />
              <div className="icon">
                <PiScales />
              </div>
            </div>
          </div>
        </div>
        <div className="boxes_box">
          <div className="boxes_box_top">
            <div className="box_top_image">
              <img src="/images/phone.png" alt="" />
            </div>

            <div className="box_top_price">
              <p> 7 250 000 сум/мес</p>
              <span>9 500 000 сум</span>
            </div>
            <div className="box_top_name">
              Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
            </div>
          </div>
          <div className="boxes_box_bottom">
            <div className="box_bottom_icons">
              <div className="icon">
                <FiShoppingCart />
              </div>
              <hr />
              <div className="icon">
                <FiHeart />
              </div>
              <hr />
              <div className="icon">
                <PiScales />
              </div>
            </div>
          </div>
        </div>
        <div className="boxes_box">
          <div className="boxes_box_top">
            <div className="box_top_image">
              <img src="/images/phone.png" alt="" />
            </div>

            <div className="box_top_price">
              <p> 7 250 000 сум/мес</p>
              <span>9 500 000 сум</span>
            </div>
            <div className="box_top_name">
              Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
            </div>
          </div>
          <div className="boxes_box_bottom">
            <div className="box_bottom_icons">
              <div className="icon">
                <FiShoppingCart />
              </div>
              <hr />
              <div className="icon">
                <FiHeart />
              </div>
              <hr />
              <div className="icon">
                <PiScales />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestingProducts;
