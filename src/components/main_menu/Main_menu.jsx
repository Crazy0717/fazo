import "./Main_menu.scss"
// icons
import { IoHomeOutline } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"
import { FaRegHeart, FaRegUser } from "react-icons/fa"
import { PiScales } from "react-icons/pi"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Main_menu = () => {
  const { user, loggedIn } = useSelector((state) => state.auth)

  return (
    <div className="media_menus">
      <div className="menu">
        <NavLink to={"/"}>
          <IoHomeOutline />
          <p>Главная</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/purchase"}>
          <FiShoppingCart className="icon" />
          <p>Корзина</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/favorite"}>
          <FaRegHeart className="icon" />
          <p>Избранное</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={loggedIn ? "/cabinet" : "/login"}>
          <FaRegUser className="icon" />
          <p id="user-icon">{loggedIn ? user.name : "Войти"}</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/compare"}>
          <PiScales className="icon" />
          <p>Сравнение</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Main_menu
