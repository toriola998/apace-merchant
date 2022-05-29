<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-5 px-0 ml-2">
          <img src="@/assets/img/imgt.png" style="width: 50px;">
          <label class="color-white mt-1 mb-0">Coffee cuppa</label>
        </div>
        <div class="col-md-6 text-end mt-2">
          <img src="@/assets/img/img2.png" style="width: 18px;">&nbsp;
          <label class="text-label color-white mr-1" for="">Send message</label>
          <img src="@/assets/img/img3.png" style="width: 12px;">&nbsp;
          <label class="text-label color-white mr-1" for="">Freeze</label>
          <img src="@/assets/img/img1.png" style="width: 20px;">&nbsp;
          <label class="text-label color-white mr-1" for="">Set fee</label>
          <i class="fa fa-user-plus color-white" style="width: 15px;"></i>&nbsp;
          <label class="text-label color-white" for="">Add to group</label>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">












      <div class="row pt-2 ml-5">
        <div class="col-md-6 col-lg-9">
          <label class="text-label color-white mr-1 ml-1">Activity</label>
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

      
      <div class="row text-md-left ml-6 mr-6 mt-4">
        <div class="col-6 col-md-6 col-lg-10">
          <h4 class="color-white">Transactions</h4>
        </div>
        <div class="col-6 col-md-2">
          <button class="btn btn-outline-dark ml-6" style="font-size: 14px;">
            View all
          </button>
        </div>
      </div>
      <div class="row text-md-left ml-6 mr-6">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
          <table class="table table-responsive mt-2 cus-table">
            <thead class="thead">
              <tr>
                <td style="width: 10%;">Date</td>
                <td style="width: 15%;">Store name</td>
                <td style="width: 25%;">Merchant name</td>
                <td style="width: 20%;">Transaction amount</td>
                <td style="width: 20%;">Shopper name</td>
                <td style="width: 10%;">Status</td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Gadget house</td>
                <td class="color-white">N 30,750.00</td>
                <td>Adunoluwa Adeyemi</td>
                <td><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Travel lite</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Michael Biyibi</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Home buddy</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Yusuf Amadu</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Furniture place</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Victor James</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Pharm co.</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Michael Dada</td>
                <td><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Office supply co.</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Ayomide Oladele</td>
                <td><i class="fa fa-circle mr-1 color-green f-8"></i>Completed</td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td>Coffee cuppa</td>
                <td>Likwid</td>
                <td class="color-white">N 1,000,000.00</td>
                <td>Joseph Ike</td>
                <td><i class="fa fa-circle mr-1 color-red f-8"></i>Cancelled</td>
              </tr>
            </tbody>
            <tfoot class="tfoot">
              <tr>
                <td colspan="4" style="border-bottom: none;">1 - 10 of 30</td>
                <td colspan="2" style="border-bottom: none;" class="text-end">
                  Page <span class="badge rounded-pill bg-secondary">10</span>
                  <i class="fa fa-arrow-left ml-1"></i>
                  <i class="fa fa-arrow-right ml-1 mr-2"></i>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'MarchantDetail',
  mounted() {
      this.chart();
  },
  methods: {
    chart() {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
