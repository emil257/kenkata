<template>
  <div class="banner">
    <div class="container d-flex flex-column flex-lg-row justify-content-between align-items-center pt-5 pt-lg-0">
      <div class="banner-content mb-5 mb-lg-0 px-4 px-lg-0">
        <h1>
          Shopping is 
          <span class="text-theme-color">MORE FUN</span>
        </h1>
        <p class="py-3">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
        <button class="btn custom-cta-btn">SHOP NOW</button>
      </div>
      <img class="col-10 col-md-9 col-lg-8 col-xl-7" src="@/assets/img/Banner-thumb.png" alt="">
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.banner{
  background-color: var(--product-bg);
}
.banner img{
  width: 100%;
}
.banner-content {
  color: var(--secondary-color);
}
.banner-content h1 {
  font-size: 60px;
}
.banner-content h1 span {
  font-weight: bold;
  display: block;
}
</style>