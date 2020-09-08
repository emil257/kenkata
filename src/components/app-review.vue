<template>
  <div class="app-review d-flex align-items-center ">
    <div class="container">
        <carousel class="c-blog" :responsive="{0:{items:1,nav:false}}">

          <div class="d-flex flex-column align-items-center">
            <img class="r-quote" src="@/assets/img/review-img/quote.png" alt="quote">
            <img class="r-thumb" src="@/assets/img/review-img/review-thumb.png" alt="thumb">

            <div class="r-stars">
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="far fa-star "></i>
            </div>

            <p class="r-thumb-auth text-theme-color">Johny Wesmullar</p>
            <p class="r-thumb-desc">CEO, Biotech Inc.</p>

            <p class="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <img class="r-quote" src="@/assets/img/review-img/quote.png" alt="quote">
            <img class="r-thumb" src="@/assets/img/review-img/review-thumb.png" alt="thumb">

            <div class="r-stars">
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="far fa-star "></i>
            </div>

            <p class="r-thumb-auth text-theme-color">Johny Wesmullar</p>
            <p class="r-thumb-desc">CEO, Biotech Inc.</p>

            <p class="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
          <div class="d-flex flex-column align-items-center">
            <img class="r-quote" src="@/assets/img/review-img/quote.png" alt="quote">
            <img class="r-thumb" src="@/assets/img/review-img/review-thumb.png" alt="thumb">

            <div class="r-stars">
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="fas fa-star "></i>
              <i class="far fa-star "></i>
            </div>

            <p class="r-thumb-auth text-theme-color">Johny Wesmullar</p>
            <p class="r-thumb-desc">CEO, Biotech Inc.</p>

            <p class="r-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
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
import carousel from 'vue-owl-carousel'
export default {
  components:{
    carousel 
  }
}
</script>

<style>
.app-review{
  background-color: var(--secondary-color);
  min-height: 717px;
  padding: 2rem 0;
}
.r-text{
  color: white;
  text-align: center;
  max-width: 731px;
}
.r-thumb{
  margin-top: 46px;
  margin-bottom: 30px;
  width: 190px !important;
}
.r-quote{
  width: 100px !important;
}

.r-thumb-auth{
  font-weight: 500;
  font-size: 18px;
}
.r-thumb-desc{
  font-size: 14px;
  color: white;
  margin-bottom: 33px;
}
</style>