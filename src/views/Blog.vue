<template>
  <div>
    <current-path></current-path>
    <div class="container">
      <div class="d-flex align-items-center flex-column">
        <div class="blog-container w-100">
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
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
</template>

<script>
import currentPath from '../components/navigation/current-path.vue'
import appBlogItem from '../components/blog/app-blog-item.vue'

export default {
  name: 'Blog',
  components: {
    currentPath,
    appBlogItem
  }
}
</script>
<style scoped>
.blog-container{
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 120px;
  gap: 2rem;
}
@media(min-width: 992px){
.blog-container{
  grid-template-columns: 1fr 1fr;
}
}
</style>