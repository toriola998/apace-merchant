<template>
  <div>
     <section class="bg-black">
    <div class="container">
      <div class="row text-md-left ml-6 mr-4">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 mt-2 mb-2">
            <div class="div-6">

              <div class="row">
                <div class="col-8 col-md-8 col-lg-8">
                  <p class="text-p ml-1 f-10">Inflow (Today)</p>
                  <p class="text-p ml-1 f-14 mb-0 color-white">
                    <span class="f-12">N</span> 100,004,000 <span class="f-12">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <div id="chart2" class="chart" style="height: 255px;"></div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-12 col-md-6 col-lg-6 mt-2 mb-2">
            <div class="div-6">
              <div class="row">
                <div class="col-8 col-md-8 col-lg-8">
                  <p class="text-p ml-1 f-10">Outflows (Today)</p>
                  <p class="text-p ml-1 f-14 mb-0 color-white">
                    <span class="f-12">N</span> 100,004,000 <span class="f-12">.76</span>
                  </p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12">
                  <div id="chart3" class="chart" style="height: 255px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row text-md-left ml-6 mr-4">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 mt-2 mb-2">
            <div class="div-6">
              <div class="row">
                <div class="col-8 col-md-8 col-lg-8">
                  <h6 class="text-p ml-1">Business</h6>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Merchants</span>
                  <div class="bar" style="width: 20%;"></div>
                  <span class="color-white f-14">5,000</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Storefronts</span>
                  <div class="bar" style="width: 40%;"></div>
                  <span class="color-white f-14">5,000</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Quick checkouts</span>
                  <div class="bar" style="width: 10%;"></div>
                  <span class="color-white f-14">3,500</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Products</span>
                  <div class="bar" style="width: 60%;"></div>
                  <span class="color-white f-14">100,400</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Shoppers</span>
                  <div class="bar" style="width: 30%;"></div>
                  <span class="color-white f-14">49,864</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">

              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-12 col-lg-12 ml-1">
                  <span class="text-p f-14" style="float: left;">Deals</span>
                  <div class="bar" style="width: 5%;"></div>
                  <span class="color-white f-14">1,010</span>
                </div>
              </div>
              <hr class="mt-1 mb-0">


            </div>
          </div>


          <div class="col-12 col-md-6 col-lg-6 mt-2 mb-2">
            <div class="div-6">
              <div class="row">
                <div class="col-4 col-md-4 col-lg-5">
                  <h6 class="text-p ml-1">Top earning merchants</h6>
                </div>
                <div class="col-4 col-md-4 col-lg-3 px-0">
                  <p class="text-p f-12">Last 7 days</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-12 col-md-6 col-lg-12">
                  <div id="chart1" class="chart" style="height: 255px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-md-left ml-6 mr-4">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="div-6">
              <div class="row">
                <div class="col-4 col-md-4 col-lg-5">
                  <h6 class="text-p ml-1">Top earning merchants</h6>
                </div>
                <div class="col-4 col-md-4 col-lg-3 px-0">
                  <p class="text-p f-12">Last 7 days</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-6 col-md-6 col-lg-6">
                  <p class="text-p ml-1 f-14 mb-1">Merchants</p>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="color-white f-12 mr-3 mb-1">Revenue in</p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Coffee cuppa</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 180,750,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Paper co.</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 175,000,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Dunder mifflin</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 169,290,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Tech space</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 150,050.000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Office supply co.</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 132,800,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Food-to-go</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 125,750,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Gadget house</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-8">N</span> 100,004,000 <span class="f-8">.76</span>
                  </p>
                </div>
              </div>

            </div>
          </div>


          <div class="col-12 col-md-6 col-lg-6">
            <div class="div-6">
              <div class="row">
                <div class="col-4 col-md-4 col-lg-5">
                  <h6 class="text-p ml-1">Most transactions</h6>
                </div>
                <div class="col-4 col-md-4 col-lg-3 px-0">
                  <p class="text-p f-12">Last 7 days</p>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                  <button class="btn btn-outline-dark f-12 mr-1" style="float: right;">
                    See more
                  </button>
                </div>
              </div>


              <div class="row mt-3 mb-0">
                <div class="col-6 col-md-6 col-lg-6">
                  <p class="text-p ml-1 f-14 mb-1">Merchants</p>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="color-white f-12 mr-3 mb-1"># of transactions</p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Computer village</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">2011</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Tech space</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">1900</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Decor</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">1876</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Home buddy</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">912</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Garment spot</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">876</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Flames</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">800</span>
                  </p>
                </div>
              </div>

              <hr class="mt-0 mb-0">
              <div class="row mt-2 mb-2">
                <div class="col-6 col-md-6 col-lg-6">
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1 ml-1">
                  <span class="text-p f-12 mr-3">Baggu</span>
                </div>
                <div class="col-6 col-md-6 col-lg-6 px-0 text-end">
                  <p class="text-p f-12 mr-3 mb-0">
                    <span class="f-12">782</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 50px;overflow-y: hidden;">
        <p style="color: black;">ok</p>
      </div>
    </div>
  </section> 
  </div>
</template>

<script>
export default {
  name: 'Overview',
  mounted() {
      this.chart();
  },
  methods: {
    chart() {
      

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
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
