<template>
  <div>
     <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-6">
          <h4 class="color-white">New user</h4>
        </div>
        <div class="col-md-6 text-end">
          <button class="btn btn-outline-dark" style="opacity: 0.5;">Cancle</button>
          <button class="btn btn-warning" style="opacity: 0.5;">Save</button>
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
                <input type="text" class="form-control txt" id="" value="Title">
              </div>
              <div class="form-group mt-4">
                <textarea rows="5" type="text" class="form-control txt" id="">Description</textarea>
              </div>
              <div class="form-group mt-4">
                <label class="form-check-label" for="">Permissions (full access to)</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Admins</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="">
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Payments</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="">
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Merchants</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Shoppers</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Limits & Plans</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="">
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Roles & Permissions</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Activity logs</label>
              </div>
              <div class="form-check form-switch mt-3 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" style="font-size: 16px;margin-top: 3px;" for="">Reports</label>
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
  name: 'NewRolePermission'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
