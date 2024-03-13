import "./Main_menu.scss";
// icons
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiScales } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Main_menu = () => {
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
        <NavLink to={"/login"}>
          <FaRegUser className="icon" />
          <p>Войти</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/compare"}>
          <PiScales className="icon" />
          <p>Сравнение</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Main_menu;
