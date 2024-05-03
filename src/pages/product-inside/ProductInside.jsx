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
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    try {
      const { data } = await ServiceData.getData(
        `main/get_one_source?name=${category}&ident=${id}`
      )
      setProductData(data[0])
      const imagePromises = data[0]?.files.map(async (item) => {
        const imageUrl = await ServiceData.getImages(item.new_files)
        return { blobLink: imageUrl }
      })
      const images = await Promise.all(imagePromises)
      setProductImages(images)
    } catch (error) {
      console.log("Product inside" + error)
    }
  }

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
            {productImages &&
              productImages.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image.blobLink} />
                </SwiperSlide>
              ))}
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
            {productImages &&
              productImages.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image.blobLink} />
                </SwiperSlide>
              ))}
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
