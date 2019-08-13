import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

const App = props => (
  <main>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummary
      date={props.forecast.date}
      temperature={props.forecast.temperature}
      description={props.forecast.description}
      icon={props.forecast.icon}
    />
  </main>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
