import "./Asidebar.scss"
import { MdOutlineDataThresholding, MdOutlineLibraryAdd } from "react-icons/md"
import { NavLink } from "react-router-dom"

const Asidebar = () => {
  return (
    <aside >
      <NavLink to={"/admin/dashboard"} className="tab">
        <MdOutlineDataThresholding /> Dashboard
      </NavLink>
      <NavLink to={"/admin/create/laptop"} className="tab">
        <MdOutlineLibraryAdd /> Create Laptop
      </NavLink>
      <NavLink to={"/admin/create/phone"} className="tab">
        <MdOutlineLibraryAdd /> Create Phone
      </NavLink>
      <NavLink to={"/admin/create/tablet"} className="tab">
        <MdOutlineLibraryAdd /> Create Tablet
      </NavLink>
    </aside>
  )
}

export default Asidebar
