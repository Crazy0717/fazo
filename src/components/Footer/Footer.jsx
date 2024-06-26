import "./Footer.scss"

import { Link, NavLink } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io"
import { FaYoutube } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"

const Footer = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const { data } = await ServiceData.getData("categories/get_categories")
    setCategories(data)
  }

  return (
    <div className="Footer">
      <div className="cantact">
        <div className="logo">
          <Link to={"/"}>
            <img src="/images/FooterLogo.png" alt="" />
          </Link>
        </div>
        <p>График работы колл-центра Понедельник - Суббота: 9:00–18:00</p>
        <p>
          Колл-центр: <br /> + 998 (71) 205-93-93
        </p>
        <div className="networks">
          <div className="radio">
            {" "}
            <FaTelegramPlane />
          </div>
          <div className="radio">
            <IoLogoInstagram />
          </div>
          <div className="radio">
            <FaFacebook />
          </div>
          <div className="radio">
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="data">
        <div className="cotegoty menu">
          <h3>Категории</h3>
          <ul>
            {categories &&
              categories.map((item) => (
                <NavLink key={item.id} to={`/category${item.link}`}>
                  <li>{item.name}</li>
                </NavLink>
              ))}
          </ul>
        </div>
        <div className="all menu">
          <h3>Общее</h3>
          <ul>
            <NavLink>
              <li>Новости</li>
            </NavLink>
            <NavLink>
              <li>О нас</li>
            </NavLink>
            <NavLink>
              <li>Наши магазины</li>
            </NavLink>
            <NavLink>
              <li>Политика конфиденциальности</li>
            </NavLink>
            <NavLink>
              <li>Правила программы лояльности</li>
            </NavLink>
            <NavLink>
              <li>Контакты</li>
            </NavLink>
          </ul>
        </div>
        <div className="For buyers menu">
          <h3>Покупателям</h3>
          <ul>
            <NavLink>
              <li>Покупка в рассрочку</li>
            </NavLink>
            <NavLink>
              <li>Доставка и оплата</li>
            </NavLink>
            <NavLink>
              <li>Правила покупок с cashback</li>
            </NavLink>
            <NavLink>
              <li>Возврат / Обмен</li>
            </NavLink>
            <NavLink>
              <li>Правила пользования купонами</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
