<template>
  <div class="app-prod-popup d-flex align-items-center justify-content-center">
    <div class="popup-window">
      <div class="popup-close d-flex align-items-center justify-content-center"><i class="fas fa-times"></i></div>

      <div class="row">
        <div class="product-prev col-12 col-xl-6">
          <img class="product-prev-focus" src="@/assets/img/product-img/product-pre-large.png" alt="">
          <img class="product-next-prev" src="@/assets/img/product-img/product-icon.png" alt="">
          <img class="product-next-prev" src="@/assets/img/product-img/product-icon.png" alt="">
          <img class="product-next-prev" src="@/assets/img/product-img/product-icon.png" alt="">
          <img class="product-next-prev" src="@/assets/img/product-img/product-icon.png" alt="">
        </div>
        <div class="product-desc col-12 col-xl-6">
          <span class="d-flex mb-3 justify-content-between">
            <div class="text-theme-color d-flex align-items-center">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <p class="ml-3 text-second-color">(2 customer reviews)</p>
            </div>
            <img class="brand-img-width" src="@/assets/img/brands/Bexim.png" alt="">
          </span>
          <h3 class="weight-medium text-theme-color text-size-24 mb-3">Gents Blue Lightweight Trainers</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
          <hr class="mt-4">
          <div class="d-flex align-items-center mb-3">
            <span class="weight-medium text-theme-color text-size-24">$190.00</span>
            <span class="p-old-price ml-3">$190.00</span>
            <img class="ml-4" src="@/assets/img/product-img/in-stock.png" alt="stock">
            <p class="ml-2">In stock</p>
          </div>

          <div class="d-flex">
            <div class="increase-qnt-btn-grp d-flex">
              <button class="increase-qnt-btn-dec">-</button>
              <span class="increase-qnt-num d-flex align-items-center">3</span>
              <button class="increase-qnt-btn-inc">+</button>
            </div>
            <button class="btn custom-theme-btn s-offer-btn btn-add-cart mx-4">
              <i class="fas fa-cart-plus mr-1"></i>
              Add to cart
            </button>
            <img class="product-option-img mr-2" src="@/assets/img/product-img/product-options/color-picker.png" alt="color">
            <img class="product-option-img d-none d-sm-block mr-2" src="@/assets/img/product-img/product-options/compare.png" alt="comp">
            <img class="product-option-img" src="@/assets/img/product-img/product-options/add-wishlist.png" alt="add">
          </div>
          <p class="my-3">Category: <span class="text-theme-color">Shoes</span></p>
          <p>Tags: 
            <span class="product-tag ml-3">Fashion</span>
            <span class="product-tag ml-2">Shoes</span>
            <span class="product-tag ml-2">Sneakers</span>
          </p>
          <div class="d-flex align-items-center mt-3">
              <p class="mr-2">Share:</p> 
              <button class="media-share-btn media-fb">
                <i class="fab fa-facebook-f px-1"></i>
              </button>
              <button class="media-share-btn media-twitter">
                <i class="fab fa-twitter px-1"></i>
              </button>
              <button class="media-share-btn media-pine">
                <i class="fab fa-pinterest-p px-1"></i>
              </button>
              <button class="media-share-btn media-linked">
                <i class="fab fa-linkedin-in"></i>
              </button>
              <button class="media-share-btn media-mail">
                <i class="fas fa-envelope"></i>
              </button>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.brand-img-width{
  width: 100px;
}

.app-prod-popup{
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: #0e153ed9;
}
.popup-window{
  position: relative;
  background-color: white;
  padding: 30px;
  border-radius: 6px;
  max-width: 580px;
  /* overflow-y: scroll; */
  overflow-x: hidden;
  max-height: 500px;
}
.popup-close{
  position: absolute;
  background-color: var(--theme-color);
  height: 30px;
  width: 30px;
  right: -30px;
  top: -30px;
  border-radius: 50%;
  font-size: 19px;
  color: white;
}
.product-section{
  margin: 120px 0;
}
.product-prev{
  display: grid;
  gap: 1rem;
  grid-template-columns: 100%;
}
.product-prev-focus{
  grid-row: 1/5;
  width: 100%;
}
.product-next-prev{
  height: 100%;
}

.p-old-price{
  text-decoration: line-through;
  color: var(--grey);
}
.btn-add-cart{
  width: unset;
  padding: 0 25px;
  font-weight: 400;
}
.product-option-img{
  width: 37px;
  height: 37px;
}

@media (min-width: 1200px) {
  .product-prev-focus{
    width: 100%;
  }
  .product-next-prev{
    width: 100px;
  }
  .popup-window{
  max-width: 1100px;
  }
  .product-prev{
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
} 

</style>