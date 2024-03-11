import "./AStarter.scss";
//
import { Link } from "react-router-dom";
// icons
import { GrPowerReset } from "react-icons/gr";
import { FaTruckFast } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

const AStarter = () => {
  return (
    <div className="AStarters">
      <div className="boxs">
        <div className="text">
          <GrPowerReset /> <h3> 30 дней на обмен и возврат.</h3>
        </div>
        <div className="body">
          <p>
            Если купите товар сегодня, до 06 мая можете вернуть или обменять.
          </p>
          <Link>Подробнее о программе.</Link>
        </div>
      </div>
      <div className="boxs">
        <div className="text">
          <SlEarphonesAlt /> <h3> Есть вопросы?</h3>
        </div>
        <div className="body">
          <div className="contact">
            <p>Телефон:</p>
            <Link>+998 99 990 45 27.</Link>
          </div>
          <div className="contact">
            <p>Телеграм:</p>
            <Link>@mixel_uz</Link>
          </div>
          <div className="contact">
            <p>Эл. почта:</p>
            <Link>mixel@emali.uz</Link>
          </div>
        </div>
      </div>
      <div className="boxs">
        <div className="text">
          <FaTruckFast />{" "}
          <h3>
            Доставка: <span>Бесплатно</span>
          </h3>
        </div>
        <div className="text2">
          <CiWallet />
          <h3>Cпособ оплаты:</h3>
        </div>
        <div className="body">
          <ul>
            <li>Наличными (При Доставке)</li>
            <li>Payme / Click</li>
            <li>Перечислением с НДС</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AStarter;
