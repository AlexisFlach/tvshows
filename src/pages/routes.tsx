import { routerType } from "../types/router/router.types";
import { Route, Routes } from "react-router-dom";
import {ShowList} from "./shows";
import {ShowPage} from "./show";
import {NotFound} from "./NotFound";
import { Home } from "./home";

export const routes: routerType[] = [
    {
        path: '/',
        element: <Home />,
        title: "home"
    },
    {
        path: "/shows",
        element: <ShowList />,
        title: "shows"
    },
    {
        path: "/shows/:id",
        element: <ShowPage />,
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

