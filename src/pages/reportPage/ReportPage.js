import React, { lazy, useEffect } from "react";
import Rechart from "../../client/rechart/Rechart";
import {
  Route,
  Link,
  Switch,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import sprite from "../../assets/icons/sprite_categories.svg";
import css from "./ReportPage.module.scss";
import UserCount from "../../client/userCount/UserCount";
import GoBack from "../../shared/components/goBack/GoBack";
import UserMount from "../../client/userMount/UserMount";
import Balance from "../../client/balance/Balance";
import { useDispatch } from "react-redux";
import { setCurrentLocation } from "../../redux/screenWidth/screenWidth.action";
import { useSelector } from "react-redux";
import { getCurrLocation } from "../../redux/screenWidth/screenWidth.selector";
// import { useSelector } from "react-redux";
// import {getIsMobileMedia} from "../../redux/screenWidth/screenWidth.selector";

const ReportExpense = lazy(() =>
  import("../../client/reportExpense/ReportExpense")
);
const ReportIncomes = lazy(() =>
  import("../../client/reportIncomes/ReportIncomes")
);

const ReportPage = () => {
  // const isMobile = useSelector(getIsMobileMedia);
  const match = useRouteMatch();
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentLocation(location));
  }, []);

  const activeLocation = location.pathname;

  return (
    <div>
      <div className={css.list_topContainer}>
        <GoBack />
        <div className={css.list_topContainerBalance}>
          <UserCount />
          <Balance />
        </div>
      </div>

      <UserMount />
      <div className={css.list_wraper}>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to={`${match.url}`}>
              <svg width="10" height="15">
                <use xlinkHref={`${sprite}#icon-arrow-left`} />
              </svg>
            </Link>
          </li>
          <li className={css.item}>
            {activeLocation === "/report" ? (
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
      <div className={css.chart_wraper}>
        <Rechart />
      </div>
    </div>
  );
};

export default ReportPage;
