<template>
  <div class="app-contact">
    <div class="container d-flex flex-column flex-xl-row justify-content-between align-items-center h-100">
      <div class="col-12 col-md-10 col-lg-5 px-0 mb-5 mb-xl-0">
        <h2>
          SUBSCRIBE
          <span class="text-theme-color">NOW</span>
        </h2> 
        <p>
          Signup for awesome news about our new products and
          know our special discounts on products.
        </p>
        <div class="contact-input-grp">
          <input type="text" class="form-control contact-input" placeholder="Enter email adress">
          <button class="contact-input-btn">Subscribe</button>
        </div>
      </div>
      <img class="contact-img" src="@/assets/img/contact-image.png" alt="contact img">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.app-contact{
  min-height: 313px;
  background-color: var(--light-grey);
  padding: 3rem 1rem;
}
.app-contact h2{
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}
.app-contact p {
  margin: 16px 0 29px 0;
  max-width: 391px;
}


.contact-img{
  width: 100%;
  max-width: 540px;
}
@media (min-width: 1200px)  { 
  .app-contact{
    padding: 0;
  }
}
</style>