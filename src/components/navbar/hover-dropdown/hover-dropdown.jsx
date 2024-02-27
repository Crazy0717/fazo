import "./hover-dropdown.scss";
import { categoryThemesInside } from "../../../data/category";

const HoverDropdown = ({ categorySubmenuId }) => {
  return (
    <div className="bottom_category_block_sub-menu">
      {categoryThemesInside
        .filter((item) => categorySubmenuId == item.id)
        .map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <ul>
              {item.listCategoryNames.map((submenuItems) => (
                <li key={submenuItems.id}>{submenuItems.subname}</li>
              ))}
            </ul>
          </li>
        ))}
    </div>
  );
};

export default HoverDropdown;
