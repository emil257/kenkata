<template>
  <div>
    <current-path></current-path>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15998.75092589006!2d16.59003593955078!3d59.918138549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sse!4v1599414503100!5m2!1sen!2sse" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    <div class="container">
      <form class="contact-form">
        <div class="contact-header d-flex flex-column py-4 flex-md-row justify-content-between">
          <span class="d-flex align-items-center mb-3 mb-md-0">
            <i class="fas fa-home custom-contact-icon text-theme-color"></i>
            <span>
              <p>252, Chagalnaiya</p>
              <p>Feni-2500, Bangladesh</p>
            </span>
          </span>
          <span class="d-flex align-items-center mb-3 mb-md-0">
            <i class="fas fa-phone-volume custom-contact-icon text-theme-color"></i>
            <span>
              <p>+880-123456789</p>
              <p>+880-123456789</p>
            </span>
          </span>
          <span class="d-flex align-items-center">
            <i class="fas fa-envelope-open-text custom-contact-icon text-theme-color"></i>
            <span>
              <p>vanilla@website.com</p>
              <p>info@website.com</p>
            </span>
          </span>
        </div>
        <hr class="header-breaker">
        <div class="row contact-content">
          <div class="col-12 col-md-6">
            <h3 class="text-size-24 weight-medium text-theme-color mb-4">Get in Touch</h3>
            <p>We have world-class, flexible support via live chat, email and phone. We guarantee that you’ll be able to have any issue resolved within 24 hours. You can contact support immediately here.</p>
            <div class="mt-4 mb-4 mb-md-0">
              <span class="weight-bold">Follow us</span>
              <hr class="follow-hr">
              <div class="text-theme-color mt-2">
                <i class="fab fa-facebook-f pr-2"></i>
                <i class="fab fa-twitter px-2"></i>
                <i class="fab fa-instagram px-2"></i>
                <i class="fab fa-pinterest-p px-2 text-white"></i>
                <i class="fab fa-youtube px-2"></i>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <form>
            <input type="text" class="form-control custom-r-input" id="1" placeholder="Name">
            <input type="email" class="form-control custom-r-input" id="1" placeholder="Email">
            <input type="text" class="form-control custom-r-input" id="1" placeholder="Subject">
            <textarea class="form-control" id="" rows="7" placeholder="Message"></textarea>
            <button class="btn custom-theme-btn send-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import currentPath from '../components/navigation/current-path.vue'

export default {
   components: {
    currentPath
  }
}
</script>

<style scoped>
.map{
  width: 100%;
  height: 624px;
}
.contact-form{
  position: relative;
  background-color: var(--secondary-color);
  margin-top: -230px;
  z-index: 1;
  border-radius: 6px;
  color: white;
}
.custom-contact-icon{
  font-size: 23px;
  margin-bottom: 18px;
  margin-right: 8px;
}
.contact-header {
  min-height: 120px;
  padding: 50px;
}
.header-breaker{
  height: 2px;
  border: none;
  background-color: var(--theme-color);
  margin: 0;
}
.contact-content{
  padding: 50px;
}
.follow-hr{
  background-color: var(--theme-color);
  width: 40px;
  margin: 0;
  margin-bottom: 5px;
  margin-left: 28px;
  display: inline-block;
}
.custom-r-input{
  margin-bottom: 15px;
}
.send-btn{
  margin-top: 25px;
  height: 48px;
  line-height: 38px;
  font-size: 18px;
  border-radius: 28px;
  min-width: 190px;
}
@media(min-width: 768px){
  .contact-form{
    margin-top: -127px;
  }
}
</style>