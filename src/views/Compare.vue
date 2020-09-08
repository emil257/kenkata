<template>
  <div>
    <current-path></current-path>
    <div class="container">
      <div class="compare-grid">
        <div class="d-flex flex-column justify-content-end">
          <div class="product-desc-category">
            <p class="text-size-24 weight-medium">AVAILABILITY</p>
          </div>
          <div class="product-desc-category mt-2">
            <p class="text-size-24 weight-medium">BRAND</p>
          </div>
          <div class="product-desc-category mt-2">
            <p class="text-size-24 weight-medium">COLOR</p>
          </div>
        </div>
        <app-compare-product></app-compare-product>
        <app-compare-product></app-compare-product>
        <app-compare-product></app-compare-product>
      </div>
    </div>
  </div>
</template>

<script>
import currentPath from '../components/navigation/current-path'
import appCompareProduct from '../components/products/app-compare-product'

export default {
  components: {
    currentPath,
    appCompareProduct
  }
}
</script>

<style scoped>
.compare-grid{
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  overflow-x: scroll;
}
.product-desc-category{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey);
  height: 69px;
  padding: 0 20px;
}
@media(min-width: 1200px){
  .compare-grid{
    overflow-x: hidden;
  }
}
</style>