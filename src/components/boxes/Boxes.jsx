import "./Boxes.scss";
// icons
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";

const Boxes = ({ width, favorite, compare }) => {
  return (
    <div style={{ width: width }} className="boxes">
      <div className="boxes_box">
        <div className="boxes_box_top">
          <div className="box_top_image isLoading">
            <div
              className={
                favorite || compare ? "productDel active" : "productDel"
              }
            >
              <IoCloseOutline />
            </div>
            <img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
              alt=""
            />
          </div>

          <div className="box_top_price">
            <p className="isLoading"> 7 250 000 сум/мес</p>
            <span className="isLoading">9 500 000 сум</span>
          </div>
          <div className="box_top_name">
            <p className="isLoading">
              Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
            </p>
          </div>
        </div>
        <div className="boxes_box_bottom">
          <div className="box_bottom_icons">
            <div className="icon">
              <FiShoppingCart />
            </div>
            <hr />
            <div style={{ display: favorite ? "none" : "" }} className="icon">
              <FiHeart />
            </div>
            <hr />
            <div style={{ display: compare ? "none" : "" }} className="icon">
              <PiScales />
            </div>
          </div>
        </div>
      </div>
      <div className="boxes_box">
        <div className="boxes_box_top">
          <div className="box_top_image">
            <div
              className={
                favorite || compare ? "productDel active" : "productDel"
              }
            >
              <IoCloseOutline />
            </div>
            <img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
              alt=""
            />
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
            <div style={{ display: favorite ? "none" : "" }} className="icon">
              <FiHeart />
            </div>
            <hr />
            <div style={{ display: compare ? "none" : "" }} className="icon">
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
  );
};

export default Boxes;
