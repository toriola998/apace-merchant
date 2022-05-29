<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5 mb-2">
        <div class="col-md-6">
          <h4 class="color-white">Transactions</h4>
        </div>
        <div class="col-md-6 text-end">
          <button class="btn btn-outline-dark" style="font-size: 14px;">
            <img src="@/assets/img/imgex.png" style="width: 18px;">
            Export all data
          </button>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">

      <div class="row pt-2 ml-5">
        <div class="col-md-12 col-lg-10">
          <div class="dropdown">
            <button class="mt-1 btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-filter"></i> Filter
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Amount: Ascending <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Type <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Destination <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Status <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Status: Active <i class="fa fa-close"></i></button>

            <a class="text-label" style="color: #DE5770;text-decoration: none;">Reset filters</a>
          </div>
        </div>
        <div class="col-md-12 col-lg-2 mt-1">
          <span class="color-white">Page</span> <span class="badge rounded-pill bg-secondary">10</span>
          <i class="fa fa-arrow-left ml-1"></i>
          <i class="fa fa-arrow-right ml-1 mr-2 color-white"></i>
        </div>
      </div>
      <div class="row text-md-left ml-6">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
          <table class="table table-responsive mt-4 cus-table">
            <thead class="thead">
              <tr>
                <td style="width: 10%;">Date</td>
                <td style="width: 10%;">Amount</td>
                <td style="width: 10%;">Type</td>
                <td style="width: 10%;">Origin</td>
                <td style="width: 15%;">Destination</td>
                <td style="width: 15%;">Deal flow</td>
                <td style="width: 15%;">Description</td>
                <td style="width: 10%;">Status</td>
                <td style="width: 5%;"></td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 30,750.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>4 Oct 2021</td>
                <td class="color-white"><b>N 1,000,000.00</b></td>
                <td>Purchase</td>
                <td>Coffee cuppa</td>
                <td>Apace</td>
                <td>Merchant - Apace</td>
                <td>Air plant food tr...</td>
                <td class="color-white"><i class="fa fa-circle mr-1 color-yellow f-8"></i>In-progress</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
            </tbody>
            <tfoot class="tfoot">
              <tr>
                <td colspan="6" style="border-bottom: none;">1 - 10 of 30</td>
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
  name: 'Transactions'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
