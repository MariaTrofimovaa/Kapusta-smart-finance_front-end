import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Auth",
    path: "/",
    component: lazy(() => import("../pages/authPage/AuthPage")),
    exact: true,
    isPrivate: false,
    redirectTo: "/expense",
    isRestricted: true,
  },

  {
    name: "Report",
    path: "/report",
    component: lazy(() => import("../pages/reportPage/ReportPage")),
    exact: false,
    redirectTo: "/report",
    isPrivate: true,
  },
  {
    name: "MobileHomePage",
    path: "/main",
    component: lazy(() => import("../pages/mobileHomePage/MobileHomePage")),
    isPrivate: true,
    redirectTo: "/",
    isMobile: true,
  },

  {
    name: "HomePage",
    path: "/:transType",
    component: lazy(() => import("../pages/homePage/HomePage")),
    exact: false,
    isPrivate: true,
    redirectTo: "/",
    isMobile: false,
  },

  {
    name: "NotFound",
    path: "",
    component: lazy(() => import("../pages/notFound/NotFound")),
    exact: true,
    redirectTo: null,
    isPrivate: false,
  },
];
