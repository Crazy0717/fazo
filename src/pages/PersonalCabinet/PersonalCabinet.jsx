import "./PersonalCabinet.scss";
// icons
import { IoIosArrowForward, IoIosTimer } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { CiCreditCard1, CiLogout } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { PiTruckLight } from "react-icons/pi";
// ui
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import { Checkbox } from "antd";

const PersonalCabinet = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const RedSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: red[600],
      "&:hover": {
        backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: red[500],
    },
  }));
  
  return (
    <>
      <div className="map">
        <p>
          Главная <IoIosArrowForward /> Личный кобинет
        </p>
      </div>
      <div className="Cobinet">
        <div className="left res">
          <div className="Me">
            <div className="radio">
              <FiUser />
            </div>
            <div className="text">
              <h4>Shukurillo Tojonazarov</h4>
              <p>+998 99 0333848</p>
            </div>
          </div>
          <div className="items">
            <div className="item">
              <div className="radio">
                <HiOutlineShoppingCart />
              </div>
              <div className="text">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="item">
              <div className="radio">
                <GrNotes />
              </div>
              <p>История платежей</p>
            </div>
            <div className="item">
              <div className="radio">
                <IoIosTimer />
              </div>
              <p>Онлайн заказы</p>
            </div>
            <div className="item">
              <div className="radio">
                <CiLogout />
              </div>
              <p>Выйти</p>
            </div>
          </div>
        </div>
        <div className="AbouteMe">
          <div className="aboute">
            <div className="contact">
              <div className="left">
                <div className="radio">
                  <FiUser />
                </div>
                <h3>Личные данные</h3>
              </div>
              <button>Изменит</button>
            </div>
            <div className="direction">
              <h3>Shukurillo Tojinazarov</h3>
              <p>Телефон: +998 99 0333848</p>
            </div>
          </div>
          <div className="carta">
            <div className="Carta">
              <div className="left">
                <div className="radio">
                  <CiCreditCard1 />
                </div>
                <h3>Моя карта</h3>
              </div>
            </div>

            <div className="Carta_direction">
              <p>Отсутствует</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="Sms">
            <div className="code">
              <div className="left">
                <div className="radio">
                  <FaRegEnvelope />
                </div>
                <h3>Уведомления</h3>
              </div>
            </div>
            <div className="direction">
              <h3>Получать информацию об акциях и скидках</h3>
              <div className="switch">
                <RedSwitch {...label} defaultChecked />
                <p>По SMS</p>
              </div>
            </div>
          </div>
          <div className="AStarter">
            <div className="astarter">
              <div className="Add">
                <div className="left">
                  <div className="radio">
                    <PiTruckLight />
                  </div>
                  <h3>Адрес доставки</h3>
                </div>
                <button>Добавить</button>
              </div>
              <div className="direction">
                <TextField
                  style={{ width: "100%" }}
                  id="labelInput"
                  label="Улица"
                  variant="outlined"
                />
                <div className="House_Or_apartment">
                  <TextField id="labelInput" label="Дом " variant="outlined" />
                  <TextField
                    id="labelInput"
                    label="Квартира "
                    variant="outlined"
                    style={{}}
                  />
                </div>
                <div className="checkbox">
                  <Checkbox>Адрес по умолчанию</Checkbox>
                </div>
                <div className="buttons">
                  <Button>Сохранить</Button>
                  <button>Отмена</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCabinet;
