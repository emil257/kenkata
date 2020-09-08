<template>
  <div>
    <current-path></current-path>
    <div class="container">
      <app-section-header first="YOUR PRODUCTS" second="WISHLIST" desc=""></app-section-header>
      <div class="wishlist-grid">
        <app-product :tag="1" :removable="true"></app-product>
        <app-product :tag="1" :removable="true"></app-product>
        <app-product :tag="1" :removable="true"></app-product>
        <app-product :tag="1" :removable="true"></app-product>
        <app-product :tag="1" :removable="true"></app-product>
        <app-product :tag="1" :removable="true"></app-product>
      </div>
    </div>
  </div>
</template>

<script>
import currentPath from '../components/navigation/current-path.vue'
import appSectionHeader from '../components/app-section-header.vue'
import appProduct from '../components/products/app-product.vue'
export default {
   components: {
    currentPath,
    appSectionHeader,
    appProduct
  }
}
</script>

<style scoped>
.wishlist-grid{
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(150px, 430px);
  gap: 2rem;
}
@media(min-width: 768px){
  .wishlist-grid{
  grid-template-columns: 1fr 1fr;
  }
}
@media(min-width: 998px){
  .wishlist-grid{
  grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>