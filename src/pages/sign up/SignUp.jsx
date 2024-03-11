import "./SignUp.scss";
// icons
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuLock } from "react-icons/lu";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="box">
        <div className="title">
          <Link to={"/"}>
            <img src="./images/logo (2).png" alt="" />
          </Link>
          <h2>Создайте свою учетную запись</h2>
        </div>
        <form id="form">
          <div className="content">
            <label className="sub_title" htmlFor="emailInput">
              <HiOutlineEnvelope />
              <p>Адрес электронной почты</p>
            </label>
            <div className="input">
              <input type="email" id="emailInput" required />
            </div>
          </div>
          <div className="content">
            <label className="sub_title" htmlFor="passwordInput">
              <LuLock />
              <p>Пароль</p>
            </label>
            <div className="input">
              <input type="password" id="passwordInput" required />
            </div>
          </div>
        </form>
        <div className="buttons">
          <Link to={"/login"}>
            <button>Войти</button>
          </Link>
          <button form="form" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
