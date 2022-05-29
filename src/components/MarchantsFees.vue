<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-12">
          <h4 class="color-white">Settings</h4>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">
      <div class="row">

          <SideNav />
        <div class="col-md-6 col-lg-8 col-xl-8 px-0">
          <div class="ml-4 mr-4 mb-4">
            <form>
              <div class="form-group mt-6">
                <label class="form-check-label" for="">Merchant fees</label><br>
                <label class="ml-0 color-gray" style="font-size: 14px;" for="">Set and apply a fees structure for merchants.</label>
              </div>
              <div class="form-group mt-4">
                <label class="ml-0 text-warning" for="">Apace Merchant</label><br>
                <label class="ml-0 color-gray" for="">Set and apply a fees structure for merchants.</label>
              </div>
              <div class="form-group mt-4">
                <label class="form-check-label" for="">2% capped at  N 2,000.00</label>
              </div>
              <div class="form-group mt-4">
                <button class="btn button-purpole" type="button" data-toggle="modal" data-target="#myModal"><span class="fa fa-plus"></span>&nbsp;Add new fee</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  </section>



<!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body">
              <div class="container-fluid">

                <div class="row text-md-left mt-3">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mb-3">
          <div class="card" style="width: 100%;border-radius: 10px;">
            <div class="card-header card-header-popup color-white">
              <div class="row">
                <div class="col-11">Add new fee</div>
                <div class="col-1">
                  <button class="cross-btn color-white">X</button>
                </div>
              </div>
            </div>
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-group mt-4">
                    <input type="text" class="form-control txt bg" id="" value="Title">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <textarea rows="5" class="form-control txt bg">Description</textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <p class="color-white f-18">Detail</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <input type="text" class="form-control txt bg" id="" value="Number">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg">Weighting (%, number)</label>
                    <input type="text" class="form-control txt bg" id="" value="2">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-2">
                    <input class="form-check-input form-check-input1 f-12" style="margin-top: 10px;" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                    <div class="row pt-1 pb-3">
                      <div class="col-md-12">
                        <label class="text-label color-white mt-0 f-12">Per transaction</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-2">
                    <input class="form-check-input form-check-input1 f-12" style="margin-top: 10px;" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                    <div class="row pt-1 pb-3">
                      <div class="col-md-12">
                        <label class="text-label color-white mt-0 f-12">Per month</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-2">
                    <input class="form-check-input form-check-input1 f-12" style="margin-top: 10px;" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                    <div class="row pt-1 pb-3">
                      <div class="col-md-12">
                        <label class="text-label color-white mt-0 f-12">Per year</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <input type="text" class="form-control txt bg" id="" value="N 2,000.00">
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer card-footer-popup">
              <div class="row justify-content-md-center">
                <div class="col-12 col-md-6 text-center">
                  <button class="btn btn-warning" style="width: 100%;">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

              </div>
            </div>
          </div>
        </div>



  </div>
</template>

<script>
import SideNav from './SideNav.vue'
export default {
  name: 'MarchantsFees',
  components: {
    SideNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
