import "./Favorite.scss";
// 
import { Boxes } from "../../components";

const Favorite = () => {
  return (
    <div className="favorite">
      <div className="title">
        <h1>Избранное</h1>
      </div>
      <Boxes favorite={true} />
    </div>
  );
};

export default Favorite;
