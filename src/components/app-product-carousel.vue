<template>
  <div class="product-carousel">
    <div class="container">
      <app-section-header :first="first" :second="second" :desc="desc"></app-section-header>
        <carousel :nav="false" class="c-carousel" :responsive="{0:{items: 1,nav:false},768:{items:2,nav:false},992:{items:3,nav:false}, 1350: {items: this.itemsPerRow,nav:false}}">
          <div class="product-card">
            <app-product tag="2"></app-product>
          </div>
          <div class="product-card">
            <app-product ></app-product>
          </div>
          <div class="product-card">
            <app-product tag="3"></app-product>
          </div>
          <div class="product-card">
            <app-product></app-product>
          </div>

          <template slot="next">
            <span class="blog-arrow c-scroll-btn c-scroll-right align-items-center justify-content-center c-next"><img src="@/assets/img/next-arrow.png" alt=""></span>
          </template>
          <template slot="prev">
            <span class="blog-arrow c-scroll-btn c-scroll-left align-items-center justify-content-center c-prev"><img src="@/assets/img/next-arrow.png" alt=""></span>
          </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import appSectionHeader from '../components/app-section-header'
import appProduct from '../components/products/app-product'
import carousel from 'vue-owl-carousel'

export default {
  props: {
    first: {
      type: String
    },
    second: {
      type: String
    },
    desc: {
      type: String
    },
    itemsPerRow:{
      type: Number,
      default: 3
    }
  },
  components: {
    appSectionHeader,
    appProduct,
    carousel 
  }
}
</script>

<style scoped>
.product-carousel{
  margin-bottom: 110px;
}
.product-card{
  padding: 1.2rem;
}
.c-carousel{
  position: relative;
}
.c-next{
  position: absolute;
  top: -24px;
  right: -64px;
}
.c-prev{
  position: absolute;
  top: -24px;
  left: -64px;
}
</style>