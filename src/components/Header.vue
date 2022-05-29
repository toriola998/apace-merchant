<template>
  <div>
    <header class="bg-dark">
      <div class="container-fluid">
        <div class="row">
          <div class="text-center col-md-4 col-lg-4 col-xl-4 mx-auto mt-1">
            <h2 class="color">apace</h2>
          </div>

          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
            <div class="form-group has-search pt-1 mt-2">
              <span class="fa fa-search form-control-feedback-search"></span>
              <input type="text" class="form-control-search form-control gray" placeholder="Search">
            </div>
          </div>

          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
            <div class="row pt-1 mt-2">
              <div class="col-4 col-md-6 col-lg-6 col-xl-6 mx-auto">
                <button class="btn btn-warning button"><span class="fa fa-plus"></span>&nbsp;Add new</button>
              </div>
              <div class="col-4 col-md-2 col-lg-2 col-xl-2 mx-auto text-center">
                <a href="#" class="notification">
                  <span class="fa fa-bell"></span>
                  <span class="badge">3</span>
                </a>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4 mx-auto px-0">
                <img src="@/assets/img/profile.png" alt="no image" class="profile-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
