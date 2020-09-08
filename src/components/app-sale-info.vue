<template>
  <div class="sale-info">
    <div class="container h-100 d-flex justify-content-between">
      <div class="sale-info-off d-none align-items-center justify-content-center flex-column d-md-flex">
        <h3>30% <span>OFF</span></h3>
        <p>FOR NEW CUSTOMER</p>
        <button class="btn custom-cta-btn mt-4 sale-info-btn">SHOP NOW</button>
      </div>
      <div class="sale-info-desc col-12 col-md-5 d-flex flex-column justify-content-center">
        <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
        <button class="btn custom-cta-btn mt-5 sale-info-desc-btn">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sale-info{
  height: 418px;
  background-color: #CCCCCC;
}
.sale-info-off{
  height: 100%;
  width: 255px;
  background-color: var(--theme-color);
  color: white;
}
.sale-info-off h3{
  font-size: 60px;
  font-weight: bold;
}
.sale-info-off h3 span{
  font-size: 36px;
}
.sale-info-btn{
  background-color: var(--secondary-color) !important;
  color: white !important;
}

.sale-info-desc p{
  font-size: 14px;
  color: white;
}
.sale-info-desc-btn{
  width: 173px !important;
}
</style>