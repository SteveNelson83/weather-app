/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-box">
        <input type="text" placeholder="enter city here" />
        <br />
        <button type="submit">Get Forecast</button>
      </div>
    );
  }
}

export default SearchBox;
