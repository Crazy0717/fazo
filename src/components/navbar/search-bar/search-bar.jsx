import { Select, Space } from "antd";
import "./search-bar.scss";
// icons
import { HiMagnifyingGlass, HiOutlineMicrophone } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SearchBar = () => {
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
            options={[
              {
                value: "Моноблоки",
                label: "Моноблоки",
              },
              {
                value: "Телефоны, планшеты",
                label: "Телефоны, планшеты",
              },
              {
                value: "Ноутбуки",
                label: "Ноутбуки",
              },
              {
                value: "Комплектующие",
                label: "Комплектующие",
              },
            ]}
          />
        </Space>
        <input type="text" placeholder="Телефоны и бытовая" />
        <HiOutlineMicrophone className="microphone" />
      </div>
      <button type="submit" className="searchBar_right">
        <HiMagnifyingGlass className="magnify-icon" />
        <p>Поиск</p>
      </button>
    </form>
  );
};

export default SearchBar;
