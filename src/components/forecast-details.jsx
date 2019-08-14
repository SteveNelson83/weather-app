import React from 'react';
import Proptypes from 'prop-types';
import Moment from 'moment';

const ForecastDetails = props => {
  return (
    <div>
      <span className="date">{Moment(props.forecast.date).format('ddd Do MMM')}</span>
      <span className="maxTemp">Maximum Temperature: {props.forecast.temperature.max}°C</span>
      <span className="minTemp">Minimum Temperature: {props.forecast.temperature.min}°C</span>
      <span className="humidity">Humidity: {props.forecast.humidity}%</span>
      <span className="windSpeed">Wind Speed: {props.forecast.wind.speed}mph, Direction: {props.forecast.wind.direction}</span>
    </div>
  );
};

export default ForecastDetails;
