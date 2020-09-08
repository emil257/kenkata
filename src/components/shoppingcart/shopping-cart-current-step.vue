<template>
  <div class="step-bg d-flex align-items-center justify-content-center">

    <span class="weight-medium d-flex flex-column flex-sm-row align-items-center" v-if="step == 1">
      <span class="text-theme-color">Shopping Cart</span>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <router-link class="text-white" to="/shoppingcart/checkout">Checkout</router-link>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <span>Order Complete</span>
    </span>

    <span class="weight-medium d-flex flex-column flex-sm-row align-items-center" v-if="step == 2">
      <router-link class="text-white" to="/shoppingcart">Shopping Cart</router-link>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <span class="text-theme-color">Checkout</span>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <span>Order Complete</span>
    </span>

    <span class="weight-medium d-flex flex-column flex-sm-row align-items-center" v-if="step == 3">
      <span>Shopping Cart</span>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <span>Checkout</span>
      <i class="fas fa-angle-right text-theme-color mx-3 d-none d-sm-block"></i>
      <i class="fas fa-angle-down text-theme-color d-sm-none"></i>
      <span class="text-theme-color">Order Complete</span>
    </span>

  </div>
</template>

<script>
export default {
  props: ['step']
}
</script>

<style scoped>
.step-bg{
  background-color: hsla(231, 63%, 15%, 0.65);
  min-height: 140px;
  font-size: 24px;
  padding: 1rem 0;
  color: white;
}
</style>