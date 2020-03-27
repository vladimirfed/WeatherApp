import React from "react";
import "./App.css";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const APIkey = "5a978eed6d2868030bca6123405352c1";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiURL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    );
    const data = await apiURL.json();

    if (city) {
      const apiURL = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
      const data = await apiURL.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var sunrise = data.sys.sunrise;
      var date = new Date();
      date.setTime(sunrise);
      var sunrise_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var temp = data.main.temp - 273;
      var temp = temp.toFixed(1);

      this.setState({
        temp: temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: "Check the name of your city"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5">
              <Info />
            </div>
            <div className="col-xs-7">
              <Form weatherMethod={this.gettingWeather} />
              <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
