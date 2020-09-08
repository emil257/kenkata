<template>
  <div class="app-latest-blog-header d-flex align-items-center flex-column">
    <h3>
      {{ first }}
      <span class="text-theme-color">{{second}}</span>
    </h3>
    <img src="@/assets/img/blog-img/underline.png" alt="underline">
    <p class="text-second-color">{{desc}}</p>
  </div>
</template>

<script>
export default {
  props: ['first','second','desc'],
  data() {
    return{
    }
  }
}
</script>

<style>
.app-latest-blog-header{
  margin-top: 105px;
  text-align: center;
}
.app-latest-blog-header h3{
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 21px;
}
.app-latest-blog-header p{
  margin-top: 25px;
  margin-bottom: 40px;
}
</style>