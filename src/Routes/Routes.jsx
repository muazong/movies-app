import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Popular from "../pages/Popular";
import TvShows from "../pages/TvShows";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Trailer from "../pages/Trailer";

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
  {
    path: "/trailer/:trailerId",
    element: <Trailer />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
