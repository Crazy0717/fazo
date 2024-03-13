import { Boxes } from "../../components";
import "./Compare.scss";
// icons
import { IoIosArrowForward } from "react-icons/io";

const Compare = () => {
  return (
    <div className="compare">
      <div className="map">
        <p>
          Главная <IoIosArrowForward /> Сравнить
        </p>
      </div>
      <div className="content">
        <Boxes compare={true} />
        <div className="characteristics">
          <h2>Характеристики товара</h2>
          <div className="stages">
            <div className="stage">
              <span>Версия ОС</span>
              <div className="product-info">
                <p>Android 11</p>
                <p>Android 13</p>
                <p>Android 11</p>
                <p>Android 11</p>
              </div>
            </div>
            <div className="stage">
              <span>Версия ОС</span>
              <div className="product-info">
                <p>Android 11</p>
                <p>Android 11</p>
                <p>Android 11</p>
                <p>Android 11</p>
              </div>
            </div>
            <div className="stage">
              <span>Версия ОС</span>
              <div className="product-info">
                <p>Android 11</p>
                <p>Android 11</p>
                <p>Android 11</p>
                <p>Android 11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
