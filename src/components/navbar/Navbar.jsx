import "./Navbar.scss";
// icons
import { CiLocationOn } from "react-icons/ci";
import {
  FiArrowLeft,
  FiChevronRight,
  FiHeart,
  FiPhone,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { PiScales } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { BiWallet } from "react-icons/bi";
import { IoIosList } from "react-icons/io";
// components
import SearchBar from "./search-bar/search-bar";
import HoverDropdown from "./hover-dropdown/hover-dropdown";
//
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  disableNavBarsBlock,
  disableNavCategoryResBlock,
  enableNavBarsBlock,
  enableNavCategoryResBlock,
} from "../../slices/transparent-black-background";
import { categoryThemes, categoryThemesInside } from "../../data/category";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navBarsBlockState, categoryBlockResState } = useSelector(
    (state) => state.background
  );
  const [categoryBlockState, setCategoryBlockState] = useState(false);
  const [categorySubmenuId, setCategorySubmenuId] = useState();
  const dispatch = useDispatch();

  return (
    <nav>
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

      <div className="nav_center">
        <div className="nav_center_logo">
          <Link to={"/"}>
            <img src="/images/logo (2).png" alt="" />
          </Link>
        </div>
        <HiBars3
          onClick={() => dispatch(enableNavBarsBlock())}
          className="bars-mobile"
        />
        <SearchBar />
        <div className="nav_center_icons">
          <div className="icon">
            <Link to={"/login"}>
              <FiUser />
              <p>Войти</p>
            </Link>
          </div>
          <div className="icon">
            <Link to={"/compare"}>
              <PiScales />
              <p>Сравнение</p>
            </Link>
          </div>
          <div className="icon">
            <Link to={"/favorite"}>
              <FiHeart />
              <p>Избранное</p>
            </Link>
          </div>
          <div className="icon">
            <Link to={"/purchase"}>
              <FiShoppingCart />
              <p>Корзина</p>
            </Link>
          </div>
        </div>
      </div>
      {/* nav_center_bars_block */}
      <div
        className={
          navBarsBlockState
            ? "nav_center_bars_block active"
            : "nav_center_bars_block"
        }
      >
        <div className="nav_center_bars_block_top">
          <div className="bars_block_top_logo">
            <img src="/images/logo (2).png" alt="" />
          </div>
          <div
            onClick={() => dispatch(disableNavBarsBlock())}
            className="bars_block_top_closeButton"
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="nav_center_bars_block_userPart">
          <div className="block_userPart_logIn">
            <Link to={"/login"}>
              <FiUser />
              <p>Войти</p>
            </Link>
          </div>
          <div className="block_userPart_signIn">
            <p>Регистрация</p>
          </div>
        </div>
        <ul>
          <li>
            <LuBookMarked />
            <p>Наши магазины</p>
          </li>
          <li>
            <MdOutlineCurrencyExchange />
            <p>B2B продажи</p>
          </li>
          <li>
            <FaMoneyBills />
            <p>Покупка в рассрочку</p>
          </li>
          <li>
            <BiWallet />
            <p>Способы оплаты</p>
          </li>
          <li>
            <IoShieldCheckmarkOutline />
            <p>Гарантия на товары</p>
          </li>
        </ul>
        <div className="nav_center_bars_block_language">
          <p className="lang active">Рус</p>
          <p className="lang">Узб</p>
        </div>
        <div className="nav_center_bars_block_phoneNumber">
          <FiPhone />
          <p>+998 95 123 55 88</p>
        </div>
      </div>

      <div className="nav_bottom">
        <div
          onClick={() => {
            setCategoryBlockState(!categoryBlockState);
          }}
          className="nav_bottom_category"
        >
          <IoIosList />
          <h3>Категории</h3>
        </div>

        <div
          onClick={() => dispatch(enableNavCategoryResBlock())}
          className="nav_bottom_category response"
        >
          <IoIosList />
          <h3>Категории</h3>
        </div>

        <ul>
          <Link to={"/category/slug"}>
            <li>Наши магазины</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Моноблоки</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Телефоны, планшеты</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Ноутбуки</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Комплектующие</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Сетевое оборудование</li>
          </Link>
          <Link to={"/category/slug"}>
            <li>Оргтехника</li>
          </Link>
        </ul>
      </div>
      {/* bottom_category_block */}
      <div
        className={
          categoryBlockState
            ? "bottom_category_block active"
            : "bottom_category_block"
        }
      >
        <ul>
          {categoryThemes.map((item) => (
            <li
              onMouseEnter={() => setCategorySubmenuId(item.id)}
              className={categorySubmenuId === item.id ? "onhover" : ""}
              key={item.id}
            >
              <div className="left_part">
                <item.icon />
                <p>{item.name}</p>
              </div>

              <FiChevronRight />
            </li>
          ))}
        </ul>
        <HoverDropdown categorySubmenuId={categorySubmenuId} />
      </div>
      {/* responsive */}
      <div
        className={
          categoryBlockResState
            ? "bottom_category_block_responsive active"
            : "bottom_category_block_responsive"
        }
      >
        <div className="bottom_category_block_responsive_top ">
          <div className="category_block_top_logo">
            <img src="./images/logo (2).png" alt="" />
          </div>
          <div
            onClick={() => dispatch(disableNavCategoryResBlock())}
            className="category_block_top_closeButton"
          >
            <IoCloseOutline />
          </div>
        </div>
        <ul>
          {categoryThemes.map((item) => (
            <li
              onClick={() => setCategorySubmenuId(item.id)}
              className={categorySubmenuId === item.id ? "onhover" : ""}
              key={item.id}
            >
              <div className="left_part">
                <item.icon />
                <p>{item.name}</p>
              </div>

              <FiChevronRight />
            </li>
          ))}
          {/* bottom_category_block_inside */}
          {categoryThemesInside
            .filter((item) => categorySubmenuId == item.id)
            .map((item) => (
              <div className="bottom_category_block_inside" key={item.id}>
                <div className="block_inside_top">
                  <FiArrowLeft onClick={() => setCategorySubmenuId(null)} />
                  <h3>{item.name}</h3>
                </div>
                <ul>
                  {item.listCategoryNames.map((submenuItems) => (
                    <li key={submenuItems.id}>{submenuItems.subname}</li>
                  ))}
                </ul>
              </div>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
