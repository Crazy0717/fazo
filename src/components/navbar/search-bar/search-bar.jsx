import { Select, Space } from "antd"
import "./search-bar.scss"
// icons
import { HiMagnifyingGlass, HiOutlineMicrophone } from "react-icons/hi2"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const SearchBar = ({ categories }) => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    navigate(`/category${e}`)
  }

  return (
    <form className="searchBar">
      <div className="searchBar_left">
        <Space wrap>
          <Select
            defaultValue="Все категории"
            style={{
              width: "150px",
            }}
            suffixIcon={<MdOutlineKeyboardArrowDown />}
            variant="borderless"
            onChange={handleChange}
          >
            {categories.map((item) => (
              <Select.Option key={item.id} value={item.link}>
                <div className="select_option">{item.name}</div>
              </Select.Option>
            ))}
          </Select>
        </Space>
        <input type="text" placeholder="Телефоны и бытовая" />
        <HiOutlineMicrophone className="microphone" />
      </div>
      <button type="submit" className="searchBar_right">
        <HiMagnifyingGlass className="magnify-icon" />
        <p>Поиск</p>
      </button>
    </form>
  )
}

export default SearchBar
