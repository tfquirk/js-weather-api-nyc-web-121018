document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  // var API_KEY = "Go get an API key";
  const API_KEY = "b032709bcff50e56c7017d8d8ef2234e";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)
});
