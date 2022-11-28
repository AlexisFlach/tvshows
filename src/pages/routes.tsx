import { routerType } from "../types/router/router.types";
import { Route, Routes } from "react-router-dom";
import {Shows} from "./Home";
import {Show} from "./Show";
import {NotFound} from "./NotFound";

export const routes: routerType[] = [
    {
        path: "/",
        element: <Shows />,
        title: "home"
    },
    {
        path: "/shows/:id",
        element: <Show />,
        title: "shows"
    },
    {
    path: "*",
    element: <NotFound />,
    title: "not found"
    }
];

const Router = () => {
    const pageRoutes = routes.map(({ path, title, element }: routerType) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    });
  
    return <Routes>{pageRoutes}</Routes>;
  };
  
  export default Router;

