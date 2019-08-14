import React from 'react';
import Proptypes from 'prop-types';
import Moment from 'moment';

const ForecastDetails = props => {
  return (
    <div>
      <span className="date">{Moment(props.forecasts.date).format('ddd Do MMM')}</span>
      <span className="maxTemp">Maximum Temperature: {props.forecasts.temperature.max}°C</span>
      <span className="minTemp">Minimum Temperature: {props.forecasts.temperature.min}°C</span>
      <span className="humidity">Humidity: {props.forecasts.humidity}%</span>
      <span className="windSpeed">Wind Speed: {props.forecasts.wind.speed}mph, Direction: {props.forecasts.wind.direction}</span>
    </div>
  );
};

export default ForecastDetails;
