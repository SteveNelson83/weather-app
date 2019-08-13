import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('<ForecastSummary/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
  });

  it('renders the date', () => {
    const text = wrapper.find('.date').text();
    expect(text).toEqual('mockDate');
  });
  it('renders the temperature', () => {
    const text = wrapper.find('.temperature').text();
    expect(text).toEqual('mockTemperature');
  });
  it('renders the description', () => {
    const text = wrapper.find('.description').text();
    expect(text).toEqual('mockDescription');
  });
  it('renders the icon', () => {
    const text = wrapper.find('.icon').text();
    expect(text).toEqual('mockIcon');
  });
});
