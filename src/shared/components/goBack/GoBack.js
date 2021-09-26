import {ReactComponent as Arrow} from "../../../assets/icons/goBack.svg";
import scss from "./GoBack.module.scss";
import { useHistory } from 'react-router';


const GoBack = () => {
  const history = useHistory();
  const handleGoBack = () => {
  history.push("/");
  };
  return (
    <button type="button" className={scss.goBack} onClick={handleGoBack}>
      <Arrow className={scss.arrowSvg}/>
       <p className = {scss.arrowText}>Вернуться на главную</p>
    </button>
  );
}

export default GoBack;