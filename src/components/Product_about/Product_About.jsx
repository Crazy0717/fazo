import "./Product_About.scss"

const Product_About = ({ item }) => {
  if (item)
    return (
      <div className="Product_About">
        <div className="TechnicalSpecifications">
          <div className="texta">
            <h3>Технические параметры</h3>
          </div>
          <div className="item">
            <p>Название </p>
            {item.description}
          </div>
          <div className="item">
            <p>Состояние</p> <p>Новый</p>
          </div>
          <div className="item">
            <p>Технические параметры</p> <p>{item.description}</p>
          </div>
        </div>
        <div className="Classification">
          <div className="texta">
            <h3>Классификация</h3>
          </div>
          <div className="item">
            <p>Тип</p> {item.name}
          </div>
        </div>
        <div className="Audience">
          <div className="texta">
            <h3>Аудитория</h3>
          </div>
          <div className="item">
            <p>Подходит для</p>{" "}
            <p>Руководителей Студентов и учителей Офисных сотрудников </p>
          </div>
        </div>
        <div className="Дисплей">
          <div className="texta">
            <h3>Дисплей</h3>
          </div>
          <div className="item">
            <p>Тип матрицы </p> {item.screen_type}
          </div>
          <div className="item">
            <p>Диагональ</p> {item.display}
          </div>
        </div>
        <div className="CPU">
          <div className="texta">
            <h3>Процессор</h3>
          </div>
          <div className="item">{item.processor}</div>
        </div>
        <div className="RAM">
          <div className="texta">
            <h3>Оперативная память</h3>
          </div>
          <div className="item">
            <p>RAM</p> {item.ram_size}
          </div>
          <div className="item">
            <p>ROM</p> {item.rom_size}
          </div>
          <div className="item">
            <p>Тип жесткий диска</p> {item.rom_type}
          </div>
        </div>
      </div>
    )
}

export default Product_About
