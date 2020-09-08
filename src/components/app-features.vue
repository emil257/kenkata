<template>
  <div class="app-features">

    <div class="app-features-container d-flex flex-column flex-xl-row justify-content-around align-items-center">
      

    <div class="d-flex flex-column flex-lg-row">
      <div class="app-feature d-flex mb-5 mb-xl-0">
        <img class="theme-color" src="@/assets/img/feature-icons/shipping.svg" alt="">
        <span>
          <p class="app-feature-title text-theme-color">Free shipping</p>
          <p>For a local customer, we provide free shipping facility</p>
        </span>
      </div>
      <div class="app-feature d-flex mb-5 ml-lg-5 mb-xl-0">
        <img class="theme-color" src="@/assets/img/feature-icons/support.svg" alt="">
        <span>
          <p class="app-feature-title text-theme-color">24/7 support</p>
          <p>For any inquiry, we are available 24 hours every day</p>
        </span>
      </div>
    </div>
    

    <div class="d-flex flex-column flex-lg-row">
      <div class="app-feature d-flex mb-5 mb-lg-0 ml-xl-5 ">
        <img class="theme-color" src="@/assets/img/feature-icons/payment.svg" alt="">
        <span>
          <p class="app-feature-title text-theme-color">Online payment</p>
          <p>You can pay quickly and easily with our online payment system</p>
        </span>
      </div>
      <div class="app-feature d-flex ml-lg-5">
        <img class="theme-color" src="@/assets/img/feature-icons/delivery.svg" alt="">
        <span>
          <p class="app-feature-title text-theme-color">Fast delivery</p>
          <p>We understand your urgency and we deliver in a fast way</p>
        </span>
      </div>
    </div>


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-features img{
  filter: invert(82%) sepia(47%) saturate(5678%) hue-rotate(126deg) brightness(108%) contrast(75%);
  fill: black;
}

.app-features-container{
  padding: 7.5rem 2rem;
  padding-bottom: 1.5rem;
  max-width: 1850px;
  margin:auto;
}
.app-feature{
  background-color: #EDFCFA;
  border-radius: 6px;
  max-width: 400px;
  padding: 1.5rem;
}
.app-feature img {
  margin-right: 1.5rem;
}
.app-feature-title{
  font-weight: 500;
}
.app-feature:hover{
  background-color: var(--theme-color);
}
.app-feature:hover p{
  color: white;
}
.app-feature:hover img{
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
}

@media(min-width: 1850px){
  .app-features-container{
    padding: 7.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>