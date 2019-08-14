import React from 'react';
import Enzyme from 'enzyme';
import ForecastDetails from '../../src/components/forecast-details';

describe('<ForecastDetails/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.shallow((
      <ForecastDetails
        date={1525046400000}
        maxTemp="mockMaxTemp"
        minTemp="mockMinTemp"
        humidity="mockHumidity"
        windSpeed="mockWindSpeed"
      />
    ));
  });
  it('renders the date in correct format', () => {
    const text = wrapper.find('.date').text();
    expect(text).toEqual('Mon 30th Apr');
  });
  it('renders the max temperature', () => {
    const text = wrapper.find('.maxTemp').text();
    expect(text).toEqual('mockMaxTemp');
  });
  it('renders the min temperature', () => {
    const text = wrapper.find('.minTemp').text();
    expect(text).toEqual('mockMinTemp');
  });
  it('renders the humidity', () => {
    const text = wrapper.find('.humidity').text();
    expect(text).toEqual('mockHumidity');
  });
});
