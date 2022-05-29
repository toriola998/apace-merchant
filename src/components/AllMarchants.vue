<template>
  <div>
      <section class="bg-black">
    <div class="container">
      <div class="row pt-2 ml-5">
        <div class="col-md-6">
          <h4 class="color-white">Merchants</h4>
        </div>
        <div class="col-md-6 text-end">
          <img src="@/assets/img/img2.png" style="width: 18px;">&nbsp;
          <button class="text-label color-white mr-1 bg-d" for="" type="button" data-toggle="modal" data-target="#myModal">Send message</button>
          <img src="@/assets/img/img3.png" style="width: 12px;">&nbsp;
          <button class="text-label color-white mr-1 bg-d" for="" type="button" data-toggle="modal" data-target="#myModal2">Freeze</button>
          <img src="@/assets/img/img1.png" style="width: 20px;">&nbsp;
          <button class="text-label color-white bg-d" for="" type="button" data-toggle="modal" data-target="#myModal3">Set fee</button>
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
          </div>
        </div>
        <div class="col-md-6 text-end">
          <a class="text-label" style="color: #DE5770;text-decoration: none;" for="">Reset filters</a>
        </div>
      </div>
      <div class="row text-md-left ml-6">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
          <table class="table table-responsive mt-4 cus-table">
            <thead class="thead">
              <tr>
                <td style="width: 5%;">S/N</td>
                <td style="width: 45%;">Business name</td>
                <td style="width: 30%;">Date joined</td>
                <td style="width: 20%;">Status</td>
                <td style="width: 10%;">Actions</td>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr>
                <td>01</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Coffee cuppa
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Gas water co.
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-purpole"></i>Frozen</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Dunder Mifflin
                </td>
                <td>05 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Paper co.
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Royale cheese
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Office space
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-green"></i>Active</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Pebbles
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Brilla Homes
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Home Buddy
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  <img src="@/assets/img/imgt.png" style="width: 30px;" alt="no image" class="mr-1">Stone Age
                </td>
                <td>04 Oct 2021</td>
                <td><i class="fa fa-circle mr-1 color-danger"></i>Inactive</td>
                <td style="text-align: center;">
                  <i class="fa fa-ellipsis-v"></i>
                </td>
              </tr>
            </tbody>
            <tfoot class="tfoot">
              <tr>
                <td colspan="3" style="border-bottom: none;">1 - 10 of 30</td>
                <td colspan="2" style="border-bottom: none;" class="text-end">
                  Page <span class="badge rounded-pill bg-secondary">10</span>
                  <i class="fa fa-arrow-left ml-1"></i>
                  <i class="fa fa-arrow-right ml-1 mr-2"></i>
                </td>
              </tr>
            </tfoot>
          </table>
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
                <div class="col-11">Send message</div>
                <div class="col-1">
                  <button class="cross-btn color-white">X</button>
                </div>
              </div>
            </div>
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg" style="z-index: 1;">Recipient</label>
                    <select class="form-control form-select js-example-basic-multiple bg" name="states[]" multiple="multiple" style="background-color: red;">
                      <option selected="">Olaoluwa Tosin</option>
                      <option selected="">Daniels Olakunle</option>
                      <option selected="">Farouk </option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg" style="z-index: 1;">Subject</label>
                    <input type="text" class="form-control txt bg" id="" value="Subject">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <label for="" class="txt-label bg" style="z-index: 1;">Message</label>
                    <textarea rows="5" class="form-control txt bg">This is just to remind you that you are defaulting on a loan which was meant to be paid off on 02 Nov 2021.</textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer card-footer-popup">
              <div class="row justify-content-md-center">
                <div class="col-12 col-md-6 text-center">
                  <button class="btn btn-warning" style="width: 100%;">Send message</button>
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



<!-- Modal -->
        <div class="modal fade" id="myModal2" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row text-md-left mt-3">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mb-3">
          <div class="card" style="width: 100%;border-radius: 10px;">
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-check mt-4">
                    <img src="@/assets/img/imgdt.png" style="width: 15px;" />
                    <label class="form-check-label f-14 ml-1" for="flexRadioDefault1">
                      View detail
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <img src="@/assets/img/imgdt2.png" style="width: 15px;" />
                    <label class="form-check-label f-14 ml-1" for="flexRadioDefault1">
                      Send message
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <img src="@/assets/img/delete.png" style="width: 15px;" />
                    <label class="form-check-label f-14 ml-1" for="flexRadioDefault1">
                      Delete
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4 check">
                    <img src="@/assets/img/pause.png" style="width: 15px;" />
                    <label class="form-check-label f-14 ml-1" for="flexRadioDefault1">
                      Freeze all merchants
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <img src="@/assets/img/setfree.png" style="width: 15px;" />
                    <label class="form-check-label f-14 ml-1" for="flexRadioDefault1">
                      Set fee
                    </label>
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




<!-- Modal -->
        <div class="modal fade" id="myModal3" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row text-md-left mt-3">
        <div class="col-12 col-md-12 col-lg-12 col-xl-12 mb-3">
          <div class="card" style="width: 100%;border-radius: 10px;">
            <div class="card-header card-header-popup color-white">
              <div class="row">
                <div class="col-11">Set fee</div>
                <div class="col-1">
                  <button class="cross-btn color-white">X</button>
                </div>
              </div>
            </div>
            <div class="card-body card-body-popup">
              <div class="row">
                <div class="col-12">
                  <div class="form-check mt-4">
                    <input class="form-check-input form-check-input1 f-12" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label f-14" for="flexRadioDefault1">
                      N 20,000.00
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <input class="form-check-input form-check-input1 f-12" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label f-14" for="flexRadioDefault1">
                      N 40,000.00
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <input class="form-check-input form-check-input1 f-12" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label f-14" for="flexRadioDefault1">
                      N 50,000.00
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <input class="form-check-input form-check-input1 f-12" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label f-14" for="flexRadioDefault1">
                      N 80,000.00
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check mt-4">
                    <input class="form-check-input form-check-input1 f-12" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label f-14" for="flexRadioDefault1">
                      Add new fee
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group mt-4">
                    <input type="text" class="form-control txt bg" id="" placeholder="New fee">
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
export default {
  name: 'AllMarchants'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-d{
  background-color: black;
}
</style>
