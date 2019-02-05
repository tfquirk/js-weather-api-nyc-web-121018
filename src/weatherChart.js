let weatherData = []
let hours = []
let fahrenheit = []
let chartDataset;

function formatHours(hourlyData){
  return hourlyData.map( object => {
    return object.time = new Date(object.time * 1000).getHours()
  })
}

function formatFahrenheit(hourlyData){
  return hourlyData.map( object => {
    return Math.round(object.temperature)
  })
}

function generateDataSet(hours, temperatures) {
  return {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: "Temperature",
          data: temperatures,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: "rgb(255, 99, 132)",

        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'NYC Weather Data',
        fontSize: 25
      },
      layout: {
        margin: {
          left: 10,
          right: 20,
          top: 5,
          bottom: 5
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Degrees Fahrenheit'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time - last 48hrs (24hr format)'
          }
        }]
      }
    }
  }
}

function makeRequest(endpoint, canvas) {
  // Your code goes here
  // After your fetch works - format the response using the helper functions above:
  // convert darksky timestamps
  // const formattedHours = formatHours(/*data from darksky*/)
  // extract temperatures from darksky data
  // const formattedTemps = formatFahrenheit(/*data from darksky*/)
  // create config object for chart.js
  // const chartDataset = generateDataSet(formattedHours, formattedTemps)
  // append the chart to the DOM
  // new Chart(canvas, chartDataset)

  fetch(endpoint)
    .then(function(response) {
    return response.json()
  }).then(function(parsed) {
    weatherData = parsed["hourly"]["data"]
    hours = formatHours(weatherData)
    fahrenheit = formatFahrenheit(weatherData)
    chartDataset = generateDataSet(hours, fahrenheit)
    return new Chart(canvas, chartDataset)
  })




} // end makeRequest funct.
