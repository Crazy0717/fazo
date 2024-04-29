import "./Boxes.scss"
import Box from "../../ui/box/Box"

const Boxes = ({ boxesData, width, favorite, helper,setHelper }) => {
  return (
    <div style={{ width: width }} className="boxes">
      {/* <h1
        className={boxesData.data.length == 0 ? "notFound active" : "notFound"}
      >
        Результатов не найдено
      </h1> */}
      {boxesData && 
        boxesData.map((item) => (
          <Box item={item} favorite={favorite} key={item.id} helper={helper} setHelper={setHelper}/>
        ))}
    </div>
  )
}

export default Boxes
{/* deleteFromProject */}
{
  // InterestingProducts
  /* <div className="boxes_box">
<div className="boxes_box_top">
  <div
    className={
      isloading ? "box_top_image isLoading" : "box_top_image"
    }
  >
    <div
      className={
        favorite || compare ? "productDel active" : "productDel"
      }
    >
      <IoCloseOutline />
    </div>
    <img
      loading="lazy"
      src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
      alt=""
    />
  </div>

  <div className="box_top_price">
    <p className={isloading ? "isLoading" : ""}>{item.price}$</p>
    <span className={isloading ? "isLoading" : ""}>
      {item.discount_price}$
    </span>
  </div>
  <div className="box_top_name">
    <p className={isloading ? "isLoading" : ""}>{item.name}</p>
  </div>
</div>
<div className="boxes_box_bottom">
  <div className="box_bottom_icons">
    <div className="icon">
      <FiShoppingCart />
    </div>
    <hr />
    <div
      style={{ display: favorite ? "none" : "" }}
      className="icon"
    >
      <FiHeart />
    </div>
    <hr />
    <div
      style={{ display: compare ? "none" : "" }}
      className="icon"
    >
      <PiScales />
    </div>
  </div>
</div>
</div> */
}
