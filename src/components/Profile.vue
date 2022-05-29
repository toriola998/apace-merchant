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
                <label class="form-check-label" for="">Personal information</label>
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">First name*</label>
                <input type="text" class="form-control txt" id="" value="Sarah">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Last name*</label>
                <input type="text" class="form-control txt" id="" value="Ajene">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Date of birth (DD/MM/YYYY)*</label>
                <input type="date" class="form-control txt" id="" value="">
                <span class="text-muted ml-2">Should match the date on valid ID</span>
              </div>
              <div class="form-group mt-6">
                <label class="form-check-label" for="">Email</label>
              </div>
              <div class="form-group mt-4">
                <p class="text-muted mb-0">Primary email</p>
              </div>
              <div class="form-group">
                <p class="color-white">jamesdean@useapace.com</p>
              </div>
              <div class="form-group mt-4">
                <p class="text-white">james.de@useapace.com &nbsp;<span class="text ml-2" style="font-size: 14px;">Set as primary email</span></p>
              </div>
              <div class="form-group mt-4">
                <p class="text-white">jimmydean@useapace.com <span class="text ml-1" style="font-size: 14px;">Set as primary email</span></p>
              </div>
              <div class="form-group mt-4">
                <p class="text-white">iamjimmy@useapace.com <span class="text ml-2" style="font-size: 14px;">Set as primary email</span></p>
              </div>


              <div class="form-group mt-4">
                <button type="button" class="btn button-purpole" data-toggle="modal" data-target="#myModal"><span class="fa fa-plus"></span>&nbsp;Add new email</button>
              </div>
              <div class="form-group mt-6">
                <label class="form-check-label" for="">Password</label>
              </div>
              <div class="input-group mt-4">
                <label for="" class="txt-label" style="z-index: 1; top: 2px;">Current password</label>
                <input type="password" class="form-control txt" id="" value="12345678" placeholder="Current Password">
              </div>
              <div class="input-group mt-4">
                <input type="password" class="form-control txt" id="" value="" placeholder="New password" style="border-right: none;">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fa fa-eye"></i></span>
                </div>
              </div>
              <div class="input-group mt-4">
                <input type="password" class="form-control txt" id="" value="" placeholder="Confirm password" style="border-right: none;">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fa fa-eye"></i></span>
                </div>
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
            <!-- Modal content-->
            <div class="row text-md-left ml-5 mr-6 mt-3">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mb-3">
          <div class="card" style="width: 100%;border-radius: 10px;">
            <div class="card-header card-header-popup color-white">
              <div class="row">
                <div class="col-10">Add new email</div>
                <div class="col-2">
                  <button class="cross-btn color-white">X</button>
                </div>
              </div>
            </div>
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg">Email address</label>
                    <input type="text" class="form-control txt bg" id="" value="jme.dean@useapace.com" autofocus>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer card-footer-popup">
              <div class="row justify-content-md-center">
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
  name: 'Profile',
  components: {
    SideNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
