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
    name: "HomePage",
    path: "/:transType",
    component: lazy(() => import("../pages/homePage/HomePage")),
    exact: false,
    isPrivate: true,
    // redirectTo: "/expense",
    // isRestricted: true,
  },

  {
    name: "MobileHome",
    path: "/",
    component: lazy(() => import("../pages/mobileHomePage/MobileHomePage")),
    exact: true,
    isPrivate: true,
    isMobile: true,
    // redirectTo: "/expense",
    // isRestricted: true,
  },

  // {
  //   name: "Expense",
  //   path: "/expense",
  //   component: lazy(() => import("../pages/homePage/HomePage")),
  //   exact: true,
  //   isPrivate: true,
  //   // redirectTo: "/expense",
  //   // isRestricted: true,
  // },

  // {
  //   name: "Income",
  //   path: "/income",
  //   component: lazy(() => import("../pages/homePage/HomePage")),
  //   exact: true,
  //   isPrivate: true,
  //   // isRestricted: true,
  // },

  {
    name: "Report",
    path: "/report",
    component: lazy(() => import("../pages/reportPage/ReportPage")),
    redirectTo: "/expense",
    exact: false,
    isPrivate: true,
    // isRestricted: true,
  },
  {
    name: "NotFound",
    path: "",
    component: lazy(() => import("../pages/notFound/NotFound")),
    exact: true,
    isPrivate: false,
    // isRestricted: false,
  },
];
