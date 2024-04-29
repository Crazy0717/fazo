import { useNavigate } from "react-router-dom"
import { Asidebar } from "../../components"
import "./Admin.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Admin = () => {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (user?.role === "user") {
  //     navigate("/")
  //   }
  // }, [])
  
  return (
    <div className="admin">
      <Asidebar />
      Dashboard
    </div>
  )
}

export default Admin
