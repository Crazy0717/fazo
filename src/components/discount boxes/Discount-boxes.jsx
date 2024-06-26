import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./Discount-boxes.scss";
import { PiScales } from "react-icons/pi";
import ServiceData from "../../service/service";
import { useEffect, useState } from "react";

const DiscountBoxes = () => {
  // const [discountBoxes, setDiscountBoxes] = useState();

  // const getData = async () => {
  //   try {
  //     const response = await ServiceData.getData("/Laptops/get_random_laptop");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://4bf1-45-150-26-213.ngrok-free.app/Laptops/get_random_laptop"
  //     );
  //     const daat = await response.json();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="discountBoxes">
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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
      <div className="discountBoxes_box">
        <div className="discountBoxes_box_top">
          <div className="box_top_image">
            <img src="./images/phone.png" alt="" />
          </div>
          <div className="top_image_procent">-3%</div>
          <div className="box_top_price">
            <span>1 373 000 сум</span>
            <p>1 304 000 сум</p>
          </div>
          <div className="box_top_name">
            Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite
          </div>
        </div>
        <div className="discountBoxes_box_bottom">
          <div className="disount-counter">
            <p>Предложение заканчивается через:</p>
            <div className="counter">
              <div className="count">
                <p>27</p>
                <span>ДНЕЙ</span>
              </div>
              <div className="count">
                <p>21</p>
                <span>ЧАСОВ</span>
              </div>
              <div className="count">
                <p>17</p>
                <span>МИНУТ</span>
              </div>
              <div className="count last-child">
                <p>47</p>
                <span>СЕКУНД</span>
              </div>
            </div>
          </div>
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

export default DiscountBoxes;
