<template>
  <div>
    <div class="shop-banner">
      <div class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
        <div class="mt-5 mt-lg-0">
          <h1>
            New Customer
          </h1>
          <h1>
            Can Get <span class="text-theme-color">30% Off</span>
          </h1>
          <button class="btn custom-cta-btn btn-w-u mt-4">LEARN MORE</button>
        </div>
        <img class="banner-img" src="@/assets/img/shop-img/banner-shoes.png" alt="shoes">
      </div>
    </div>

    <div class="shop">
      <div class="shop-header">
        <div class="container">
          <div class="shop-header-container d-flex align-items-center justify-content-between">
            <div>
              <h3 class="text-theme-color">Shop</h3>
              <p>Home / <span class="text-grey-color">Shop</span> </p>
            </div>
            <div class="d-flex">
              <div class="shop-header-option-block align-items-center d-none d-lg-flex"><p>Show: 9 / 12 / 18 / 24</p></div>
              <div class="shop-header-option-block d-flex align-items-center">
                <img class="banner-img mr-3" src="@/assets/img/shop-img/2x3.png">
                <img class="banner-img mr-3" src="@/assets/img/shop-img/1x1.png">
                <img class="banner-img" src="@/assets/img/shop-img/3x3.png">
              </div>
              <div class="shop-header-option-block d-none d-md-flex align-items-center"><p>Default sorting <i class="fas fa-chevron-down fa-sm fa-lg ml-5"></i></p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 container d-flex flex-column flex-md-row align-items-center align-items-sm-start">
        <products-fiters></products-fiters>
        <div class="d-flex flex-column align-items-center">
          <div class="product-grid">
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
            <app-product></app-product>
          </div>
          <span class="mt-5 d-flex align-items-center">
            <span class="d-flex c-scroll-btn c-scroll-left align-items-center justify-content-center mr-3"><img src="@/assets/img/next-arrow.png" alt=""></span>
            <span class="product-page">8</span>
            <span class="product-page text-theme-color">9</span>
            <span class="product-page">10</span>
            <span class="product-page">...</span>
            <span class="product-page d-none d-sm-block">24</span>
            <span class="product-page">25</span>
            <span class="product-page d-none d-sm-block">26</span>
            <span class="d-flex c-scroll-btn c-scroll-right align-items-center justify-content-center ml-3"><img src="@/assets/img/next-arrow.png" alt=""></span>
          </span>
        </div>
      </div>
    </div>
    <app-contact></app-contact>
  </div>
</template>

<script>
import appContact from '../components/app-contact.vue'
import 'vue-slider-component/theme/antd.css'
import appProduct from '../components/products/app-product'
import productsFiters from '../components/shop/filters'

export default {
  name: 'Shop',
  components: {
    appContact,
    appProduct,
    productsFiters
  }
}
</script>
<style>
.shop-banner{
  background-color: var(--secondary-light-color);
  margin-bottom: 120px;
}
.shop-banner h1{
  font-size: 36px;
  color: white;
  font-weight: bold;
}
.banner-img{
  margin: 55px auto;
  width: 90%;
}
@media(min-width: 768px){
  .banner-img{
    width: unset;
  }
}

.shop{
  margin-bottom: 120px;
}
.shop-header{
  background-color: var(--light-grey);
}
.shop-header-container{
  height: 140px;
}
.shop-header-container h3{
  font-weight: 500;
  font-size: 24px;
}
.shop-header-option-block{
  margin-left: 30px;
  border-radius: 6px;
  background-color: var(--secondary-color);
  min-height: 60px;
  color: white;
  padding: 0 27px;
}
.shop-header-option-block img{
  margin: 0;
}

.product-grid{
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 265px;
  gap: 15px;
}
.product-page{
  margin: 0 7px;
}
@media(min-width: 450px){
  .product-grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media(min-width: 1200px){
  .product-grid{
    grid-template-columns: 1fr 1fr 1fr;
  }
}


/* DO NOT TOUTCH START */
.custom-control-label:before{
  background-color:red !important;
  border: none !important;
  height: 20px !important;
  width: 20px !important;
  position: absolute !important;
  top: 2px !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before{
  background-color:black;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::after{
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='white' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  height: 20px !important;
  width: 20px !important;
  /* position: absolute !important; */
  top: 2px !important;
}
.black:before, .black:checked~.black::before{
  background-color:#000000 !important;
}
.gray:before, .grey:checked~.grey::before{
  background-color:#EEEEEE !important;
}
.red:before, .red:checked~.red::before{
  background-color:#FF2D2D !important;
}
.green:before, .green:checked~.green::before{
  background-color:#64CB83 !important;
}
.orange:before, .orange:checked~.orange::before{
  background-color:#FFAA00 !important;
}
.brown:before, .brown:checked~.brown::before{
  background-color:#542323 !important;
}
/* DO NOT TOUTCH END */

</style>