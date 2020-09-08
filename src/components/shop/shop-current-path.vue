<template>
  <div class="shop-current-path">
    <div class="container">
      <div class="current-path-container d-flex align-items-center justify-content-between">
        <h2 class="text-theme-color weight-regular">
          <span class="text-theme-color mr-1">Home</span>
          /
          <span class="text-theme-color mx-1">Shop</span>
          /
          <span class="text-theme-color mx-1">Shoes</span>
          /
          <span class="ml-1">Gents Blue Lightweight Trainers</span>
        </h2>
        <div class="d-none align-items-center d-lg-flex">
          <div class="product-brand ">
            <img class="product-brand-img" src="@/assets/img/brands/Bexim.png" alt="">
          </div>
          <div class="d-flex align-items-center" style="font-size: 0.78rem;">
              <i class="fas fa-angle-left fa-3x mx-3"></i>
              <img class="" src="@/assets/img/shop-img/1x1.png">
              <i class="fas fa-angle-right fa-3x mx-3"></i>
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
.shop-current-path{
  background-color: var(--secondary-light-color);
  color: white;
}
.current-path-container{
  height: 140px;
}

.product-brand{
  background-color: white;
  padding: 11px 29px;
  border-radius: 6px;
  display: inline-block;
}
.product-brand-img{
  height: 29px;
}
</style>