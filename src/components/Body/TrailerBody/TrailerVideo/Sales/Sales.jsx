import { useCallback } from "react";
import PropTypes from "prop-types";

import icons from "../../../../../assets/icons";

function Sales({ detail }) {
  const formattedNumber = useCallback((number) => {
    const result = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
    return result;
  }, []);

  return (
    <div className="sales-wrapper">
      <p className="budget">
        <img src={icons.budget_icon} className="icon" alt="" />
        Budget: {formattedNumber(detail.budget)}
      </p>
      <p className="revenue">
        <img src={icons.revenue_icon} className="icon" alt="" />
        Revenue: {formattedNumber(detail.revenue)}
      </p>
    </div>
  );
}

Sales.propTypes = {
  detail: PropTypes.object,
};

export default Sales;
