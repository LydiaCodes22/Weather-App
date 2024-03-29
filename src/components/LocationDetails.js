import "../styles/location-details.css";

import React from "react";

import PropTypes from "prop-types";

function LocationDetails({ city, country }) {
  return (
    <div className="location-details">
      <h1>{`${city}, ${country}`}</h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
