//chart 1
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
          ]);

  var options = {
            pieHole: 0.4,
            legend: {position: 'right',alignment: 'center', textStyle: {color: 'lightGray', fontSize: 12}},
            pieSliceText: 'none',
            backgroundColor: 'transparent',
          };
  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);
}


// chart 2
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {

    var data = google.visualization.arrayToDataTable([
          ['Day', 'Sales', 'Expenses', 'Purchase'],
          ['Mon',  3.8, 0.8, 1.8],
          ['Tue',  30.9, 69.5, 32.4],
          ['Wed',  25.4,   57, 25.7],
          ['Thu',  11.7, 18.8, 10.5],
          ['Fri',  11.9, 17.6, 10.4],
          ['Sat',   8.8, 13.6,  7.9],
          ['Sun',   7.6, 12.3,  9.6],
        ]);
    var options = {
          legend: {position: 'top',alignment: 'left', textStyle: {color: 'white', fontSize: 12}},
          backgroundColor: 'transparent',
          hAxis: {
            textStyle:{color: 'white'}
          },
          vAxis: {
            textStyle:{color: 'white'}
          },
        };
    var chart = new google.visualization.LineChart(document.getElementById('chart2'));
    chart.draw(data, options);
}


// chart 3
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {

    var data = google.visualization.arrayToDataTable([
          ['Day', 'Sales', 'Expenses', 'Purchase'],
          ['Mon',  3.8, 0.8, 1.8],
          ['Tue',  30.9, 69.5, 32.4],
          ['Wed',  25.4,   57, 25.7],
          ['Thu',  11.7, 18.8, 10.5],
          ['Fri',  11.9, 17.6, 10.4],
          ['Sat',   8.8, 13.6,  7.9],
          ['Sun',   7.6, 12.3,  9.6],
        ]);
    var options = {
          legend: {position: 'top',alignment: 'left', textStyle: {color: 'white', fontSize: 12}},
          backgroundColor: 'transparent',
          hAxis: {
            textStyle:{color: 'white'}
          },
          vAxis: {
            textStyle:{color: 'white'}
          },
        };
    var chart = new google.visualization.LineChart(document.getElementById('chart3'));
    chart.draw(data, options);
}


//chart 4
google.charts.setOnLoadCallback(drawChart4);
function drawChart4() {
  var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
          ]);

  var options = {
            pieHole: 0.4,
            legend: {position: 'right',alignment: 'center', textStyle: {color: 'lightGray', fontSize: 12}},
            pieSliceText: 'none',
            backgroundColor: 'transparent',
          };
  var chart = new google.visualization.PieChart(document.getElementById('chart4'));
  chart.draw(data, options);
}

//chart 7
google.charts.setOnLoadCallback(drawChart7);
function drawChart7() {
  var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
          ]);

  var options = {
            pieHole: 0.4,
            legend: {position: 'right',alignment: 'center', textStyle: {color: 'lightGray', fontSize: 12}},
            pieSliceText: 'none',
            backgroundColor: 'transparent',
          };
  var chart = new google.visualization.PieChart(document.getElementById('chart7'));
  chart.draw(data, options);
}






// chart 5
var ctx = document.getElementById("chart5");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 1',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              fontSize: 10,
              // beginAtZero: true
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


// chart 6
var ctx = document.getElementById("chart6");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 2',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


// chart 8
var ctx = document.getElementById("chart8");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 3',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});



// chart 9
var ctx = document.getElementById("chart9");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 4',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


// chart 10
var ctx = document.getElementById("chart10");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 4',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});



// chart 11
var ctx = document.getElementById("chart11");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 4',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


// chart 12
var ctx = document.getElementById("chart12");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 4',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


// chart 13
var ctx = document.getElementById("chart13");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
        datasets: [{
            label: 'Series 4',
            data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811],
            fill: true,
            borderColor: '#F0874A',
            backgroundColor: '#F0874A',
            borderWidth: 1,
            color: 'white',
        },
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          labels: {
            fontColor: "white",
            // fontSize: 18
          }
        },
        scales: { 
          yAxes: [{
            ticks: {
              fontColor: "white",
              // stepSize: 1,
              // beginAtZero: true
              fontSize: 10,
             }
          }],
          xAxes: [{
              ticks: {
              fontColor: "white",
              fontSize: 10,
              // stepSize: 1,
              // beginAtZero: true
            }
          }]
        }
    }
});


