import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => (
  <h1>
    <div className="date">{Moment(props.date).format('ddd Do MMM')}</div>
    <div className="temperature">{props.temperature}</div>
    <div className="description">{props.description}</div>
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
  </h1>
);
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
};

export default ForecastSummary;
