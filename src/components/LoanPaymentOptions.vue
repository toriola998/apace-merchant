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
                <label class="form-check-label" for="">&nbsp;Repayment options</label>
              </div>
              <div class="form-group mt-5">
                <img src="@/assets/img/dot.png" alt="no image" style="width: 10px;" class="img mr-1 mb-1"><label class="ml-0 color-white" for="">Default</label>
              </div>
              <div class="form-group mt-4">
                <img src="@/assets/img/dot.png" alt="no image" style="width: 10px;" class="img mr-1 mb-1"><label class="color-white mt-2 ml-0" for="">Special option</label>
              </div>
              <div class="form-group mt-4">
                <button class="btn button-purpole"><span class="fa fa-plus"></span>&nbsp;Add new option</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
export default {
  name: 'LoanPaymentOptions',
  components: {
    SideNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
