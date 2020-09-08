<template>
  <div class="product-desc">
    <div class="container">
      <div class="product-desc-tabs d-flex">
        <span class="product-desc-tab">Description</span>
        <span class="product-desc-tab">Additional Information</span>
        <span class="product-desc-tab active">Reviews (2)</span>
        <span class="product-desc-tab">About Brand</span>
      </div>
      <hr class="product-desc-hr">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-size-18 text-second-color"><span class="text-theme-color">2 reviews for</span> Gents Blue Lightweight Trainers</p>

          <div class="product-desc-review d-flex">
            <div class="mr-4">
              <img src="@/assets/img/review-img/client-thumb.png" alt="">
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <p class="mb-2"><span class="weight-bold text-theme-color">John Doe</span><span class="text-size-14 text-grey-color"> - 24 July, 2020</span></p>
                <div class="text-theme-color">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
              <p class="text-second-color">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
            </div>
          </div>
          <hr class="product-desc-review-break">
          <div class="product-desc-review d-flex">
            <div class="mr-4">
              <img src="@/assets/img/review-img/client-thumb.png" alt="">
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <p class="mb-2"><span class="weight-bold text-theme-color">Willium Cary</span><span class="text-size-14 text-grey-color"> - 16 June, 2020</span></p>
                <div class="text-theme-color">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
              <p class="text-second-color">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
          </div>


        </div>
        <div class="col-lg-6">
          <div class="add-review-form">
            <form>
              <h3 class="text-size-24 text-theme-color">Add a review</h3>
              <p class="text-size-14 text-dark-grey-color mt-3">Your email address will not be published. Required fields are marked *</p>
              <p class="mt-3 mb-3">Your rating<span class="text-theme-color">*</span>:
                <span class="ml-4 text-grey-color">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </p>
              <div class="form-group">
                <label for="exampleFormControlInput1">Your review<span class="text-theme-color">*</span></label>
                <textarea class="form-control custom-r-input" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Name<span class="text-theme-color">*</span></label>
                <input type="text" class="form-control custom-r-input" id="exampleFormControlInput1">
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Email<span class="text-theme-color">*</span></label>
                <input type="email" class="form-control custom-r-input" id="exampleFormControlInput1">
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <button class="custom-theme-btn sub-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product-desc{
  margin-bottom: 120px;
}
.product-desc-hr{
  background-color: var(--theme-color);
  height: 2px;
  margin-top: 0;
  margin-bottom: 36px;
  border: none;
}
.product-desc-tab{
  background-color: var(--secondary-color);
  color: white;
  border-radius: 6px 6px 0 0;
  padding: 7px 28px;
  margin-right: 4px;
}
.product-desc-tab.active{
  background-color: var(--theme-color) !important;
}
.product-desc-review-break{
  background-color: var(--product-bg);
  height: 1px;
  border: none;
  margin: 0;
}
.product-desc-review{
  margin-top: 28px;
  margin-bottom: 28px;
}

.add-review-form{
  background-color: var(--light-grey);
  border-radius: 6px;
  padding: 24px 30px;
}

.custom-r-input{
  border: none !important;
}
.sub-btn{
  width: 126px;
  height: 54px;
  font-size: 18px;
  border-radius: 27px;
  line-height: 28px;
}

</style>