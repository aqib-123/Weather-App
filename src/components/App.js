import React from 'react';
import SeachBar from '../containers/search_bar';
import RenderWeather from '../containers/render_weather';

const App = () => {
  return (
    <div className="App">
      <SeachBar />
      <RenderWeather />
    </div>
  );
};
export default App;
