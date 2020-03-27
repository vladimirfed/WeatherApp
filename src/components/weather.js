import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div>
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
            <p>Tempriture: {this.props.temp}</p>
            <p>Sunrise: {this.props.sunrise}</p>
            <p>Sunset: {this.props.sunset}</p>
          </div>
        )}
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
