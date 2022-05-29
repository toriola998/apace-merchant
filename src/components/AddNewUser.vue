<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-12">
          <h4 class="color-white">New user</h4>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">
      <div class="row text-md-left ml-6 mr-6">
        <div class="col-md-7 col-lg-7 col-xl-7 mx-auto">
          <div class="ml-4 mr-4 mb-4">
            <form>
              <div class="form-group mt-4">
                <label for="" class="txt-label">First name</label>
                <input type="text" class="form-control txt" id="" value="Sarah">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Last name</label>
                <input type="text" class="form-control txt" id="" value="Ajene">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Email address</label>
                <input type="text" class="form-control txt" id="" value="@useapace.com">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Role</label>
                <select class="form-control form-select">
                  <option>Admin</option>
                </select>
              </div>
              <div class="input-group mt-4">
                <input type="password" class="form-control txt" id="" value="" placeholder="Password" style="border-right: none;">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fa fa-eye"></i></span>
                </div>
              </div>


              <div class="form-check mt-6 ml-1">
                <input class="form-check-input" style="background-color: white;color: black;" type="checkbox" id="">
                <label class="form-check-label" style="font-size: 14px;margin-top: 4px;">Force password change <i class="fa fa-info-circle"></i></label>
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
export default {
  name: 'AddNewUser'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
