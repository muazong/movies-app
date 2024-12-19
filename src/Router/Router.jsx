import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Popular from "../pages/Popular";
import TvShows from "../pages/TvShows";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "/tv_shows",
    element: <TvShows />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
