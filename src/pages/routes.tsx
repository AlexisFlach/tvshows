import { routerType } from "../types/router/router.types";
import { Route, Routes } from "react-router-dom";
import {ShowList} from "./index";
import {ShowPage} from "./show";
import {NotFound} from "./NotFound";

export const routes: routerType[] = [
    {
        path: "/",
        element: <ShowList />,
        title: "home"
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

