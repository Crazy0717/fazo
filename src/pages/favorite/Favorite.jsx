import "./Favorite.scss"
//
import { Boxes } from "../../components"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"

const Favorite = () => {
  const [favoritiesData, setFavoritiesData] = useState()

  useEffect(() => {
    getFavorities()
  }, [])

  const getFavorities = async () => {
    try {
      const response = await ServiceData.getData("/likes/get_likes")
      setFavoritiesData(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="favorite">
      <div className="title">
        <h1>Избранное</h1>
      </div>
      {favoritiesData?.data?.length == 0 ? (
        <p>Вы еще не добавили продукты</p>
      ) : (
        <Boxes boxesData={favoritiesData} favorite={true} />
      )}
    </div>
  )
}

export default Favorite
