import { useDispatch, useSelector } from "react-redux"
import "./LogoutModal.scss"
import { useNavigate } from "react-router-dom"
import { PiSmileySadLight } from "react-icons/pi"
import {
  disablEveryThing,
  disableLogoutModal,
} from "../../slices/transparent-black-background"
import { logoutUser } from "../../slices/auth"
import { removeItem } from "../../helpers/persistance-storage"

const LogoutModal = () => {
  const { logoutModal } = useSelector((state) => state.background)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    removeItem("token")
    dispatch(disablEveryThing())
    navigate("/")
  }

  return (
    <div className={logoutModal ? "logoutModal active" : "logoutModal"}>
      <PiSmileySadLight id="icon" />
      <p>Вы уверены, что хотите выйти из системы?</p>
      <div className="buttons">
        <button onClick={handleLogout}>Подтверждать</button>
        <button onClick={() => dispatch(disableLogoutModal())}>Отмена</button>
      </div>
    </div>
  )
}

export default LogoutModal
