<template>
  <div>
    <shop-current-path></shop-current-path>
    <app-product-section></app-product-section>
    <app-product-desc></app-product-desc>
    <app-features></app-features>
    <app-product-carousel first="YOU MAY" second="ALSO LIKE" :itemsPerRow="4"></app-product-carousel>
    <app-product-carousel first="RELATED" second="PRODUCTS" :itemsPerRow="4"></app-product-carousel>
    <app-contact></app-contact>

    <!-- <app-product-popup></app-product-popup> -->
  </div>
</template>

<script>
import shopCurrentPath from '../components/shop/shop-current-path'
import appFeatures from '../components/app-features'
import appProductSection from '../components/products/app-product-section'
import appProductDesc from '../components/products/app-product-desc'
import appProductCarousel from '../components/app-product-carousel'
import appContact from '../components/app-contact'

// import appProductPopup from '../components/products/app-product-popup'

export default {
  name: 'Product',
  components: {
    shopCurrentPath,
    appFeatures,
    appProductSection,
    appProductDesc,
    appProductCarousel,
    appContact,

    // appProductPopup
  }
}
</script>
<style scoped>

.app-features{
  background-color: var(--secondary-light-color) ;
  padding-bottom: 7.5rem;
}
</style>