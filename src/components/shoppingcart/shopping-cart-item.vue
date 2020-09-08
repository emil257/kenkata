<template>
  <div class="d-flex class align-items-center justify-content-between">
    <span class="d-flex align-items-center">
    <img src="@/assets/img/shop-img/remove-icon.png" alt="remove" class="mr-3">
      <img src="@/assets/img/product-img/product-icon.png" alt="remove" class="mr-3 d-none d-sm-block">
      <p class="mx-2">Women smart high heel shoe</p>
    </span>
    <span class="d-flex align-items-center">
      <p>$190.00</p>
      <div class="increase-qnt-btn-grp d-flex inc-button">
        <button class="increase-qnt-btn-dec">-</button>
        <span class="increase-qnt-num d-flex align-items-center">3</span>
        <button class="increase-qnt-btn-inc">+</button>
      </div>
      <p class="weight-bold text-theme-color">$380.00</p>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.inc-button{
  margin-right: 58px;
  margin-left: 38px;
}
</style>