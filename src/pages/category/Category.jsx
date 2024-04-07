import "./Category.scss"
// icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
//
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Checkbox, InputNumber, Slider } from "antd"
import {
  Boxes,
  Category_Accordion,
  InterestingProducts,
} from "../../components"
import { Link, useNavigate, useParams } from "react-router-dom"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  boxesError,
  boxesStart,
  boxesSuccessfully,
} from "../../slices/boxesLoading"
import ReactPaginate from "react-paginate"

const Category = () => {
  const { subCategory, theme } = useParams()
  const [boxes, setBoxes] = useState([])
  const [totalPages, setTotalPages] = useState(50)
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState(0)
  const [ram_size, setRam_size] = useState(0)
  const [rom_size, setRom_size] = useState(0)
  const [submit, setSubmit] = useState(true)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setPrice(e)
  }
  const handleRamSize = (e) => {
    setRam_size(e.target.value)
  }
  const handleRomSize = (e) => {
    setRom_size(e.target.value)
  }

  const getData = async () => {
    dispatch(boxesStart())
    try {
      const { data } = await ServiceData.getData(
        `${subCategory}/${theme}?page=${currentPage}&limit=25&rom_size=${rom_size}&year=0&ram_size=${ram_size}&price=${price}&display=0`
      )
      setBoxes(data)
      dispatch(boxesSuccessfully())
      setTotalPages(data.pages)
    } catch (error) {
      dispatch(boxesError(error))
    }
  }
  
  useEffect(() => {
    getData()
  }, [subCategory, theme, submit, currentPage])

  return (
    <div className="category">
      <div className="content">
        <div className="path">
          <h3>
            <Link to={"/"}>Главная</Link>
            <FiChevronRight /> Телефоны, планшеты <FiChevronRight /> Телефоны и
            гаджеты
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
                  onChange={handleInputChange}
                  min={0}
                  placeholder="до"
                  type="number"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
                <Slider onChange={handleInputChange} min={0} max={1000} />
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
                RAM
              </AccordionSummary>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onClick={handleRamSize}
                  value="2"
                  control={<Radio />}
                  label="2 GB"
                />

                <FormControlLabel
                  onClick={handleRamSize}
                  value="4"
                  control={<Radio />}
                  label="4 GB"
                />
                <FormControlLabel
                  onClick={handleRamSize}
                  value="8"
                  control={<Radio />}
                  label="8 GB"
                />
                <FormControlLabel
                  onClick={handleRamSize}
                  value="16"
                  control={<Radio />}
                  label="16 GB"
                />
              </RadioGroup>
            </Accordion>
            <Accordion id="accordion">
              <AccordionSummary
                expandIcon={<FiChevronRight id="icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                ROM
              </AccordionSummary>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onClick={handleRomSize}
                  value="64"
                  control={<Radio />}
                  label="64 GB"
                />

                <FormControlLabel
                  onClick={handleRomSize}
                  value="128"
                  control={<Radio />}
                  label="128 GB"
                />
                <FormControlLabel
                  onClick={handleRomSize}
                  value="256"
                  control={<Radio />}
                  label="256 GB"
                />
                <FormControlLabel
                  onClick={handleRomSize}
                  value="512"
                  control={<Radio />}
                  label="512 GB"
                />
              </RadioGroup>
            </Accordion>
            <button onClick={() => setSubmit(!submit)}>Показать</button>
          </div>
          <div className="category_boxes">
            <Boxes boxesData={boxes} width={"100%"} />
          </div>
        </div>
      </div>
      <div className="other_content">
        <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            previousLabel={<FiChevronLeft />}
            nextLabel={<FiChevronRight />}
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={totalPages}
            renderOnZeroPageCount={null}
            activeClassName="activePage"
          />
          {/* <div>
            <div className="pagination_button previous">
              <FiChevronLeft />
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li className="active">3</li>
              <li>...</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
            </ul>
            <div className="pagination_button next">
              <FiChevronRight />
            </div>
          </div> */}
        </div>
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
  )
}

export default Category
