import { lazy } from "react";
import { ROUTES } from "../constant/routes";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Redirection = lazy(() => import("../pages/Redirection/Redirection"));
const PageNotFound = lazy(() => import("../pages/404"));

export const publicRoutes = [
  {
    path: ROUTES.dashboard,
    element: Dashboard,
    title: "Login",
  },
  {
    path:ROUTES.redirection,
    element:Redirection,
    title:"Redirection "
  },
  {
    path: ROUTES.page_not_found,
    element: PageNotFound,
    title: "Page Not Found",
  },
];
