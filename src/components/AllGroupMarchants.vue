
<template>
  <div>
    <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-6">
          <h4 class="color-white">Groups</h4>
        </div>
        <div class="col-md-6 text-end">
          <img src="@/assets/img/img2.png" style="width: 18px;">&nbsp;
          <label class="text-label color-white mr-3" for="">Send message</label>
          <i class="fa fa-user-plus color-white" style="width: 12px;"></i>
          <label class="text-label color-white mr-1" for=""> &nbsp;&nbsp;Add group</label>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">

      <div class="row pt-2 ml-5">
        <div class="col-md-6">
          <div class="dropdown">
            <button class="btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-filter"></i> Filter
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
            <button class="btn mt-1 btn-outline-dark color-light-gray border">Merchants <i class="fa fa-close"></i></button>
          </div>
        </div>
        <div class="col-md-6 mt-1 text-end">
          <a class="text-label" style="color: #DE5770;text-decoration: none;" for="">Reset filters</a>
        </div>
      </div>
      <div class="row text-md-left ml-5 mt-3">
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="row mt-2">
                <div class="col-md-2">
                  <div class="bg-color-white he-card">
                    <b>SM</b>
                  </div>
                </div>
                <div class="col-md-10">
                  <p class="mb-0 f-12 ml-2 color-light-gray">Special Merchants</p>
                  <label class="text-label ml-2 color-white">6,245</label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12 text-end">
                  <a href="#"><i class="fa fa-arrow-right color-light-gray"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="row mt-2">
                <div class="col-md-2">
                  <div class="bg-color-white he-card">
                    <b>1M</b>
                  </div>
                </div>
                <div class="col-md-10">
                  <p class="mb-0 f-12 ml-2 color-light-gray">10+ Merchants</p>
                  <label class="text-label ml-2 color-white">10,000</label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12 text-end">
                  <a href="#"><i class="fa fa-arrow-right color-light-gray"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="row mt-2">
                <div class="col-md-2">
                  <div class="bg-color-white he-card">
                    <b>PM</b>
                  </div>
                </div>
                <div class="col-md-10">
                  <p class="mb-0 f-12 ml-2 color-light-gray">Premium Merchants</p>
                  <label class="text-label ml-2 color-white">129</label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12 text-end">
                  <a href="#"><i class="fa fa-arrow-right color-light-gray"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="row mt-2">
                <div class="col-md-2">
                  <div class="bg-color-white he-card">
                    <b>HE</b>
                  </div>
                </div>
                <div class="col-md-10">
                  <p class="mb-0 f-12 ml-2 color-light-gray">High Earning Mercha...</p>
                  <label class="text-label ml-2 color-white">40,000</label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12 text-end">
                  <a href="#"><i class="fa fa-arrow-right color-light-gray"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="row mt-2">
                <div class="col-md-2">
                  <div class="bg-color-white he-card">
                    <b>LM</b>
                  </div>
                </div>
                <div class="col-md-10">
                  <p class="mb-0 f-12 ml-2 color-light-gray">Lagos Merchants</p>
                  <label class="text-label ml-2 color-white">400,000</label>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12 text-end">
                  <a href="#"><i class="fa fa-arrow-right color-light-gray"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: black;margin-top: 150px;">&nbsp;</div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'AllGroupMarchants'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
