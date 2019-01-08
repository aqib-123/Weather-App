import React, { Component } from 'react';
import SeachBar from '../containers/search_bar';
import RenderWeather from '../containers/render_weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeachBar/>
        <RenderWeather/>
     
      </div>
    );
  }
}

export default App;
