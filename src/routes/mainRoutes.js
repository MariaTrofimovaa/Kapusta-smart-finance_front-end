import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Auth",
    path: "/",
    component: lazy(() => import("../pages/authPage/AuthPage")),
    exact: true,
    isPrivate: false,
    redirectTo: "/homePage",
    // isRestricted: false,
  },
  {
    name: "Home",
    path: "/homePage",
    component: lazy(() => import("../pages/homePage/HomePage")),
    exact: true,
    isPrivate: true,
    // isRestricted: true,
  },

  {
    name: "Report",
    path: "/report",
    component: lazy(() => import("../pages/reportPage/ReportPage")),
    redirectTo: "/homePage",
    exact: true,
    isPrivate: true,
    // isRestricted: true,
  },
  {
    name: "NotFound",
    path: "",
    component: lazy(() => import("../pages/notFound/NotFound")),
    exact: true,
    isPrivate: false,
    // isRestricted: false, не помню, зачем он
  },
];
