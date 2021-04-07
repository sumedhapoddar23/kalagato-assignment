import { lazy } from "react";

const Homepage = lazy(() => import("../pages/homepage"));

const PageNotFound = () => {
  return <div>Not Found</div>;
};

export const routes = [
  {
    path: "",
    component: Homepage,
    isPrivate: false,
    exact: false,
  },
  {
    path: "/portal/:notFound",
    component: PageNotFound,
  },
];
