import "./Boxes.scss"
import Box from "../../ui/box/Box"

const Boxes = ({ boxesData, width, favorite, helper, setHelper }) => {
  return (
    <div style={{ width: width }} className="boxes">
      <p
        className={
          boxesData?.length == 0 ? "productFound active" : "productFound"
        }
      >
        Результатов не найдено
      </p>
      {boxesData &&
        boxesData.map((item) => (
          <Box
            item={item}
            favorite={favorite}
            key={item.id}
            helper={helper}
            setHelper={setHelper}
          />
        ))}
    </div>
  )
}

export default Boxes
