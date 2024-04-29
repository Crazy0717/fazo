import "./Navbar.scss"
// icons
import {
  FiArrowLeft,
  FiChevronRight,
  FiHeart,
  FiPhone,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi"
import { PiScales } from "react-icons/pi"
import { HiBars3 } from "react-icons/hi2"
import {
  IoAddCircleOutline,
  IoCloseOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5"
import { LuBookMarked } from "react-icons/lu"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { FaMoneyBills } from "react-icons/fa6"
import { BiWallet } from "react-icons/bi"
import { IoIosList } from "react-icons/io"
// components
import SearchBar from "./search-bar/search-bar"
import HoverDropdown from "./hover-dropdown/hover-dropdown"
import Navtop from "./nav top/navtop"
//
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  disableNavBarsBlock,
  disableNavCategoryResBlock,
  enableNavBarsBlock,
  enableNavCategoryResBlock,
} from "../../slices/transparent-black-background"
import { categoryThemes, categoryThemesInside } from "../../data/category"
import { Link } from "react-router-dom"
import ServiceData from "../../service/service"
import { getItem } from "../../helpers/persistance-storage"
import authService from "../../service/auth"
import { authUserSuccess } from "../../slices/auth"

const Navbar = () => {
  const { navBarsBlockState, categoryBlockResState } = useSelector(
    (state) => state.background
  )
  const { user, loggedIn } = useSelector((state) => state.auth)
  const [categoryBlockState, setCategoryBlockState] = useState(false)
  const [categorySubmenuId, setCategorySubmenuId] = useState()
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()
  const token = getItem("token")

  const getApi = async () => {
    const { data } = await ServiceData.getData("categories/get_categories")
    setCategories(data)
  }

  const getUser = async () => {
    try {
      const response = await authService.getUser()
      dispatch(authUserSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      getUser()
    }
    getApi()
  }, [])

  return (
    <nav>
      {/* top of navbar */}
      <Navtop />
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
        <SearchBar categories={categories} />
        <div className="nav_center_icons">
          <div className="icon">
            <Link to={token ? "/cabinet" : "/login"}>
              <FiUser />
              <p id="user-icon">{token ? `${user?.name}` : "Войти"}</p>
            </Link>
          </div>
          <div className="icon">
            <Link to={"/compare"}>
              <PiScales />
              <p>Сравнение</p>
            </Link>
          </div>
          <div className="icon">
            <div className="tag">3</div>
            <Link to={"/favorite"}>
              <FiHeart />
              <p>Избранное</p>
            </Link>
          </div>
          <div className="icon">
          <div className="tag two">3</div>
            <Link to={"/purchase"}>
              <FiShoppingCart />
              <p>Корзина</p>
            </Link>
          </div>
          <div className={user?.role == "admin" ? "icon" : "icon hidden"}>
            <Link to={"/admin/dashboard"}>
              <IoAddCircleOutline />
              <p>Админ</p>
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
        <div
          style={{ display: loggedIn ? "none" : "" }}
          className="nav_center_bars_block_userPart"
        >
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
            setCategoryBlockState(!categoryBlockState)
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
          {categories.map((item) => (
            <Link key={item.id} to={`/category${item.link}`}>
              <li>{item.name}</li>
            </Link>
          ))}
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
        {/* <ul>
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
        </ul> */}
        {/* deleteFromProject */}
        <ul>
          {categories &&
            categories.map((item) => (
              <Link
                onClick={() => setCategoryBlockState(false)}
                key={item.id}
                to={`/category${item.link}`}
              >
                {item.name}
              </Link>
            ))}
        </ul>
        <HoverDropdown categorySubmenuId={categorySubmenuId} />
      </div>
      {/* bottom_category_block_responsive */}
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
  )
}

export default Navbar
