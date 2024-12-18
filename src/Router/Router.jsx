import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

function Router({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
