<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-3 pb-3 ml-5">
        <div class="col-md-1">
          <div class="bg-color-white he">
            PA
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <h4 class="color-white mb-0">Personal Apacers</h4>
          <label class="text-label color-light-gray mt-0">200,000 members</label>
        </div>
        <div class="col-md-6 text-end mt-4">
          <img src="@/assets/img/img2.png" style="width: 18px;">&nbsp;
          <label class="text-label color-white mr-3" for="">Send message</label>
          <i class="fa fa-pencil color-white"></i>&nbsp;
          <label class="text-label color-white" for="">Edit group</label>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">

      <div class="row pt-2 ml-5">
        <div class="col-md-12 col-lg-8">
          <div class="dropdown">
            <button class="mt-1 btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-filter"></i> Filter
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Most business volume <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Current active <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Dormant <i class="fa fa-close"></i></button>

            <button class="btn mt-1 btn-outline-dark color-light-gray border">Drop-offs <i class="fa fa-close"></i></button>
          </div>
        </div>
        <div class="col-md-12 col-lg-4 text-end mt-1">
          <a class="text-label" style="color: #DE5770;text-decoration: none;" for="">Reset filters</a>
        </div>
      </div>
      <div class="row text-md-left ml-6">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
          <table class="table table-responsive mt-4 cus-table">
            <thead class="thead">
              <tr>
                <td style="width: 5%;">S/N</td>
                <td style="width: 45%;">Business name</td>
                <td style="width: 30%;">Date joined</td>
                <td style="width: 20%;">Status</td>
                <td style="width: 10%;">Actions</td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td>01</td>
                <td>
                  <img src="@/assets/img/imgt1.png" style="width: 30px;" alt="no image" class="mr-1">Olaoluwa Tosin
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  <img src="@/assets/img/imgt2.png" style="width: 30px;" alt="no image" class="mr-1">Muhammed Shuwa
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-purpole"></i>Frozen</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>
                  <img src="@/assets/img/imgt3.png" style="width: 30px;" alt="no image" class="mr-1">Ayo Fayose
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>
                  <img src="@/assets/img/imgt4.png" style="width: 30px;" alt="no image" class="mr-1">Babatunde Raji Fashola
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  <img src="@/assets/img/imgt5.png" style="width: 30px;" alt="no image" class="mr-1">Rotimi Amaechi
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  <img src="@/assets/img/imgt6.png" style="width: 30px;" alt="no image" class="mr-1">Chimdaalu Daniel
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>
                  <img src="@/assets/img/imgt7.png" style="width: 30px;" alt="no image" class="mr-1">Olawale  Abiodun
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  <img src="@/assets/img/imgt8.png" style="width: 30px;" alt="no image" class="mr-1">Vivian Aguoma
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>
                  <img src="@/assets/img/imgt9.png" style="width: 30px;" alt="no image" class="mr-1">David Okoh
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <img src="@/assets/img/imgt9.png" style="width: 30px;" alt="no image" class="mr-1">Chinedu Ejike
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
            </tbody>
            <tfoot class="tfoot">
              <tr>
                <td colspan="3" style="border-bottom: none;">1 - 10 of 30</td>
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
  name: 'GroupPageShopper'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
