import { useMemo } from "react";
import PropTypes from "prop-types";

import icons from "../../../../../assets/icons";

function Sales({ detail }) {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  }, []);

  return (
    <div className="sales-wrapper">
      <p className="budget">
        <img src={icons.budget_icon} className="icon" alt="" />
        Budget: {formatter.format(detail.budget)}
      </p>
      <p className="revenue">
        <img src={icons.revenue_icon} className="icon" alt="" />
        Revenue: {formatter.format(detail.revenue)}
      </p>
    </div>
  );
}

Sales.propTypes = {
  detail: PropTypes.object,
};

export default Sales;
