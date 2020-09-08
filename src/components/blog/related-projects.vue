<template>
  <div>
    <div class="project-banner">
      <div class="container d-flex flex-column flex-lg-row align-items-center justify-content-between h-100">
        <div class="d-flex fix-width align-items-center">
          <img src="@/assets/img/blog-img/small-thumb.png" alt="thumb">
          <div class="ml-3">
            <i class="fas fa-arrow-left text-white"></i>
            <span class="text-theme-color ml-2">Previous Project</span>
            <p class="text-white text-size-14">Monica Creative and make us a proud things</p>
          </div>
        </div>
        <img src="@/assets/img/blog-img/home-icon.png" alt="home">
        <div class="d-flex fix-width align-items-center text-right">
          <div class="mr-3">
            <span class="text-theme-color mr-2">Next Project</span>
            <i class="fas fa-arrow-right text-white"></i>
            <p class="text-white text-size-14">The future fashion will be a easy beauty of women</p>
          </div>
          <img src="@/assets/img/blog-img/small-thumb.png" alt="thumb">
        </div>
      </div>
    </div>
    <div class="project-carousel">
      <div class="container">
        <app-section-header first="RELATED" second="POSTS"></app-section-header>
          <carousel :nav="false" class="c-carousel" :responsive="{0:{items: 1,nav:false},768:{items:2,nav:false},992:{items:3,nav:false}, 1350: {items: this.itemsPerRow,nav:false}}">
            <div class="project-card">
              <app-blog-item></app-blog-item >
            </div>
            <div class="project-card">
              <app-blog-item ></app-blog-item>
            </div>
            <div class="project-card">
              <app-blog-item></app-blog-item >
            </div>
            <div class="project-card">
              <app-blog-item></app-blog-item >
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
  </div>
</template>

<script>
import appSectionHeader from '../../components/app-section-header'
import appBlogItem from './project-item.vue'
import carousel from 'vue-owl-carousel'

export default {
  props: {
    itemsPerRow:{
      type: Number,
      default: 3
    }
  },
  components: {
    appSectionHeader,
    appBlogItem,
    carousel 
  }
}
</script>

<style scoped>
.project-card{
  padding: .1rem;
  height: 100%;
}
.c-carousel{
  position: relative;
  margin-top: -30px;
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

.project-banner{
  background-color: var(--secondary-color);
  height: 300px;
  padding: 40px 0;
}
.fix-width{
  max-width: 300px;
}
@media (min-width: 992px) {
  .project-banner{
    height: 150px;
    padding: 0;
  }
}
</style>