import React, { Component } from 'react';
import {connect} from 'react-redux';


 class RenderWeather extends Component {

      showWeatherInfo(data){

         if(!data){
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
         return(
            <tr key={cityName}>
               <td scope="col">{cityName}</td>
               <td scope="col">{cityLong}</td>
               <td scope="col">{cityLat}</td>
               <td scope="col">{Math.round((temp-273)* 100) / 100}</td>
               <td scope="col">{Math.round((maxTemp-273)* 100) / 100}</td>
               <td scope="col">{Math.round((minTemp-273)* 100) / 100}</td>
               <td scope="col">{pressure}</td>
               <td scope="col">{humidity}</td>
        
            </tr>

         );
      }




    render() {
       return (
          <div className="container">
          <div className="jumbotron m-5">
            <table className="table table-dark mt-5">
                  <thead>
                        <tr>
                           <th scope="col">City Name :</th>
                           <th scope="col">[ Longiture</th>
                           <th scope="col">Latitude ]</th>
                           <th scope="col">[ Temp</th>
                           <th scope="col">max-Temp</th>
                           <th scope="col">min-Temp ](C)</th>
                           <th scope="col">Pressure</th>
                           <th scope="col">Humidity</th>
                        </tr>
                  </thead>

                  <tbody>
                  {this.props.weather.map(this.showWeatherInfo)}
                  </tbody>
            </table>
         </div>
      </div>
       );
    }
 }


 const mapStateToProps = ({weatherInfo}) => {
    return {weather: weatherInfo};
 }
 
 export default connect(mapStateToProps)(RenderWeather);
