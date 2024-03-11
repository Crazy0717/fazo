import "./ProductInside.scss";
// icons
import { FiChevronRight } from "react-icons/fi";
import {
  AStarter,
  Filter_inside_product_direction,
  InterestingProducts,
  Product_About,
} from "../../components";

const ProductInside = () => {
  return (
    <div className="productInside">
      <div className="path">
        <h3>
          Главная <FiChevronRight /> Телефоны, планшеты <FiChevronRight />{" "}
          Телефоны и гаджеты
        </h3>
      </div>
      <div className="Filter_inside">
        <div className="Slider"></div>
        <div className="right">
          <div className="Aboute">
            <Filter_inside_product_direction />
            <Product_About />
          </div>
          <div className="AStarter">
            <AStarter />
          </div>
          <InterestingProducts title={"Недавно просмотренные"}/>
        </div>
      </div>
    </div>
  );
};

export default ProductInside;
