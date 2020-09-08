<template>
  <div>
    <div class="product">
      <div class="product-remove-container d-flex align-items-center">
        <i class="fas fa-times text-theme-color remove-icon mr-2"></i>
        <p>Remove item</p>
      </div>
      <img class="product-image" src="@/assets/img/product-img/product-compare-thumb.png" alt="">
      <div class="product-footer d-flex flex-column align-items-center">
        <p>Circle pattern girls shirt</p>
        <div class="r-stars mt-2 mb-2">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="text-size-18 text-theme-color">$190.00</p>
        <button class="btn custom-theme-btn s-offer-btn btn-add-cart my-2">
          <i class="fas fa-cart-plus mr-1"></i>
          Add to cart
        </button>
      </div>
    </div>
    <div class="product-info mt-4">
      <i class="fas fa-check mr-2"></i>
      <p>In Stock</p>
    </div>
    <div class="product-info mt-2">
      <img src="@/assets/img/brands/Bexim.png" alt="">
    </div>
    <div class="product-info mt-2">
      <p>Brown, Black, White</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.product{
  position: relative;
  padding-top: 50px;
  border-radius: 6px;
}
.product-image{
  width: 100%;
}
.product-footer{
  border: solid 1px var(--line-bullet);
  border-radius: 0 0 6px 6px;
  padding: 18px;
}
.r-stars{
  font-size: 1rem;
}
.product-info{
  width: 100%;
  height: 69px;
  border: solid 1px var(--line-bullet);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
}
.product-info img {
  height: 30px;
}
</style>