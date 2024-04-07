import { useState } from "react"
import "./authInput.scss"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const AuthInput = ({
  title,
  type = "text",
  id,
  icon,
  state,
  setState,
  password,
}) => {
  const [isPassword, setIsPassword] = useState(password)

  return (
    <div className="parentInput">
      <label className="sub_title" htmlFor={id}>
        {icon}
        <p>{title}</p>
      </label>
      <div className="input">
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          type={isPassword ? "password" : "text"}
          id={id}
          required
        />
        <button
          onClick={() => setIsPassword(!isPassword)}
          type="button"
          className={password ? "show_password active" : "show_password"}
        >
          {isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
    </div>
  )
}

export default AuthInput
