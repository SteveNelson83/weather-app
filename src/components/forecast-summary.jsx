import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => (
  <h1>
    <div className="date">{Moment(props.date).format('ddd Do MMM')}</div>
    <div className="temperature">{props.temperatureMax}°C</div>
    <div className="description">{props.description}</div>
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </h1>
);
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
