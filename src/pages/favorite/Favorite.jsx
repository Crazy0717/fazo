import "./Favorite.scss"
//
import { Boxes } from "../../components"
import ServiceData from "../../service/service"
import { useEffect, useState } from "react"

const Favorite = () => {
  const [favoritiesData, setFavoritiesData] = useState()
  const [helper, setHelper] = useState(true)

  useEffect(() => {
    getFavorities()
  }, [helper])

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
        <Boxes
          boxesData={favoritiesData?.data}
          favorite={true}
          helper={helper}
          setHelper={setHelper}
        />
      )}
    </div>
  )
}

export default Favorite
