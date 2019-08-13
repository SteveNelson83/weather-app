import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <div>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastSummary
      date={props.forecast.date}
      temperature={props.forecast.temperature}
      description={props.forecast.description}
      icon={props.forecast.icon}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
    description: PropTypes.string,
  })).isRequired,
};

export default App;
