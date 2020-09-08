<template>
  <div>
    <shopping-cart-current-step :step="2"></shopping-cart-current-step>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <p>Returning customer? <span class="text-theme-color">Click here to login</span></p>
          <p class="mt-3">Have a coupon? <span class="text-theme-color">Click here to enter your code</span></p>
          <div class="coupon mt-4">
            <p class="mb-4">If you have a coupon code, please apply it below.</p>
            <div class="contact-input-grp">
              <input type="text" class="form-control contact-input" placeholder="Coupon code">
              <button class="contact-input-btn">Apply</button>
            </div>
          </div>
          <form class="mt-5 checkout-form">
            <h3 class="font-size-18">BILLING DETAILS</h3>
            <div class="form-row mt-4">
              <div class="form-group col-6">
                <label for="formGroupExampleInput">First name <span class="text-theme-color">*</span></label>
                <input type="text" class="form-control" id="formGroupExampleInput">
              </div>
              <div class="form-group col-6">
                <label for="formGroupExampleInput2">Last name <span class="text-theme-color">*</span></label>
                <input type="text" class="form-control" id="formGroupExampleInput2">
              </div>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Company name (optional)</label>
              <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Country / Region <span class="text-theme-color">*</span></label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>United States</option>
              </select>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Street address <span class="text-theme-color">*</span></label>
              <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group mt-4">
              <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Town / City <span class="text-theme-color">*</span></label>
              <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">State <span class="text-theme-color">*</span></label>
              <select id="inputState" class="form-control">
                <option selected>Alabama</option>
              </select>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">ZIP <span class="text-theme-color">*</span></label>
              <input type="text" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Phone <span class="text-theme-color">*</span></label>
              <input type="number" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Email adress <span class="text-theme-color">*</span></label>
              <input type="email" class="form-control" id="formGroupExampleInput2">
            </div>
            <div class="form-check mt-5">
              <input class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label" for="gridCheck1">
                Create an account?
              </label>
            </div>
            <hr class="my-5">
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="gridCheck1">
              <label class="form-check-label text-size-18 weight-bold" for="gridCheck1">
                SHIP TO DIFFERENT ADRESS?
              </label>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Order notes (optional)</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6">
          <div class="order-summary">
            <div class="order-header d-flex align-items-center justify-content-center">
              <p class="weight-medium text-size-24">CART TOTALS</p>
            </div>
            <div class="order-content">
              <span class="d-flex align-items-center justify-content-between weight-bold">
                <p class=" text-theme-color">PRODUCT</p>
                <p class=" text-theme-color">SUBTOTAL</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between">
                <p>Women smart high heel shoe</p>
                <p>$380.00</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between">
                <p>Gents half t-shirt</p>
                <p>$380.00</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between">
                <p>Gents winter yellow jacket</p>
                <p>$380.00</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between">
                <p>Men's Watches Brown Leather</p>
                <p>$380.00</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between weight-medium">
                <p class=" text-theme-color">Subtotal</p>
                <p class=" text-theme-color">$930.00</p>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between">
                <p>Shipping</p>
                  <span class="text-right">
                    <div class="form-check mb-1">
                      <label class="form-check-label custom-shipping-label" for="payment2">
                        Flat rate: <span class="text-theme-color">$20.00</span>
                      </label>
                      <input class="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2">
                    </div>
                    <div class="form-check mb-1">
                      <label class="form-check-label custom-shipping-label" for="payment2">
                        Free shipping
                      </label>
                      <input class="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2">
                    </div>
                    <div class="form-check mb-1">
                      <label class="form-check-label custom-shipping-label" for="payment2">
                        Local pickup: <span class="text-theme-color">$25.00</span>
                      </label>
                      <input class="form-check-input custom-shipping-radio" type="radio" name="payment" id="payment2" value="p2">
                    </div>
                  </span>
              </span>
              <hr>
              <span class="d-flex align-items-center justify-content-between weight-bold text-size-18">
                <p class=" text-theme-color">TOTAL</p>
                <p class=" text-theme-color">$930.00</p>
              </span>
              <hr>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="payment" id="payment1" value="p1" checked>
                <label class="form-check-label" for="payment1">
                  Direct bank transfer
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="payment" id="payment2" value="p2">
                <label class="form-check-label" for="payment2">
                  Check Payment
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="payment" id="payment2" value="p2">
                <label class="form-check-label" for="payment2">
                  Cah on delivery
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="payment" id="payment2" value="p2">
                <label class="form-check-label d-flex align-items-center" for="payment2">
                  PayPal 
                  <img  class="mx-2" src="@/assets/img/shop-img/paypal-logo.png" alt="">
                  <span class="text-grey-color">What is PayPal?</span>
                </label>
              </div>
              <hr>
              <p>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span class="text-theme-color">privacy policy.</span>
              </p>
              <hr>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="accept-terms">
                <label class="form-check-label" for="accept-terms">
                  I have read and agree to the website <span class="text-theme-color">terms and conditions *</span>
                </label>
              </div>
              <button class="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingCartCurrentStep from './shopping-cart-current-step'

export default {
  components: {
    shoppingCartCurrentStep
  }
}
</script>

<style scoped>
.order-header{
  min-height: 80px;
  border: 2px solid var(--secondary-color);
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--theme-color);
  border-radius: 6px 6px 0 0;
}
.order-content {
  border: 2px dashed var(--secondary-color);
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 25px;
}
</style>