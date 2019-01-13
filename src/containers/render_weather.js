import React, { Component } from 'react';
import { connect } from 'react-redux';

class RenderWeather extends Component {
  constructor(props) {
    super(props);

    this.showWeatherInfo = this.showWeatherInfo.bind(this);
  }

  showWeatherInfo(data) {
    if (!data) {
      return;
    }
    const cityName = data.city.name;
    const cityCoord = data.city.coord;
    const cityLong = cityCoord.lon;
    const cityLat = cityCoord.lat;

    const temp = data.list[0].main.temp;
    const maxTemp = data.list[0].main.temp_max;
    const minTemp = data.list[0].main.temp_min;
    const pressure = data.list[0].main.pressure;
    const humidity = data.list[0].main.humidity;

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>{cityLong}</td>
        <td>{cityLat}</td>
        <td>{Math.round((temp - 273) * 100) / 100}</td>
        <td>{Math.round((maxTemp - 273) * 100) / 100}</td>
        <td>{Math.round((minTemp - 273) * 100) / 100}</td>
        <td>{pressure}</td>
        <td>{humidity}</td>
      </tr>
    );
  }

  render() {
    const { weather } = this.props;
    return (
      <div className="container">
        <div className="jumbotron m-5">
          <table className="table table-dark mt-5">
            <thead>
              <tr>
                <th>City Name :</th>
                <th>[ Longiture</th>
                <th>Latitude ]</th>
                <th>[ Temp</th>
                <th>max-Temp</th>
                <th>min-Temp ](C)</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </thead>

            <tbody>{weather.map(this.showWeatherInfo)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ weatherInfo }) => {
  return { weather: weatherInfo };
};

export default connect(mapStateToProps)(RenderWeather);
