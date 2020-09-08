<template>
  <div>
    <current-path></current-path>
    <div class="container">
      <div class="row pt-5">
        <div class="col-12 col-lg-6">
          <form class="custom-form">
            <h3 class="text-size-24">LOGIN</h3>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Username or email <span class="text-theme-color">*</span></label>
              <input type="text" class="form-control custom-r-input" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Password <span class="text-theme-color">*</span></label>
              <input type="password" class="form-control custom-r-input" id="exampleFormControlInput1">
            </div>
            <button class="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
              LOGIN
            </button>
            <div class="d-flex align-items-center justify-content-between mt-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="accept-terms">
                <label class="form-check-label" for="accept-terms">
                  Remember me
                </label>
              </div>
              <p class="text-theme-color">Lost your password?</p>
            </div>
            <span class="d-flex align-items-center justify-content-between my-4">
              <hr>
              <p class="weight-medium">OR LOGIN WITH</p>
              <hr>
            </span>
            <div class="d-flex justify-content-between">
              <div class="opt-login opt-login-facebook d-flex align-items-center justify-content-center">
                <img src="@/assets/img/media-logos/facebook-icon.png" class="opt-login-img" alt="">
                <p>Facebook</p>
              </div>
              <div class="opt-login opt-login-google d-flex align-items-center justify-content-center">
                <img src="@/assets/img/media-logos/google-icon.png" class="opt-login-img" alt="">
                <p>Google</p>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 mt-4 mt-lg-0">
          <form class="custom-form">
            <h3 class="text-size-24">REGISTER</h3>
            <p class="text-dark-grey-color font-size-14 my-3">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Username<span class="text-theme-color">*</span></label>
              <input type="text" class="form-control custom-r-input" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Email adress<span class="text-theme-color">*</span></label>
              <input type="email" class="form-control custom-r-input" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="text-size-14 font-montserrat">Password <span class="text-theme-color">*</span></label>
              <input type="password" class="form-control custom-r-input" id="exampleFormControlInput1">
            </div>
            <p class="mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span class="text-size-14 font-montserrat text-theme-color weight-bold">privacy policy.</span></p>
            <button class="btn custom-theme-btn text-size-18 btn-p-t-c mt-4">
              REGISTER
            </button>
          </form>
        </div>
      </div>
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
.custom-form{
  background-color: var(--light-grey);
  border-radius: 6px;
  padding: 24px 30px;
}
.custom-r-input{
  border: none !important;
}
.custom-form hr{
  background-color: var(--grey);
  height: 1px;
  border: none;
  width: 30%;
  margin: 0;
}

.opt-login{
  width: 48%;
  max-width: 235px;
  position: relative;
  border-radius: 6px;
  color: white;
  padding: 9px;
}
.opt-login-img{
  position: absolute;
  left: 9px;
}
.opt-login-facebook{
  background-color: #3B5998;
}
.opt-login-google{
  background-color: #4285F4;
}
</style>