<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-12">
          <h4 class="color-white">New business</h4>
        </div>
      </div>
    </div>
    <hr class="mt-0">
    <div class="container">
      <div class="row text-md-left ml-6 mr-6">
        <div class="col-md-7 col-lg-7 col-xl-7 mx-auto">
          <div class="ml-4 mr-4 mb-4">
            <div>
              <p class="mt-3 color-white">Business</p>
            </div>
            <form>
              <div class="form-group">
                <label for="" class="txt-label">Username</label>
                <input type="text" class="form-control txt" id="" value="Gadget House">
              </div>
              <div class="form-group mt-3">
                <textarea rows="5" placeholder="Description" class="form-control txt" id=""></textarea>
              </div>
              <div class="form-group mt-3">
                <textarea rows="5" placeholder="Notes" class="form-control txt" id=""></textarea>
              </div>
              <div class="form-check form-switch mt-6 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">General information</label>
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
              <div class="input-group mt-4">
                <button type="button" class="txt-file" onclick="document.getElementById('getFile1').click()">Place of address*<i class="fa fa-paperclip"></i></button>
                <input type="file" class="form-control txt d-none" id="getFile1">
              </div>
              <span class="text-muted ml-2">Utility bill or valid ID</span>

              <div class="form-group mt-4">
                <label for="" class="txt-label">BVN*</label>
                <input type="text" class="form-control txt" id="" value="11880746704">
              </div>

              <div class="input-group mt-4">
                <label for="" class="txt-label">Valid ID upload*</label>
                <button type="button" class="txt-file color-gray" onclick="document.getElementById('getFile2').click()">Driver's license.jpg<i class="fa fa-paperclip color-white ml-1"></i><i class=" fa fa-circle-o-notch color-green"></i></button>
                <input type="file" class="form-control txt d-none" id="getFile2">
              </div>
              <span class="text-muted ml-2">Names on ID should match the names above</span>
              <div class="form-check form-switch mt-6 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Director personal details</label>
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Director's full nanme*</label>
                <input type="text" class="form-control txt" id="" value="Taiwo Odusnsi">
              </div>
              <div class="input-group mt-4">
                <label for="" class="txt-label">Director's ID*</label>
                <button type="button" class="txt-file color-gray" onclick="document.getElementById('getFile3').click()">Driver's license.jpg<i class="fa fa-paperclip color-white ml-1"></i><i class=" fa fa-circle-o-notch color-green"></i></button>
                <input type="file" class="form-control txt d-none" id="getFile3">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Director's BVN*</label>
                <input type="text" class="form-control txt" id="" value="11880746704">
              </div>
              <div class="form-check form-switch mt-6 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Add Director</label>
              </div>
              <div class="form-group mt-4">
                <button class="btn button-purpole"><span class="fa fa-plus"></span>&nbsp;Add more director</button>
              </div>
              <div class="form-check form-switch mt-6 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Assign director as default</label>
              </div>
              <div class="form-group mt-3">
                <span class="text">Names on ID should match the names above</span>
              </div>
              <div class="form-check form-switch mt-6 ml-1">
                <input class="form-check-input" type="checkbox" id="" checked>
                <label class="form-check-label" for="">Business information</label>
              </div>

              <div class="input-group mt-4">
                <label for="" class="txt-label">CAC certificate</label>
                <button type="button" class="txt-file color-gray" onclick="document.getElementById('getFile4').click()">Driver's license.jpg <i class="fa fa-paperclip color-white ml-1"></i><i class=" fa fa-circle-o-notch color-green"></i></button>
                <input type="file" class="form-control txt d-none" id="getFile4">
                <span class="text color-white ml-2">Names on ID should match the names above</span>
              </div>
              <div class="form-group mt-4">
                <input type="text" class="form-control txt" id="" value="CIC*">
              </div>
              <div class="form-group mt-4">
                <input type="text" class="form-control txt" id="" value="TIN*">
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Business primary address*</label>
                <input type="text" class="form-control txt" id="" value="10 Isaac John street, Ikeja GRA, Lagos">
              </div>
              <div class="input-group mt-4">
                <button type="button" class="txt-file" onclick="document.getElementById('getFile5').click()">Place of official address*<i class="fa fa-paperclip"></i></button>
                <input type="file" class="form-control txt d-none" id="getFile5">
              </div>
              <div class="form-group">
                <span class="text-muted">Utility bill or valid ID</span>
              </div>
              <div class="form-group mt-4">
                <label for="" class="txt-label">Business email address*</label>
                <input type="text" class="form-control txt" id="" value="gadgethouse@example.com">
              </div>
              <div class="form-group mt-4">
                <input type="text" class="form-control txt" id="" value="" placeholder="Business phone number*">
              </div>
              <div class="form-group mt-4">
                <select class="form-control form-select">
                  <option>Business category*</option>
                </select>
              </div>
              <div class="form-group mt-3">
                <textarea rows="5" placeholder="Business description*" class="form-control txt" id=""></textarea>
              </div>
              <div class="form-group">
                <span class="text-muted">short and clear description</span>
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
  name: 'AddNewBusiness'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
