<template>
  <div>
    <shopping-cart-current-step :step="1"></shopping-cart-current-step>
      <div class="container mt-5">
        <div class="row">
          <div class="cart-products col-12 col-lg-8">
            <span class="d-flex justify-content-between weight-bold text-size-18 px-3">
              <p class="ml-5">Product</p>
              <p>
                <span>Price</span>
                <span class="mx-5">Quantity</span>
                <span>Subtotal</span>
              </p>
            </span>
            <hr class="cart-products-hr-top">
            <shopping-cart-item></shopping-cart-item>
            <hr class="cart-products-hr-breaker">
            <shopping-cart-item></shopping-cart-item>
            <hr class="cart-products-hr-breaker">
            <shopping-cart-item></shopping-cart-item>
            <hr class="cart-products-hr-breaker">
            <shopping-cart-item></shopping-cart-item>
            <hr class="cart-products-hr-breaker">
            <div class="cart-footer d-flex flex-column flex-lg-row justify-content-between">
              <div class="coupon">
                <p class="mb-4">If you have a coupon code, please apply it below.</p>
                <div class="contact-input-grp">
                  <input type="text" class="form-control contact-input" placeholder="Coupon code">
                  <button class="contact-input-btn">Apply</button>
                </div>
              </div>
              <button class="btn custom-theme-btn s-offer-btn btn-second-color text-size-18 btn-update mt-3 mt-lg-0">
                UPDATE CART
              </button>
            </div>
          </div>

          <div class="col-12 col-lg-4 mt-4">
            <div class="cart-total">
              <div class="cart-total-header d-flex align-items-center justify-content-center">
                <p class="weight-medium text-size-24">CART TOTALS</p>
              </div>
              <div class="cart-total-content">
                <span class="d-flex align-items-center justify-content-between">
                  <p class="weight-bold">Subtotal</p>
                  <p class="weight-bold text-theme-color">$910.00</p>
                </span>
                <hr>
                <span class="d-flex align-items-center justify-content-between">
                  <p class="weight-bold">Shipping</p>
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
                    <p class="mb-1">Shipping to <span class="text-grey-color">AL</span></p>
                    <p>Change adress</p>
                  </span>
                </span>
                <hr>
                <span class="d-flex align-items-center justify-content-between text-size-18">
                  <p class="weight-bold">TOTAL</p>
                  <p class="weight-bold text-theme-color">$930.00</p>
                </span>
                <button class="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <app-product-carousel first="YOU MAY" second="ALSO LIKE" :itemsPerRow="4"></app-product-carousel>
  </div>
</template>

<script>
import shoppingCartCurrentStep from './shopping-cart-current-step'
import appProductCarousel from '../../components/app-product-carousel'
import shoppingCartItem from './shopping-cart-item'

export default {
  components: {
    appProductCarousel,
    shoppingCartCurrentStep,
    shoppingCartItem
  }
}
</script>

<style scoped>
.cart-products{
  max-width: 730px;
}
.cart-products-hr-top{
  background-color: var(--theme-color);
  height: 1px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: none;
}
.cart-products-hr-breaker{
  background-color: var(--line-bullet);
  height: 1px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
}
.btn-update{
  height: 50px !important;
  width: 178px !important;
  border-radius: 27px !important;
}

.cart-total{
  border-radius: 6px;
  max-width: 350px;
}
.cart-total-content{
  border: 2px dashed var(--secondary-color);
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 25px;
}
.cart-total-header{
  min-height: 50px;
  border: 2px solid var(--secondary-color);
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--theme-color);
  border-radius: 6px 6px 0 0;
}

</style>