import React, { lazy } from "react";
import Rechart from "../../client/rechart/Rechart";
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./ReportPage.module.css";
import UserCount from "../../client/userCount/UserCount";
import GoBack from "../../shared/components/goBack/GoBack";

const ReportExpense = lazy(() =>
  import("../../client/reportExpense/ReportExpense")
);
const ReportIncomes = lazy(() =>
  import("../../client/reportIncomes/ReportIncomes")
);

const ReportPage = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <div>
      <GoBack />
      <UserCount />
      <div div className={css.list_wraper}>
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
          <Route
            exact
            path={`${match.path}/incomes`}
            component={ReportIncomes}
          />
        </Switch>
      </div>
      <Rechart />
    </div>
  );
};

export default ReportPage;
