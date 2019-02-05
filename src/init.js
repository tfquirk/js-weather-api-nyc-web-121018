document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.querySelector("#NYCWeatherChart").getContext("2d")
  const API_KEY = "1ae985f83216d97067226cb05d0de9b4";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const DARK_SKY_BASE = "https://api.darksky.net/"
  const URL = `${CORS_WRAPPER}${DARK_SKY_BASE}/forecast/${API_KEY}/40.7127,-74.0059?exclude=currently,minutely,daily`

  // makeRequest fetches to DarkSky and appends the chart to the DOM
  makeRequest(URL, ctx)
});
