import { useDispatch, useSelector } from "react-redux";
import "./background.scss";
import { disablEveryThing } from "../../slices/transparent-black-background";

const BlackBackground = () => {
  const blackBackgroundState = useSelector((state) => state.background);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(disablEveryThing())}
      className={
        blackBackgroundState.backgroundState
          ? "blackBackground active"
          : "blackBackground"
      }
    ></div>
  );
};

export default BlackBackground;
