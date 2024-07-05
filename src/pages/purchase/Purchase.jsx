import "./Purchase.scss"
//
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material"
import { FiCalendar } from "react-icons/fi"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { changeCounts } from "../../slices/notifications"

const Purchase = () => {
  const [cartsData, setCartsData] = useState()
  const [cartsImageData, setCartsImageData] = useState([])
  let totalPrice = 0
  const dispatch = useDispatch()

  useEffect(() => {
    getCartsData()
  }, [])

  const getCartsData = async () => {
    try {
      const response = await ServiceData.getData("trade/get_trades_product")
      // get images ⬇
      const imagePromises = response.data.map(async (item) => {
        const imageUrl = await ServiceData.getImages(item.files[0]?.new_files)
        return {
          imageName: item.files[0]?.new_files,
          blobLink: imageUrl,
        }
      })
      const images = await Promise.all(imagePromises)
      setCartsData(response)
      setCartsImageData(images)
    } catch (error) {
      console.log(error)
    }
  }
  const handleRemoveCart = async (category, id) => {
    try {
      const data = await ServiceData.deleteData(
        `trade/delete_trades?delete_all=false&source=${category}&source_id=${id}`
      )
      getCartsData()
      getCounts()
    } catch (error) {
      console.log(error)
    }
  }
  const getCounts = async () => {
    const cartCountRes = await ServiceData.getData("main/get_count_trades")
    const favoriteCountRes = await ServiceData.getData("main/get_likes_count")
    dispatch(
      changeCounts({
        cartCounts: cartCountRes.data,
        favCounts: favoriteCountRes.data,
      })
    )
  }

  return (
    <div className="purchase">
      <div className="purchase_left">
        <h2>Оформить покупку</h2>
        <div className="sections">
          <section>
            <div className="title">
              <span>1</span>
              <p>Ваши данные</p>
            </div>
            <div className="content yourDetails">
              <TextField id="labelInput" label="Телефон *" variant="outlined" />
              <TextField id="labelInput" label="Имя*" variant="outlined" />
              <TextField
                id="labelInput"
                label="Фамилия* *"
                variant="outlined"
              />
            </div>
          </section>
          <section>
            <div className="title">
              <span>2</span>
              <p>Ваш заказ</p>
            </div>
            <div className="content yourOrders">
              {cartsData?.data.length == 0 && (
                <div>Товары еще не добавлены</div>
              )}
              {cartsData &&
                cartsData.data.map((item) => {
                  totalPrice = item.laptop?.discount_price
                  console.log(item)
                  return (
                    <div key={item.id} className="product">
                      <img
                        src={cartsImageData.map((imageLink) => {
                          return item.files[0]?.new_files == imageLink.imageName
                            ? imageLink.blobLink
                            : ""
                        })}
                        alt="image"
                      />
                      <div className="product_info">
                        <h3>{item.description}</h3>
                        <span>{item.count} шт</span>
                        <p>{item.discount_price} cум</p>
                      </div>
                      <div
                        onClick={() => handleRemoveCart(item.name, item.id)}
                        className="productDel"
                      >
                        <IoCloseOutline />
                      </div>
                    </div>
                  )
                })}
            </div>
          </section>
          <section>
            <div className="title">
              <span>3</span>
              <p>Выберите способ оплаты</p>
            </div>
            <div className="content radio">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Оплата через Payme"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Онлайн оплата по карте UZCARD и HUMO"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Наличными при получении"
                />
                <FormControlLabel
                  value="cart"
                  control={<Radio />}
                  label="Картой при получении"
                />
              </RadioGroup>
            </div>
          </section>
          <section>
            <div className="title">
              <span>4</span>
              <p>Способ получения</p>
            </div>
            <div className="content getting">
              <div className="stage">
                <div className="sub-title">Ваш город</div>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Ташкент"
                    control={<Radio />}
                    label="Ташкент"
                  />
                </RadioGroup>
              </div>
              <div className="stage">
                <div className="sub-title">Укажите адрес доставки</div>
                <div className="location">
                  <TextField
                    select
                    id="labelInput"
                    label="Регион / Область*"
                    variant="outlined"
                    defaultValue={"Toshkent"}
                  >
                    <MenuItem value="Farg'ona">Farg'ona</MenuItem>
                    <MenuItem value="Toshkent">Toshkent</MenuItem>
                    <MenuItem value="Namangan">Namangan</MenuItem>
                  </TextField>
                  <TextField
                    select
                    id="labelInput"
                    label="Город  / Район*"
                    variant="outlined"
                    defaultValue={"Toshkent"}
                  >
                    <MenuItem value="Toshkent">Toshkent</MenuItem>
                    <MenuItem value="Namangan">Namangan</MenuItem>
                    <MenuItem value="Farg'ona">Farg'ona</MenuItem>
                  </TextField>
                </div>
              </div>
              <div className="stage addressDiv">
                <TextField
                  className="address"
                  label="Адрес"
                  variant="outlined"
                />
                <TextField
                  className="address floor"
                  label="Этаж"
                  type="number"
                  variant="outlined"
                />
              </div>
              <div className="stage date">
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Дата доставки
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">
                        <FiCalendar id="calendarIcon" />
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="purchase_right">
        <h3>Ваши данные</h3>
        <div className="stage line">
          <p>Доставка</p>
          <span>бесплатно</span>
        </div>
        <div className="stage total">
          <p>Всего к оплате</p>
          <span>{totalPrice} cум</span>
        </div>
        <button>Оформить покупку</button>
        <div className="privacy">
          <p>Подтверждая заказ, я принимаю условия</p>
          <span>Пользовательского соглашения</span>
        </div>
      </div>
    </div>
  )
}

export default Purchase
