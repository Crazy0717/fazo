import { useState } from "react"
import "./Login.scss"
// icons
import { LuLock } from "react-icons/lu"
import { Link, useNavigate } from "react-router-dom"
import { TbUserEdit } from "react-icons/tb"
//
import authService from "../../service/auth"
import { AuthInput } from "../../ui"
import { useDispatch, useSelector } from "react-redux"
import {
  authUserError,
  authUserStart,
  authUserSuccess,
} from "../../slices/auth"
import { setItem } from "../../helpers/persistance-storage"
import { ToastContainer, Zoom, toast } from "react-toastify"

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth)
  const [userName, setUserName] = useState()
  const [userPassword, setUserPasword] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const notifyError = (text) => toast.error(text)

  const getUser = async () => {
    try {
      const response = await authService.getUser()
      dispatch(authUserSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(authUserStart())
    const user = {
      username: userName,
      password: userPassword,
    }

    try {
      const response = await authService.loginUser(user)
      setItem("token", response.data.access_token)
      getUser()
      navigate("/")
      console.log(response)
    } catch (error) {
      dispatch(authUserError(error))
      notifyError(error.request.response)
      console.log(error.request.response)
    }
  }

  return (
    <div className="login">
      <ToastContainer stacked transition={Zoom} />
      <div className="box">
        <div className="title">
          <Link to={"/"}>
            <img src="./images/logo (2).png" alt="" />
          </Link>
          <h2>Войдите в свою учетную запись</h2>
        </div>
        <form id="form" onSubmit={handleSubmit}>
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
            password={true}
          />
        </form>
        <div className="buttons">
          <Link to={"/sign"}>
            <button>Зарегистрироваться</button>
          </Link>
          <button form="form" type="submit">
            {isLoading ? "Загрузка..." : "Войти"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
