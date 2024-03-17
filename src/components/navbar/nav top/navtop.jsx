import "./navtop.scss";
// icons
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navtop = () => {
  return (
    <div className="navtop">
      <div className="nav_top">
        <div className="nav_top_left">
          <div className="nav_top_left_address">
            <CiLocationOn className="locationIcon" />
            <p>Ташкент</p>
          </div>
          <div className="nav_top_left_category">
            <ul>
              <li>Наши магазины</li>
              <li>B2B продажи</li>
              <li>Покупка в рассрочку</li>
              <li>Способы оплаты</li>
              <li>Гарантия на товары</li>
            </ul>
          </div>
        </div>
        <div className="nav_top_right">
          <div className="nav_top_right_phoneNumber">
            <FiPhone />
            <p>+998 95 123 55 88</p>
          </div>
          <div className="nav_top_right_language">
            <select>
              <option value="">Рус</option>
              <option value="">Eng</option>
            </select>
          </div>
        </div>
      </div>
      <div className="nav_top_responsive">
        <div className="nav_top_responsive_logo">
          <Link to={"/"}>
            <img src="/images/logo (2).png" alt="" />
          </Link>
        </div>
        <div className="nav_top_responsive_right">
          <div className="nav_top_responsive_right_number">
            <FiPhone />
            <p>+998 95 123 55 88</p>
          </div>
          <div className="nav_top_responsive_right_address">
            <CiLocationOn className="locationIcon" />
            <p>Ташкент</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
