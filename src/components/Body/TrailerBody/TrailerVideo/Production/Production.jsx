import PropTypes from "prop-types";

function Production({ detail }) {
  return (
    <div className="production">
      <div className="companies">
        <p>Companies: </p>
        {detail.production_companies.map((company, index, array) => {
          return (
            <span key={company.id}>
              {company.name + (index === array.length - 1 ? "" : ", ")}
            </span>
          );
        })}
      </div>
    </div>
  );
}

Production.propTypes = {
  detail: PropTypes.object,
};

export default Production;
