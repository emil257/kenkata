<template>
  <div class="product-background" :class="{ rfpt: removable}">
    <div v-if="removable" class="product-remove-container d-flex align-items-center">
      <i class="fas fa-times text-theme-color remove-icon mr-2"></i>
      <p>Remove item</p>
    </div>
    
    <div class="product-brand" v-if="tag == 0">
      <img class="product-brand-img" src="@/assets/img/brands/Bexim.png" alt="">
    </div>
    <div class="p-tag p-tag-new d-flex align-items-center justify-content-center" v-if="tag == 1">
      <p>NEW</p>
    </div>
    <div class="p-tag p-tag-hot d-flex align-items-center justify-content-center" v-if="tag == 2">
      <p>HOT</p>
    </div>
    <div class="p-tag p-tag-sale d-flex align-items-center justify-content-center" v-if="tag == 3">
      <p>-20%</p>
    </div>


    <img class="product-image" src="@/assets/img/product-img/product-1.png" alt="">
    <div class="product-footer">
      <p>Men's denim shirts full</p>
    </div>

    <div class="product-overlay">
      <div class="product-overlay-info">
        <p class="mb-1">New look men's sneakers</p>
        <span class="c-item-tag">
          Travel
        </span>
        <p class="old-price">$220.00</p>
        <p class="new-price">$190.00</p>
      </div>
      <div class="r-stars product-overlay-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="product-overlay-controller d-flex align-items-center flex-column justify-content-between" :class="{rft: removable}">
        <i class="fas fa-circle text-danger red-tooltip" data-toggle="tooltip" data-placement="left" title="Color"></i>
        <i class="far fa-heart" data-toggle="tooltip" data-placement="left" title="Color"></i>
        <i class="fas fa-arrows-alt-h m" data-toggle="tooltip" data-placement="left" title="Color"></i>
        <router-link to="/product" data-toggle="tooltip" data-placement="left" title="Color"><i class="fas fa-search"></i></router-link>
        <i class="fas fa-cart-plus" data-toggle="tooltip" data-placement="left" title="Color"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['tag', 'removable']
}
</script>

<style scoped>



.product-background{
  padding: 25px;
  padding-bottom: 46px;
  background-color: var(--light-grey);
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

/* tags */
.product-brand{
  position: absolute;
  background-color: white;
  padding: 18px 20px;
  border-radius: 6px;
  display: inline-block;
  z-index: 1;
}
.product-brand-img{
  height: 38.5px;
}
.p-tag{
  color: white;
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 1;
}
.p-tag-new{
  background-color: var(--theme-color);
}
.p-tag-hot{
  background-color: var(--hot-color);
}
.p-tag-sale{
  background-color: var(--sale-color);
}
/* end tags */

.product-footer{
  font-size: 18px;
  background-color: var(--secondary-color);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  border-radius: 0 0 6px 6px;
  padding: 10px 25px 10px 25px;
}
.product-image{
  position: relative;
  height: 100%;
  display:block;
  margin: auto;
  right: 0;
}

.product-background:hover .product-overlay{
  display: block;
}

.product-overlay{
  display: none;
  background-color: #0e153ed9;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 6px;
  padding: 25px;
}

.product-overlay-info{
  position: absolute;
  bottom: 25px;
}
.product-overlay p {
  color: white;
  font-size: 18px;
}
.old-price{
  font-size: 16px !important;
  text-decoration: line-through;
  margin-top: 8px;
  margin-bottom: 8px;
}
.new-price {
  font-weight: 500;
  font-size: 24px !important;
  color: var(--theme-color) !important;
}
.product-overlay-rating{
  position: absolute;
  margin: 0;
  right: 25px;
  bottom: 25px;
}

.product-overlay-controller{
  background-color: white;
  color: var(--grey);
  width: 46px;
  border-radius: 26px;
  height: 200px;
  position: absolute;
  right: 13px;
  top: 13px;
  padding: 23px 0;
}
.product-overlay-controller i{
  color: var(--grey);
}
.product-overlay-controller i:hover{
  color: var(--theme-color)
}
.rfpt{
  padding-top: 70px !important; 
}
.rft{
  top: 65px;
}


</style>
