import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div className="top__p">
          <p className="city">{data.city}</p>
          <p className="weather__desc">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather__icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          <div className="parameter__row">
            <span className="parameter__label top">Details</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Feels like </span>
            <span className="parameter__value">
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Wind</span>
            <span className="parameter__value">
              {Math.round(data.wind.speed)} mph
            </span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Humidity</span>
            <span className="parameter__value">%{data.main.humidity}</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Pressure</span>
            <span className="parameter__value">
              {Math.round(data.main.pressure / 33.867)} in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
