import React from "react";
import WeatherIcon from "react-icons-weather";
import "../styles/forecast-summary.css";

import PropTypes from "prop-types";

function ForecastSummary({
  date,
  temperature,
  description,
  icon,
  setSelectedDate,
}) {
  const formattedDate = new Date(date).toDateString();
  const handleClick = () => {
    setSelectedDate(date);
  };
  return (
    <div data-testid="forecast-summary">
      <div className="forecast-summary-date">{formattedDate}</div>
      <div className="forecast-summary-temperature">{`${temperature.max}°C`}</div>
      <div className="forecast-summary-description">{description}</div>
      <div className="forecast-summary-icon" data-testid="forecast-icon">
        <WeatherIcon
          name="owm"
          iconId={`${icon}`}
          flip="horizontal"
          rotate="90"
        />
      </div>
      <button type="button" onClick={handleClick}>
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default ForecastSummary;
