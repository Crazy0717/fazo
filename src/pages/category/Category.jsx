import "./Category.scss";
// icons
import { FiChevronRight } from "react-icons/fi";
//
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Checkbox, InputNumber, Slider } from "antd";
import {
  Boxes,
  Category_Accordion,
  InterestingProducts,
} from "../../components";

const Category = () => {
  return (
    <div className="category">
      <div className="content">
        <div className="path">
          <h3>
            Главная <FiChevronRight /> Телефоны, планшеты <FiChevronRight />{" "}
            Телефоны и гаджеты
          </h3>
        </div>
        <div className="category_main">
          <div className="sidebar">
            <Accordion>
              <AccordionSummary
                expandIcon={<FiChevronRight id="icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Цена (cум)
              </AccordionSummary>
              <AccordionDetails>
                <InputNumber
                  min={0}
                  placeholder="от 300 000"
                  type="number"
                  style={{
                    width: "50%",
                    borderRadius: "5px 0 0 5px",
                  }}
                />
                <InputNumber
                  min={0}
                  placeholder="до 103 300 000"
                  type="number"
                  style={{
                    width: "50%",
                    borderRadius: "0 5px 5px 0",
                  }}
                />
                <Slider range defaultValue={[20, 50]} />
              </AccordionDetails>
            </Accordion>
            <div className="sidebar_checkbox">
              <h2>Наличие</h2>
              <Checkbox>Забрать сегодня</Checkbox>
            </div>
            <Accordion id="accordion">
              <AccordionSummary
                expandIcon={<FiChevronRight id="icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Бренд
              </AccordionSummary>
              <AccordionDetails>
                <Checkbox>LG </Checkbox>
                <Checkbox>Samsung</Checkbox>
                <Checkbox>LG </Checkbox>
                <Checkbox>Samsung</Checkbox>
              </AccordionDetails>
            </Accordion>
            <button>Показать</button>
          </div>
          <Boxes width={"70%"} />
        </div>
      </div>
      <div className="other_content">
        <div className="popular_categories">
          <h2>Популярные категории и модели</h2>
          <div>
            <button>Realme</button>
            <button>Realme</button>
            <button>Realme</button>
            <button>Смартфоны Samsung</button>
            <button>Смартфоны Samsung</button>
            <button>Realme</button>
            <button>Realme</button>
            <button>Смартфоны Samsung</button>
            <button>RealСмартфоны Samsungme</button>
          </div>
        </div>
        <InterestingProducts
          title={"Товары которые так же могут быть интересны"}
        />
        <Category_Accordion />
      </div>
    </div>
  );
};

export default Category;
