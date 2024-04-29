import { Select, Space } from "antd"
import "./search-bar.scss"
// icons
import { HiMagnifyingGlass, HiOutlineMicrophone } from "react-icons/hi2"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchBar = ({ categories }) => {
  const [searchWord, setSearchWord] = useState()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/${searchWord.trim()}`)
  }

  const handleChange = (e) => {
    navigate(`/category${e}`)
  }

  return (
    <form onSubmit={handleSearch} className="searchBar">
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
        <input
          onChange={(e) => setSearchWord(e.target.value)}
          type="text"
          placeholder="Телефоны и бытовая"
          required
        />
        <HiOutlineMicrophone className="microphone" />
      </div>
      <button className="searchBar_right">
        <HiMagnifyingGlass className="magnify-icon" />
        <p>Поиск</p>
      </button>
    </form>
  )
}

export default SearchBar
