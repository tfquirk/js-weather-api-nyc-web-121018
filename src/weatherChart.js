function formatHours(hourlyData){
  return hourlyData.map(formatHour)
}

function formatHour(hourData) {
  return new Date(hourData.time * 1000).getHours()
}

function formatFahrenheit(hourlyData){
  return hourlyData.map(h => h.temperature)
}

function generateDataSet(hours, temperatures) {
  return {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "NYC Weather Data",
          data: temperatures,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)"
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  // After your fetch works - use your json data with the line below :)
  fetch(endpoint)
    .then(r => r.json())
    .then(weatherData => {
      const hourlyData = weatherData.hourly.data
      // convert darksky timestamps
      const formattedHours = formatHours(hourlyData)
      // extract temperatures from darksky data
      const formattedTemps = formatFahrenheit(hourlyData)
      // create config object for chart.js
      const chartDataset = generateDataSet(formattedHours, formattedTemps)
      // append the chart to the DOM
      new Chart(canvas, chartDataset)
    })
}
