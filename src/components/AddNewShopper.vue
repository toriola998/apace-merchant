<template>
  <div>
    <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-12">
          <h4 class="color-white">New shopper</h4>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">
      <div class="row text-md-left ml-6 mr-6">
        <div class="col-md-12 col-lg-12 col-xl-12">
          <div class="ml-4 mr-4 mb-4">
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <div class="row">
                    <div class="col-md-12 col-lg-4 col-xl-4 mx-auto">
                      <img src="@/assets/img/profile2.png" alt="no image" class="img img-circle" style="width: 140px;">
                    </div>
                    <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mt-6">
                      <button class="btn button-purpole"><span class="fa fa-user"></span>&nbsp;Take a selfie</button>
                    </div>
                    <div class="col-md-12 col-lg-4 col-xl-4 mx-auto mt-7">
                      <a href="" class="color-white" style="text-decoration: none;">Remove</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <label for="" class="txt-label">First name*</label>
                  <input type="text" class="form-control txt" id="" value="Sarah">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <label for="" class="txt-label">Last name*</label>
                  <input type="text" class="form-control txt" id="" value="Ajene">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <label for="" class="txt-label">Date of birth (DD/MM/YYYY)*</label>
                  <input type="date" class="form-control txt" id="" value="">
                  <span class="text-muted ml-2">Should match the date on valid ID</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <label for="" class="txt-label">Residential address</label>
                  <input type="text" class="form-control txt" id="" value="16 Isaac John Street, Ikeja Gra, Lagos, Nigeria">
                </div>
                <div class="input-group mt-4">
                  <label for="" class="txt-label">Proof of address</label>
                  <button type="button" class="txt-file color-gray" onclick="document.getElementById('getFile1').click()">NIN.jpg<i class="fa fa-paperclip color-white ml-1"></i><i class=" fa fa-circle-o-notch color-green"></i></button>
                  <input type="file" class="form-control txt d-none" id="getFile1">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-6">
                  <label class="form-check-label" for="">Account</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <input type="text" class="form-control txt" id="" value="" placeholder="Email address">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <input type="text" class="form-control txt" id="" value="" placeholder="Phone number">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-6">
                  <label class="form-check-label" for="">Security</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="input-group mt-4">
                  <input type="password" class="form-control txt" id="" value="" placeholder="Password" style="border-right: none;">
                  <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-eye"></i></span>
                  </div>
                </div>
                <div class="form-group mt-4">
                  <input type="text" class="form-control txt" id="" value="BVN">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="input-group mt-4">
                  <label for="" class="txt-label">ID</label>
                  <button type="button" class="txt-file color-gray" onclick="document.getElementById('getFile2').click()">NIN.jpg <i class="fa fa-paperclip color-white ml-1"></i><i class="fa fa-check-circle color-green"></i></button>
                  <input type="file" class="form-control txt d-none" id="getFile2">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <div class="row">
                    <div class="col-md-12 col-lg-6 col-xl-6 mx-auto">
                      <div class="input-group mt-4">
                        <label for="" class="txt-label" style="z-index: 1;top: 2px;">PIN</label>
                        <input type="password" class="form-control txt" id="" value="1234" placeholder="PIN" style="border-right: none;">
                        <div class="input-group-append">
                          <span class="input-group-text"><i class="fa fa-pencil"></i></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-6 mx-auto">
                      <div class="input-group mt-4">
                        <input type="text" class="form-control txt text-muted" id="" value="" placeholder="OTP">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <div class="mt-5">
                  <a href="" class="color-gray" style="text-decoration: none;">Cancle</a>&nbsp;
                  <button class="btn button-purpole">Verify</button>  
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 col-lg-7 col-xl-7 offset-md-2">
                <div class="form-group mt-4">
                  <a href="" class="color-white">Resend OTP</a><i class="fa fa-info-circle ml-1 color-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'AddNewShopper'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
