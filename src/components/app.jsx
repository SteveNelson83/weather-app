import React from 'react';

const App = () => <h1>`Hello ${props.name}!`</h1>;

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: 'World',
};

export default App;