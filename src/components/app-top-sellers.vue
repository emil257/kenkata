<template>
  <div class="app-top-sellers">
    <div class="container">
       <app-section-header first="TOP" second="SELLERS" desc="Check out our weekly top sellers in all category"></app-section-header>
       <div class="product-container">
         <app-product class="main-seller" tag="0"></app-product>
         <app-product tag="0"></app-product>
         <app-product tag="0"></app-product>
       </div>
    </div>
  </div>
</template>

<script>
import appSectionHeader from '../components/app-section-header'
import appProduct from '../components/products/app-product'

export default {
  components:{
    appSectionHeader,
    appProduct
  }
}
</script>

<style scoped>
.app-top-sellers{
  margin-bottom: 120px;
}

.product-container{
  height: 1200px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 33% 33% 33%;
  gap: 1%;
}
@media(min-width: 992px){
  
.product-container{
  height: 650px;
  grid-template-columns: 49.5% 49.5%;
  grid-template-rows: 49.5% 49.5%;
  }
.main-seller{
  grid-row: 1/3;
}
}
</style>