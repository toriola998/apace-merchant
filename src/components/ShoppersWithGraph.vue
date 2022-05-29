<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 pb-2 ml-5">
        <div class="col-md-9 col-9">
          <h5 class="color-white mt-1 mb-0">Money</h5>
        </div>
        <div class="col-md-3 col-3">
          <button class="btn btn-outline-dark ml-3 f-12">
            <img src="@/assets/img/imgex.png" style="width: 16px;">
            Export all data
          </button>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">





      <div class="row pt-2 ml-5">
        <div class="col-md-6 col-lg-9">
          <label class="text-label color-white mr-1 ml-1">Inflows</label>
          <select class="btn btn-outline-primary dropddown-a">
            <option>All time</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-dark ml-6 f-12">
            <img src="@/assets/img/imgex.png" style="width: 16px;">
            Export data
          </button>
        </div>
      </div>





      <div class="row pt-2 ml-5 mr-3">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          
          <div class="div-6">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-7">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <select class="btn btn-outline-primary dropddown-a f-12">
                    <option>1+ selected</option>
                  </select>
                  <i class="fa fa-ellipsis-v mr-1 color-white mt-2" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart5" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          
          <div class="div-6 mr-3">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-8">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-3">
                  <select class="btn btn-outline-primary dropddown-a f-12">
                    <option>All</option>
                  </select>
                  <i class="fa fa-ellipsis-v mr-1 color-white mt-2" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart6" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>
      </div>





      <div class="row pt-2 ml-6 mr-6">
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-2 mt-2 px-0">
          
          <div class="div-6 mr-1">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-5">
                  <select class="btn btn-outline-primary dropddown-a f-12">
                    <option>1+ selected</option>
                  </select>
                  <i class="fa fa-ellipsis-v mr-1 color-white mt-2" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart8" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>


        <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-2 mt-2 px-0">
          
          <div class="div-6 mr-1">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-5">
                  <select class="btn btn-outline-primary dropddown-a f-12">
                    <option>1+ selected</option>
                  </select>
                  <i class="fa fa-ellipsis-v mr-1 color-white mt-2" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart9" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>


        <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-2 mt-2 px-0">
          
          <div class="div-6 mr-1">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-5">
                  <select class="btn btn-outline-primary dropddown-a f-12">
                    <option>1+ selected</option>
                  </select>
                  <i class="fa fa-ellipsis-v mr-1 color-white mt-2" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart10" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>
      </div>










      <div class="row pt-2 ml-5">
        <div class="col-md-6 col-lg-9">
          <label class="text-label color-white mr-1 ml-1">Outflows</label>
          <select class="btn btn-outline-primary dropddown-a">
            <option>All time</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-dark ml-6 f-12">
            <img src="@/assets/img/imgex.png" style="width: 16px;">
            Export data
          </button>
        </div>
      </div>





      <div class="row text-md-left ml-6 mr-6">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          
          <div class="div-6">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-7">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <i class="fa fa-ellipsis-v mr-1 color-white" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart11" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
          <div class="div-6 mt-2">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-7">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <i class="fa fa-ellipsis-v mr-1 color-white" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart12" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          

          <div class="div-6">


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <div id="chart2" class="chart" style="height: 500px;"></div>
                </div>
              </div>
            </div>
        </div>
      </div>


















            <div class="row pt-2 ml-5">
        <div class="col-md-6 col-lg-9">
          <label class="text-label color-white mr-1 ml-1">Counts</label>
          <select class="btn btn-outline-primary dropddown-a">
            <option>All time</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-dark ml-6 f-12">
            <img src="@/assets/img/imgex.png" style="width: 16px;">
            Export data
          </button>
        </div>
      </div>





      <div class="row text-md-left ml-6 mr-6">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          
          <div class="div-6">
              <div class="row">
                <div class="col-2 col-md-2 col-lg-1">
                  <i class="fa fa-youtube-play color-white ml-1 mt-3"></i>
                </div>
                <div class="col-6 col-md-6 col-lg-7">
                  <label class="text-p f-10">Most money in</label>
                  <p class="text-p f-12 mb-0 color-white">
                    <span class="f-8">N</span> 289,750 <span class="f-8">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <i class="fa fa-ellipsis-v mr-1 color-white" style="float: right;"></i>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <canvas id="chart13" class="chart" style="height: 180px;"></canvas>
                </div>
              </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-2 mt-2">
          <div class="div-6">
              <div class="row">
                <div class="col-8 col-md-8 col-lg-8">
                  <h6 class="text-p ml-1">Data</h6>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <i class="fa fa-ellipsis-v mr-1 color-white" style="float: right;"></i>
                </div>
              </div>

              <div class="row mt-2 mb-2">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Most abandoned cart</span>
                  <div class="bar" style="width: 20%;"></div>
                  <span class="color-white f-14">5,000</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-2 mb-2">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Most loan success</span>
                  <div class="bar" style="width: 40%;"></div>
                  <span class="color-white f-14">5,000</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-2 mb-2">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Most loan defaults</span>
                  <div class="bar" style="width: 10%;"></div>
                  <span class="color-white f-14">3,500</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-2 mb-2">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Most loan defaults</span>
                  <div class="bar" style="width: 10%;"></div>
                  <span class="color-white f-14">3,500</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-2 mb-2">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Most loan defaults</span>
                  <div class="bar" style="width: 10%;"></div>
                  <span class="color-white f-14">3,500</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">


            </div>
        </div>
      </div>


      <div class="row text-md-left ml-6 mr-6 mt-4">
        <div class="row">
          <div class="col-2 col-lg-1">
            <h5 class="color-white mt-1">History</h5>
          </div>
          <div class="col-10 col-lg-11">
            <select class="btn btn-outline-primary dropddown-a">
              <option>All time</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row text-md-left ml-6 mr-6">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-2">
          <table class="table table-responsive mt-2 cus-table">
            <thead class="thead">
              <tr>
                <td style="width: 10%;">Date</td>
                <td style="width: 15%;">Amount</td>
                <td style="width: 15%;">Type</td>
                <td style="width: 15%;">Origin</td>
                <td style="width: 10%;">Destination</td>
                <td style="width: 20%;">Description</td>
                <td style="width: 15%;">Status</td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 30,750.00</td>
                <td><i class="fa fa-arrow-right"></i>&nbsp;Inflow</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-left"></i>&nbsp;Overflow</td>
                <td>Apace</td>
                <td>Gadget house</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-left"></i>&nbsp;Overflow</td>
                <td>Apace</td>
                <td>Baggu store</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-right"></i>&nbsp;Inflow</td>
                <td>Dunder Mifflin</td>
                <td>Apace</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-right"></i>&nbsp;Inflow</td>
                <td>Gas water co.</td>
                <td>Apace</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-right"></i>&nbsp;Inflow</td>
                <td>Office supply co.</td>
                <td>Apace</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white">N 1,000,000.00</td>
                <td><i class="fa fa-arrow-left"></i>&nbsp;Overflow</td>
                <td>Apace</td>
                <td>Shoes ‘r’ us</td>
                <td>Air plant food truck quinoa ce...</td>
                <td><i class="fa fa-circle mr-1 color-red f-8"></i>Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'ShoppersWithGraph',
  mounted() {
      this.chart();
  },
  methods: {
    chart() {
      google.charts.load("current", {packages:["corechart"]});
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
