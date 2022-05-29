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
        <div class="col-md-6 col-lg-5 col-xl-5 px-0">
          <div class="ml-4 mr-4 mb-4">
            <form>
              <div class="form-group mt-6">
                <label class="form-check-label" for="">&nbsp;Current limits and plans</label>
              </div>
              <div class="form-group mt-4">
                <img src="@/assets/img/tick.png" alt="no image" class="img mr-1 mb-1"><label class="ml-0 color-white" for="">Personal</label>
              </div>
              <div class="form-group">
                <img src="@/assets/img/tick.png" alt="no image" class="img mr-1 mb-1"><label class="color-white mt-2 ml-0" for="">Plus</label>
              </div>
              <div class="form-group">
                <img src="@/assets/img/tick.png" alt="no image" class="img mr-1 mb-1"><label class="color-white mt-2 ml-0" for="">Pro</label>
              </div>
              <div class="form-group">
                <img src="@/assets/img/tick.png" alt="no image" class="img mr-1 mb-1"><label class="color-white mt-2 ml-0" for="">Premium</label>
              </div>
              <div class="form-group mt-4">
                <button type="button" data-toggle="modal" data-target="#myModal" class="btn button-purpole"><span class="fa fa-plus"></span>&nbsp;Add new plan</button>
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
                <div class="col-11">Edit new plan</div>
                <div class="col-1">
                  <button class="cross-btn color-white">X</button>
                </div>
              </div>
            </div>
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg">Title</label>
                    <input type="text" class="form-control txt bg" id="" value="Personal">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg">Description</label>
                    <textarea rows="5" class="form-control txt bg"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg">Amount</label>
                    <input type="text" class="form-control txt bg" id="" value="N 20,000.00">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <p class="color-white f-18">Requirements</p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-2">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">Selfie</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">First name, Last name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">Address</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">Proof of address</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">BVN</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">NIN</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check form-switch mt-1">
                    <input class="form-check-input f-14" type="checkbox" id="" checked="">
                    <label class="form-check-label f-14" for="">Valid ID</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer card-footer-popup">
              <div class="row justify-content-md-center">
                <div class="col-6 col-md-6 text-center">
                  <button class="col-6 btn btn-outline-dark" style="width: 100%;">Cancle</button>
                </div>
                <div class="col-6 col-md-6 text-center">
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
  name: 'Limits',
  components: {
    SideNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
