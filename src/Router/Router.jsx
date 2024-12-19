import PropTypes from "prop-types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Popular from "../pages/Popular";
import TvShows from "../pages/TvShows";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found!</h1>,
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

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
