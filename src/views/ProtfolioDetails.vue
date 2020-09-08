<template>
  <div>
    <current-path subPath="Women's fashion choice"></current-path>
      <div class="container port-container">
        <div class="d-flex flex-column align-items-center flex-lg-row align-items-lg-start justify-content-lg-between px-3">
          <div class="pr-lg-4 text-fix">
            <h1 class="text-theme-color text-size-36 weight-bold">In these days women's fashion</h1>
            <h1 class="text-theme-color text-size-36 weight-bold mb-3">became great!</h1>
            <p class="text-size-14">Date: <span class="text-theme-color">30 July 2020</span>, Category: <span class="text-theme-color">Fashion</span></p>
            <p class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p class="theme-p">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et.</p>
            <p class="mt-4">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et, fermentum dolor. In hac habitasse platea dictumst.</p>
          </div>
          <div>
            <img class="img-fix-w mt-4 mt-lg-0" src="@/assets/img/blog-img/port-content-thumb.png" alt="thumb">
          </div>
        </div>
        <div class="d-flex flex-column-reverse align-items-center flex-lg-row align-items-lg-start justify-content-lg-between px-3 mt-5">
          <div class="d-flex flex-column">
            <img class="img-fix-w mt-4 mt-lg-0" src="@/assets/img/blog-img/port-content-thumb-2.png" alt="thumb">
            <img class="mt-4 img-fix-w" src="@/assets/img/blog-img/share-medias.png" alt="thumb">
            <span class="d-flex mt-4">Tags: <span class="project-tag ml-3">Fashion</span><span class="project-tag ml-2">Shoes</span><span class="project-tag ml-2">Sneakers</span></span>
          </div>
          <div class="pl-lg-4 text-fix">
            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p class="theme-p">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed lacus elementum feugiat. Vivamus ac sagittis justo. Suspendisse in purus lobortis, accumsan urna et.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet ullamcorper congue. Nam lobortis eros in risus rhoncus gravida. Pellentesque enim lectus, laoreet sit amet rhoncus in, semper vitae odio. Proin congue malesuada posuere. Aenean dapibus et magna non dictum. Praesent ut lacinia dui, ac malesuada nisi. Nullam pharetra, dui ac tincidunt pellentesque, diam elit dapibus augue, vel lobortis tortor neque eu velit.</p>
          </div>
        </div>
      </div>
    <related-projects></related-projects>
  </div>
</template>

<script>
import currentPath from '../components/navigation/current-path.vue'
import relatedProjects from '../components/blog/related-projects.vue'

export default {
  name: 'Portfolio Details',
  components: {
    currentPath,
    relatedProjects
  }
}
</script>

<style scoped>
.port-container{
  padding: 120px 0;
}

.img-fix-w{
  width: 100%;
}
</style>