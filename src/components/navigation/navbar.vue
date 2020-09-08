<template>
  <div>
    <div class="nav-top">
      <div class="container d-flex justify-content-between h-100">
        <div class="nav-border-r d-flex align-items-center">
          <div class="nav-top-item pr-2">
            ENG
            <i class="fas fa-chevron-down fa-sm"></i>
          </div>
          <div class="nav-top-item px-2 pr-3">
            USD
            <i class="fas fa-chevron-down fa-sm fa-sm"></i>
          </div>
        </div>
        <div class="d-none d-md-flex">
          <div>
            <a href="#Newsletter" class="pr-3 text-light nav-text-item nav-border-r">Newsletter</a>
            <a href="#contact" class="pr-3 pl-3 text-light nav-text-item nav-border-r">Contact us</a>
            <a href="#faqsa" class="pr-3 pl-3 text-light nav-text-item">FAQs</a>
          </div>
          <div class="nav-socials h-100 nav-border-l pl-2 d-flex align-items-center">
            <i class="fab fa-facebook-f px-1"></i>
            <i class="fab fa-twitter px-1"></i>
            <i class="fab fa-instagram px-1"></i>
            <i class="fab fa-pinterest-p px-1"></i>
            <i class="fab fa-youtube px-1"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-middle">
      <div class="container h-100 d-flex flex-column flex-md-row py-4 py-md-0 align-items-start align-items-md-center justify-content-between">
        <router-link to="/"><img class="mb-4 mb-md-0" src="@/assets/img/Logo.png" alt=""></router-link>

        <div class="input-group nav-search-grp">
          <input type="text" class="form-control nav-search-input" placeholder="Search products..." aria-label="Search" aria-describedby="nav-search-btn">
          <a class="nav-link nav-categories-link d-flex align-items-center" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
            Categories
            <i class="fas fa-chevron-down fa-sm fa-lg ml-4 dropdown-icon"></i>
          </a>
          <div class="input-group-prepend">
            <button class="input-group-text nav-search-btn" id="nav-search-btn"><i class="fas fa-search"></i></button>
          </div>
        </div>

        <div class="d-none d-lg-block">
          <router-link to="/account" class="custom-nav-link">
            <i class="far fa-user custom-nav-link-icon pr-1 "></i>
            My account
          </router-link>
          <a href="#likes" class="custom-nav-link ml-4">
            <i class="far fa-heart custom-nav-link-icon"></i>
          </a>
          <a href="#likes" class="custom-nav-link ml-3">
            <i class="fas fa-arrows-alt-h custom-nav-link-icon"></i>
          </a>
          <a href="#likes" class="custom-nav-link ml-3">
            <i class="fas fa-shopping-bag custom-nav-link-icon"></i>
            $0.00
          </a>
        </div>
      </div>
    </div>
    <div class="nav-bottom">
      <div class="container h-100 d-flex align-items-center justify-content-between position-relative">
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler mobile-toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars fa-lg"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav flex-column-reverse flex-lg-row">
              <li class="nav-item browse-cat px-3 mr-2 mr-xl-4">
                <a href="#home" class="custom-nav-link d-flex h-100 align-items-center text-white">
                  <i class="fas fa-list mr-2"></i>
                  Browse Categories
                  <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-2 dropdown-icon text-white ml-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <router-link to="/" class="custom-nav-link d-flex h-100 align-items-center mr-4">
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <div class="d-flex flex-column flex-lg-row h-100 align-items-lg-center mr-4 position-relative">
                  <a class="custom-nav-link " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shop
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-1 dropdown-icon"></i>
                  </a>
                  <div class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuLink">
                    <router-link to="/shop" class="dropdown-item">Browse</router-link>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="d-flex flex-column flex-lg-row h-100 align-items-lg-center mr-4 position-relative">
                  <a class="custom-nav-link " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Products
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-1 dropdown-icon"></i>
                  </a>
                  <div class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuLink">
                    <router-link to="/product" class="dropdown-item">Product</router-link>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="d-flex flex-column flex-lg-row h-100 align-items-lg-center mr-4 position-relative">
                  <a class="custom-nav-link " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-1 dropdown-icon"></i>
                  </a>
                  <div class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuLink">
                    <a href="#" class="dropdown-item">Empty</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="d-flex flex-column flex-lg-row h-100 align-items-lg-center mr-4 position-relative">
                  <a class="custom-nav-link " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                    <i class="fas fa-chevron-down fa-sm fa-lg pt-1 pl-1 dropdown-icon"></i>
                  </a>
                  <div class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuLink">
                    <router-link to="/shoppingcart" class="dropdown-item">Shopping Cart</router-link>
                    <router-link to="/wishlist" class="dropdown-item">Wishlist</router-link>
                    <router-link to="/compare" class="dropdown-item">Compare</router-link>
                    <router-link to="/about" class="dropdown-item">About</router-link>
                    <router-link to="/team" class="dropdown-item">Team</router-link>
                    <router-link to="/portfolio" class="dropdown-item">Portfolio</router-link>
                    <router-link to="/contact" class="dropdown-item">Contact</router-link>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/blog" class="custom-nav-link d-flex h-100 align-items-center mr-4">
                  Blog
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
    
        <button class="custom-theme-btn s-offer-btn">SPECIAL OFFER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Name: 'Navbar'
}
</script>

<style scoped>
.navbar-toggle{
  color: var(--theme-color) !important;
}

.nav-top {
  background-color: var(--theme-color);
  height: 40px;
  color: #ffffff;
}
.nav-border-r{
  border-right: white 1px solid;
}
.nav-border-l{
  border-left: white 1px solid;
}
.nav-text-item{
  line-height: 40px;
  height: 100%;
  display: inline-block;
}

.dropdown-icon{
  color: var(--theme-color);
}
.custom-nav-link{
  color: var(--secondary-color);
}
.custom-nav-link:hover{
  text-decoration: none;
  color: var(--theme-color);
}
.custom-nav-link-icon{
  font-size: 20px;
}
.nav-item{
  margin-top: 6px;
}

.nav-categories-link{
  color: var(--secondary-color);
  border-top: solid 1px var(--line-bullet);
  border-bottom: solid 1px var(--line-bullet);
}
.nav-search-btn{
  color: white;
  background-color: var(--theme-color);
  border: none;
  border-radius: 0 23px 23px 0 !important;
}
.nav-search-input{
  height: 100%;
  border-radius: 26px 0 0 26px;
  border-top: solid 1px var(--line-bullet);
  border-bottom: solid 1px var(--line-bullet);
  border-right: solid 1px var(--line-bullet);
  padding-left: 1.5rem;
  font-size: 14px;
}
::placeholder{
  color: var(--grey) !important;
}
.nav-search-grp{
  height: 46px;
}

@media(min-width: 768px){
  .nav-middle{
    height: 106px;
  }
  .nav-search-grp{
    max-width: 430px;
  }
  
}
@media(min-width: 992px){

.nav-item{
  margin: 0;
}
}
@media (min-width: 1200px)  { 
  .nav-search-grp{
    height: 46px;
    max-width: 540px;
  }
}

.nav-bottom{
  min-height: 50px;
  border-top: solid 1px var(--line-bullet);
}
.navbar{
  padding: 0;
}
.browse-cat{
  height: 50px;
  background-color: var(--theme-color);
}
.s-offer-btn{
  position: absolute;
  right: 15px;
  top: 6px;
  bottom: 0;
}
.mobile-toggle-btn{
  height: 50px;
  outline: none;
  padding: 0;
}

.custom-dropdown{
  position: absolute;
}
</style>