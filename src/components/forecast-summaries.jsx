import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.css';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
          props.forecasts.map(forecast => (
            <ForecastSummary
              key={forecast.date}
              date={forecast.date}
              icon={forecast.icon}
              temperatureMax={forecast.temperature.max}
              description={forecast.description}
              onSelect={props.onForecastSelect}
            />
          ))
    }
  </div>
);

export default ForecastSummaries;
