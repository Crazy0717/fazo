import { useState } from "react";
import "./SignUp.scss";
// icons
import { LuLock } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
//
import { AuthInput } from "../../ui";
import authService from "../../service/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [userPhoneNumber, setUserPhoneNumber] = useState();
  const [userPassword, setUserPasword] = useState();
  const navigate = useNavigate();

  const user = {
    name: name,
    username: userName,
    password: userPassword,
    phone_number: userPhoneNumber,
  };
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.registerUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp">
      <div className="box">
        <div className="title">
          <Link to={"/"}>
            <img src="./images/logo (2).png" alt="" />
          </Link>
          <h2>Создайте свою учетную запись</h2>
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <AuthInput
            state={name}
            setState={setName}
            title={"имя"}
            icon={<MdDriveFileRenameOutline />}
            id={"name"}
          />
          <AuthInput
            state={userName}
            setState={setUserName}
            title={"имя пользователя"}
            icon={<TbUserEdit />}
            id={"userName"}
          />
          <AuthInput
            state={userPassword}
            setState={setUserPasword}
            title={"Пароль"}
            icon={<LuLock />}
            id={"password"}
          />
          <AuthInput
            state={userPhoneNumber}
            setState={setUserPhoneNumber}
            title={"Номер телефона"}
            icon={<FiPhone />}
            id={"phoneNumber"}
            type={"number"}
          />
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
