import "./Home.scss";
// swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
// icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import DiscountBoxes from "../../components/discount boxes/Discount-boxes";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="header_swiper">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Autoplay,
            ]}
            navigation={{ nextEl: ".button_right", prevEl: ".button_left" }}
            pagination={{ clickable: true, el: ".header_swiper_pagination" }}
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            // autoplay={{ delay: "5000" }}
            loop={true}
          >
            <SwiperSlide>
              <div className="header_swiper_image">
                <img src="./images/header image.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_swiper_image">
                <img src="./images/header image (2).png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_swiper_image">
                <img src="./images/header image.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="header_swiper_buttons">
            <div className="swiper_buttons_button button_left">
              <FiChevronLeft />
            </div>
            <div className="swiper_buttons_button button_right">
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="header_swiper_pagination"></div>
      </header>
      <main>
        <div className="discount_boxes">
          <div className="discount_boxes_top">
            <h2>Горящие предложения</h2>
            <div className="boxes_top_seeAll">
              Посмотреть все
              <IoIosArrowRoundForward />
            </div>
          </div>
          <DiscountBoxes />
        </div>
        <div className="category-slider">
          <div className="category-slider_title">
            <h2>Популярные категории</h2>
          </div>
          <div className="category-slider_swiper">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              navigation={{ nextEl: ".button_right", prevEl: ".button_left" }}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                350: {
                  slidesPerView: 1.5,
                },
                510: {
                  slidesPerView: 2,
                },
                660: {
                  slidesPerView: 2.5,
                },
                770: {
                  slidesPerView: 2.8,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Компьютеры</h3>
                <div className="swiper_slider_image">
                  <img src="./images/Computer 1.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper_buttons_button button_left">
              <FiChevronLeft />
            </div>
            <div className="swiper_buttons_button button_right">
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="main_slider">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
            navigation={{
              nextEl: ".main_button_right",
              prevEl: ".main_button_left",
            }}
            slidesPerView={1}
            effect={"fade"}
            loop={true}
          >
            <SwiperSlide>
              <div className="main_slider_left">
                <h2>Apple iPhone X 64 ГБ</h2>
                <p>
                  Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                  который удобно лежит в руке и потрясающие выглядит, — это и
                  есть iPhone X.
                </p>
              </div>
              <div className="main_slider_image">
                <img src="./images/main phone.png" alt="" />
              </div>
              <div className="main_slider_right">
                <h3>1 250 900 Сум</h3>
                <h4>2 220 900 Сум</h4>
                <button>Показать еще</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_slider_left">
                <h2>Samsung S24 ULTRA 1 TB</h2>
                <p>
                  Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                  который удобно лежит в руке и потрясающие выглядит, — это и
                  есть iPhone X.
                </p>
              </div>
              <div className="main_slider_image">
                <img src="./images/main phone.png" alt="" />
              </div>
              <div className="main_slider_right">
                <h3>11 780 900 Сум</h3>
                <h4>13 560 900 Сум</h4>
                <button>Показать еще</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main_slider_left">
                <h2>Xiaomi 14 ULTRA 1 TB</h2>
                <p>
                  Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                  который удобно лежит в руке и потрясающие выглядит, — это и
                  есть iPhone X.
                </p>
              </div>
              <div className="main_slider_image">
                <img src="./images/main phone.png" alt="" />
              </div>
              <div className="main_slider_right">
                <h3>9 450 900 Сум</h3>
                <h4>10 320 900 Сум</h4>
                <button>Показать еще</button>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="main_slider_buttons">
            <div className="slider_buttons_button main_button_left">
              <FiChevronLeft />
            </div>
            <div className="slider_buttons_button main_button_right">
              <FiChevronRight />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
