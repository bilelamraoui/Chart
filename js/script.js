// Our labels along the x-axis
var years = ["(years)",1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [0,86,114,106,106,107,111,133,221,783,2478];
var asia = [0,282,350,411,502,635,809,947,1402,3700,5267];
var europe = [0,168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [0,40,20,10,16,24,38,74,167,508,784];
var northAmerica = [0,6,3,2,2,7,26,82,172,312,433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        backgroundColor: "brown",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        backgroundColor: "blue",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        backgroundColor: "yellow",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        backgroundColor: "red",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        backgroundColor: "purple",
        fill: false
      }
    ]
  }
});

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        borderColor: "brown",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        borderColor: "blue",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        borderColor: "yellow",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        borderColor: "red",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        borderColor: "purple",
        fill: false
      }
    ]
  }
});

var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa,
        label: "Africa",
        borderColor: "brown",
        fill: false
      },
      { 
        data: asia,
        label: "Asia",
        borderColor: "blue",
        fill: false
      },
      { 
        data: europe,
        label: "Europe",
        borderColor: "yellow",
        fill: false
      },
      { 
        data: latinAmerica,
        label: "Latin America",
        borderColor: "red",
        fill: false
      },
      { 
        data: northAmerica,
        label: "North America",
        borderColor: "purple",
        fill: false
      }
    ]
  }
});