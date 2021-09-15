import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/homePage/HomePage")),
    exact: true,
    // isPrivate: true,
    isRestricted: true,
  },
  {
    name: "Auth",
    path: "/auth",
    component: lazy(() => import("../pages/authPage/AuthPage")),
    exact: true,
    // isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Report",
    path: "/report",
    component: lazy(() => import("../pages/reportPage/ReportPage")),
    redirectTo: "/",
    // exact: true,
    // isPrivate: true,
    isRestricted: true,
  },
  {
    name: "NotFound",
    // path: "/",
    component: lazy(() => import("../pages/notFound/NotFound")),
    // exact: true,
    // isPrivate: true,
    // isRestricted: false, не помню, зачем он
  },
];
