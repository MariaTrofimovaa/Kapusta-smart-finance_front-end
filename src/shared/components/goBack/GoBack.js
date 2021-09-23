import {ReactComponent as Arrow} from "../../../assets/icons/goBack.svg";
import css from "./GoBack.module.css";
import { useHistory } from 'react-router';


const GoBack = () => {
  const history = useHistory();
  const handleGoBack = () => {
  history.push("/");
  };
  return (
    <button type="button" className={css.goBack} onClick={handleGoBack}>
      <Arrow className={css.arrowSvg}/>
       <p className = {css.arrowText}>Вернуться на главную</p>
    </button>
  );
}

export default GoBack;