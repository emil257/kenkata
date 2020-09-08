<template>
  <div class="app-not-found">
    <div class="container">
      <div class="app-not-cound-container d-flex flex-column align-items-center justify-content-center">
        <img src="@/assets/img/404.png" alt="">
        <p class="mt-5">Oops! The page you are looking for doesn't exist.</p>
        <div class="mt-4">
          <button class="btn custom-cta-btn btn-w-u btn-theme-color mr-4">HOME</button>
          <button class="btn custom-cta-btn btn-w-u btn-second-color">CONTACT US</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  components: {
  }
}
</script>
<style scoped>
.app-not-found{
  background-color: var(--light-grey);
}
.app-not-cound-container{
  text-align: center;
  height: 600px;
}
.app-not-cound-container img{
  width: 90%;
  max-width: 555px;
}
.app-not-cound-container p{
  font-weight: 500;
  font-size: 24px;
}
</style>