<template>
  <div>
    <app-banner></app-banner>
    <app-features></app-features>
    <app-shop-category></app-shop-category>
    <app-product-carousel first="NEW" second="ARRIVALS" desc="Check out our latest products from top fashion designers"></app-product-carousel>
    <app-sale-info></app-sale-info>
    <app-product-carousel first="FEATURED" second="PRODUCTS" desc="Check out our monthly featured products from top brands"></app-product-carousel>
    <app-flash-sale></app-flash-sale>
    <app-top-sellers></app-top-sellers>
    <app-review></app-review>
    <app-latest-blog></app-latest-blog>
    <app-contact></app-contact>
  </div>
</template>

<script>
import appBanner from '../components/app-banner'
import appFeatures from '../components/app-features'
import appShopCategory from '../components/app-shop-category'
import appSaleInfo from '../components/app-sale-info'
import appProductCarousel from '../components/app-product-carousel'
import appFlashSale from '../components/app-flash-sale'
import appTopSellers from '../components/app-top-sellers'
import appReview from '../components/app-review'
import appLatestBlog from '../components/app-latest-blog'
import appContact from '../components/app-contact'

export default {
  name: 'Landing Page',
  components: {
    appBanner,
    appFeatures,
    appShopCategory,
    appSaleInfo,
    appProductCarousel,
    appFlashSale,
    appTopSellers,
    appReview,
    appLatestBlog,
    appContact
  }
}
</script>
