import css from "./GoBack.module.css";
import {ReactComponent as Arrow} from "../../../assets/icons/goBack.svg";
import { useHistory } from 'react-router';

const GoBack = () => {
  const history = useHistory();
  const handleGoBack = () => {
  history.push("/");
  };
  return (
    <button type="button" className={css.goBack} onClick={handleGoBack}>
      <Arrow className={css.arrowSvg}/>
       <p>Вернуться на главную</p>
    </button>
  );
}

export default GoBack;