<template>
  <div class="flash-sale">
    <div class="container d-flex flex-column flex-lg-row justify-content-md-between flash-container">
      <div class="flash-sale-off">
        <h1>FLASH SALE</h1>
        <p>UP TO 50% OFF</p>
      </div>
      <div class="d-flex align-items-center flex-column justify-content-center py-5">
        <div class="flash-counter d-flex flex-column flex-sm-row">
          

          <div class="d-flex justify-content-between mb-4 mb-sm-0">
            
            <div class="flash-counter-i d-flex flex-column justify-content-center">
              <h3 class="text-theme-color">7</h3>
              <p>Days</p>
            </div>
            <div class="flash-counter-i d-flex flex-column justify-content-center">
              <h3 class="text-theme-color">23</h3>
              <p>Hours</p>
            </div>

          </div>



          <div class="d-flex justify-content-between">
            
          <div class="flash-counter-i d-flex flex-column justify-content-center">
            <h3 class="text-theme-color">46</h3>
            <p>Minutes</p>
          </div>
          <div class="flash-counter-i d-flex flex-column justify-content-center">
            <h3 class="text-theme-color">12</h3>
            <p>Seconds</p>
          </div>
          </div>

        </div>
        <button class="btn custom-cta-btn mt-4">SHOP NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flash-sale{
  background-color: var(--secondary-color);
}
.flash-sale-off{
  color: white;
  padding: 36px;
  text-align: center;
  width: 255px;
  height: 265px;
  background-color: var(--theme-color);
}
.flash-sale-off h1{
  font-size: 60px;
  line-height: 60px;
}
.flash-sale-off p{
  font-size: 24px;
  line-height: 32px;
}

.flash-counter-i{
  text-align: center;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background-color: white;
  border: 2px dashed var(--theme-color);
  margin: 0 1rem;
}
.flash-counter-i h3{
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  margin: 0;
}

.flash-container{
  min-height: 435px;
}
</style>