<template>
  <div class="app-latest-blog">
    <div class="container position-relative">

    
      <app-section-header first="LATEST" second="BLOG" desc="Read our latest posts about our events and trending news"></app-section-header>

        <carousel class="c-blog" :responsive="{0:{items:1,nav:false},992:{items:2,nav:false}}">
          
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>
          <app-blog-item></app-blog-item>

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
import carousel from 'vue-owl-carousel'
import appBlogItem from '../components/blog/app-blog-item'

export default {
  components:{
    appSectionHeader,
    carousel,
    appBlogItem
  }
}
</script>

<style>
.c-blog{
  position: relative;
}
.c-next{
  position: absolute;
  top: -24px !important;
  right: -64px !important;
}
.c-prev{
  position: absolute;
  top: -24px !important;
  left: -64px !important;
}

.app-latest-blog{
  margin-bottom: 120px;
}

.c-item-bg{
  background-color: #cccccc;
  border-radius: 6px;
  height: 400px;
}
.c-item-info{
  background-color: var(--secondary-color);
  margin: auto;
  border-radius: 6px;
  height: 310px;
  right: 15px;
  top: 0;
  bottom: 0;
  padding: 0 25px !important;
}
.c-item-date{
  background-color: var(--theme-color);
  color: white;
  padding: 11px;
  display: inline-block;
  text-align: center;
  
}
.c-item-date-day {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0;
}

.c-item-desc{
  margin-top: 25px;
  font-weight: 500;
  line-height: 26px;
}
.c-item-author{
  color: white;
  font-size: 14px;
  font-weight: 400;
}
.c-item-author span {
  text-decoration: underline;
}
.c-item-tags{
  margin-top: 20px;
}
.c-item-btn{
  background-color: white !important;
  border-radius: 24px !important;
  color: var(--theme-color) !important;
  padding: 5px 20px !important;
  position: absolute;
  bottom: 1.3rem;
}
.blog-arrow{
  display: none;
}
@media (min-width: 1350px) { 
  .blog-arrow{
    display: flex !important;
  }
 }
</style>