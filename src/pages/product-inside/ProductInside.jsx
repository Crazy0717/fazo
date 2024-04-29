import "./ProductInside.scss"
// icons
import { FiChevronRight } from "react-icons/fi"
import {
  AStarter,
  Filter_inside_product_direction,
  InterestingProducts,
  Product_About,
} from "../../components"
import { Link, useParams } from "react-router-dom"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import ServiceData from "../../service/service"

const ProductInside = () => {
  const { category, id } = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [productData, setProductData] = useState()

  const getProductData = async () => {
    try {
      const { data } = await ServiceData.getData(
        `main/get_one_source?name=${category}&ident=${id}`
      )
      console.log(data)
      setProductData(data[0])
    } catch (error) {
      console.log("Product inside" + error)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <div className="productInside">
      <div className="path">
        <h3>
          <Link to={"/"}>Главная</Link> <FiChevronRight /> Телефоны, планшеты{" "}
          <FiChevronRight /> Телефоны и гаджеты
        </h3>
      </div>
      <div className="Filter_inside">
        <div className="Slider">
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            breakpoints={{
              0: {
                spaceBetween: 0,
              },
              448: {
                spaceBetween: 10,
                direction: "vertical",
                slidesPerView: 3.9,
              },
              768: {
                direction: "horizontal",
                spaceBetween: 5,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 14,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right">
          <div className="Aboute">
            <Filter_inside_product_direction item={productData} />
            <Product_About item={productData} />
          </div>
          <div className="AStarter">
            <AStarter />
          </div>
          <InterestingProducts title={"Недавно просмотренные"} />{" "}
          {/* deleteFromProject */}
        </div>
      </div>
    </div>
  )
}

export default ProductInside
