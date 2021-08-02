import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <form id="search-form" class="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                id="city-input"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>

      <h1 id="city">Oslo</h1>
      <span className="country" id="country">
        NO{" "}
      </span>
      <h2 id="date">19/07/21</h2>
      <div className="row">
        <div className="col-6">
          <div className="clearfix current-temp">
            <img
              className="float-left"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              id="icon"
              alt="Weather Icon"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="float-left weather-temp">
        <strong id="temperature"> </strong>
        <span className="unit">
          <a href="#" id="celsius-link" class="active">
            •c
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            •f
          </a>
        </span>
      </div>
      <div className="col-6">
        <ul>
          <li>
            <span id="description"></span>
          </li>
          <li>
            Wind Speed: 20<span id="wind"></span> km/h
          </li>
          <li>
            Humidity: 80<span id="humidity"></span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
