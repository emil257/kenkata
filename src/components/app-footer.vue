<template>
  <div class="app-footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xl-3">
            <img src="@/assets/img/footer-logo.png" alt="footer logo" class="mb-5">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
            <span>Follow us</span>
            <hr>
            <div class="text-theme-color mt-2">
              <i class="fab fa-facebook-f pr-2"></i>
              <i class="fab fa-twitter px-2"></i>
              <i class="fab fa-instagram px-2"></i>
              <i class="fab fa-pinterest-p px-2"></i>
              <i class="fab fa-youtube px-2"></i>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0 col-xl-2 footer-top-contact-info">
            <h5 class="text-theme-color">CONTACT INFO</h5>
            <div>
              <p class="text-theme-color">Adress:</p>
              <p>Solna Business Park</p>
              <p>Feni-2500, Stockholm</p>
            </div>
            <div class="mt-3">
              <p class="text-theme-color">Phone:</p>
              <p>+08-123456789</p>
              <p>+08-123456789</p>
            </div>
            <div class="mt-3">
              <p class="text-theme-color">Email:</p>
              <p>support@website.com</p>
              <p>info@website.com</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-xl-0 col-xl-2 offset-xl-1">
            <h5 class="text-theme-color">USEFUL LINKS</h5>
            <ul class="useful-links">
              <li><a href="#policy">Privacy Policy</a></li>
              <li><a href="#policy">Teams & Conditions</a></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
              <li><a href="#policy">Our Sitemap</a></li>
              <li><a href="#policy">Latest News</a></li>
              <li><a href="#policy">Returns</a></li>
            </ul>
          </div>
          <div class="col-md-6 mt-4 mt-xl-0 col-xl-3 offset-xl-1">
            <h5 class="text-theme-color">RECENT INSTAGRAM</h5>
            <img src="@/assets/img/recent-instagram.png" alt="">
          </div>
        </div>
        </div>
    </div>
    <div class="footer-copy">
      <div class="container d-flex flex-column-reverse flex-md-row align-items-center h-100 justify-content-md-between py-3 py-md-0">
        <p class="mt-2 mt-md-0">© Copyright 2020 KenKata</p>
        <img class="footer-payment-img" src="@/assets/img/payment-systems.png" alt="payments">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.app-footer{
  color: white;
  border-top: 6px solid var(--theme-color);
}
.footer-top{
  background-color: var(--secondary-color);
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}
.footer-top hr {
  background-color: var(--theme-color);
  width: 40px;
  margin: 0;
  margin-bottom: 5px;
  margin-left: 35px;
  display: inline-block;
}
.footer-top p{
  font-size: 14px;
}
.footer-top h5 {
  font-size: 18px;
  margin-bottom: 30px;
}
.footer-top-contact-info p{
  font-size: 16px;
}
.useful-links{
  list-style-type: none;
  padding: 0;
}
.useful-links li{
  margin-bottom: 10px;
}
.useful-links li a{
  color: white;
}
.footer-copy{
  background-color: var(--secondary-dark-color);
  min-height: 80px;
}
.footer-payment-img{
  width: 100%;
  max-width: 390px;
}
@media (min-width: 768px)  { 
  .footer-copy{
    height: 80px;
  }
}
</style>