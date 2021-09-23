import React from "react";
import Rechart from "../../client/rechart/Rechart";
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import sprite from "../../assets/icons/sprite_categories.svg";
import ReportExpense from "../../client/reportExpense/ReportExpense";
import css from "./ReportPage.module.css";
import ReportIncomes from "../../client/reportIncomes/ReportIncomes";
import UserCount from "../../client/userCount/UserCount";
import GoBack from "../../shared/components/goBack/GoBack";
import UserMount from "../../client/userMount/UserMount";

const ReportPage = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <div>
      <GoBack />
      <UserCount />
      <UserMount />
      <ul className={css.list}>
        <li className={css.item}>
          <Link to={`${match.url}`}>
            <svg width="10" height="15">
              <use xlinkHref={`${sprite}#icon-arrow-left`} />
            </svg>
          </Link>
        </li>
        <li className={css.item}>
          {location.pathname === "/report" ? (
            <h3 className={css.title}>Расходы</h3>
          ) : (
            <h3 className={css.title}>Доходы</h3>
          )}
        </li>
        <li className={css.item}>
          <Link to={`${match.url}/incomes`}>
            <svg width="10" height="15">
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </svg>
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${match.path}`} component={ReportExpense} />
        <Route exact path={`${match.path}/incomes`} component={ReportIncomes} />
      </Switch>
    </div>
  );
};

export default ReportPage;
