<template>
  <div class="mr-5">
    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Product Categories</p>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Men's</p>
        <span class="sorting-option-qnt">18</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Women's</p>
        <span class="sorting-option-qnt">23</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Kids</p>
        <span class="sorting-option-qnt">32</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Hats</p>
        <span class="sorting-option-qnt">12</span>
      </div>
      <div class="sorting-option-category active d-flex justify-content-between">
        <p class="sorting-option-name">Sunglasses</p>
        <span class="sorting-option-qnt">15</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Shoes</p>
        <span class="sorting-option-qnt">12</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">Watches</p>
        <span class="sorting-option-qnt">20</span>
      </div>
    </div>
    
    <div class="sorting-categories">
      <p class="text-theme-color weight-medium mb-3">Filter by Price</p>
      <vue-slider v-model="value" class="mb-3"/>
      <span class="d-flex justify-content-between">
        <p>Price: $0 - $10,000</p>
        <button class="btn price-filter-btn">Filter</button>
      </span>
    </div>

    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Filter by Color</p>
      <color-cat color="black" :qnt="18"></color-cat>
      <color-cat color="gray" :qnt="18"></color-cat>
      <color-cat color="red" :qnt="18"></color-cat>
      <color-cat color="green" :qnt="18"></color-cat>
      <color-cat color="orange" :qnt="18"></color-cat>
      <color-cat color="brown" :qnt="18"></color-cat>
    </div>

    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Filter by Size</p>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">XS</p>
        <span class="sorting-option-qnt">18</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">S</p>
        <span class="sorting-option-qnt">23</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">M</p>
        <span class="sorting-option-qnt">32</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">L</p>
        <span class="sorting-option-qnt">12</span>
      </div>
      <div class="sorting-option-category active d-flex justify-content-between">
        <p class="sorting-option-name">XL</p>
        <span class="sorting-option-qnt">15</span>
      </div>
      <div class="sorting-option-category d-flex justify-content-between">
        <p class="sorting-option-name">XXL</p>
        <span class="sorting-option-qnt">12</span>
      </div>
    </div>

    
    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Filter by Brand</p>
      <div class="d-flex justify-content-between mt-3">
        <span class="brand-filter-span"><img src="@/assets/img/brands/Bexim.png" alt=""></span>
        <span class="brand-filter-span"><img src="@/assets/img/brands/Lighton.png" alt=""></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="brand-filter-span"><img src="@/assets/img/brands/Dismis.png" alt=""></span>
        <span class="brand-filter-span"><img src="@/assets/img/brands/Rosimo.png" alt=""></span>
      </div>
      <div class="d-flex justify-content-between">
        <span class="brand-filter-span"><img src="@/assets/img/brands/Dallas.png" alt=""></span>
        <span class="brand-filter-span"><img src="@/assets/img/brands/Bexim.png" alt=""></span>
      </div>
    </div>

    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Product Status</p>
      <div class="custom-control custom-checkbox">  
        <input type="checkbox" class="custom-control-input" id="sale">  
        <label class="custom-control-label pl-1"  for="sale">On Sale</label>  
      </div>
      <div class="custom-control custom-checkbox">  
        <input type="checkbox" class="custom-control-input" id="stock">  
        <label class="custom-control-label pl-1"  for="stock">In Stock</label>  
      </div>
    </div>
    
    <div class="sorting-categories">
      <p class="text-theme-color weight-medium">Top Rated Products</p>
      <div class="d-flex align-items-center mt-2">
        <img class="product-icon-small" src="@/assets/img/product-img/product-icon.png" alt="small product">
        <div class="d-flex flex-column justify-content-between ml-2">
          <p>Circle pattern girls...</p>
          <div class="text-theme-color">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p class="weight-medium">$190</p>
        </div>
      </div>
      <div class="d-flex align-items-center mt-2">
        <img class="product-icon-small" src="@/assets/img/product-img/product-icon.png" alt="small product">
        <div class="d-flex flex-column justify-content-between ml-2">
          <p>Circle pattern girls...</p>
          <div class="text-theme-color">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p class="weight-medium">$190</p>
        </div>
      </div>
      <div class="d-flex align-items-center mt-2">
        <img class="product-icon-small" src="@/assets/img/product-img/product-icon.png" alt="small product">
        <div class="d-flex flex-column justify-content-between ml-2">
          <p>Circle pattern girls...</p>
          <div class="text-theme-color">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p class="weight-medium">$190</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colorCat from './colorCat'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    colorCat,
    VueSlider
  }
}
</script>

<style scoped>
.sorting-categories{
  width: 255px;
  margin-bottom: 46px;
}
.sorting-option-category{
  margin-top: 10px;
}
.sorting-option-category.active p{
  color: var(--theme-color);
}
.sorting-option-category.active span{
  color: white;
  background-color: var(--theme-color);
  border-color: var(--theme-color);
}
.sorting-option-qnt{
  border: 1px solid var(--line-bullet);
  border-radius: 6px;
  padding: 0 4px;
  line-height: 22px;
}
.price-filter-btn{
  background-color: var(--theme-color) !important;
  color: white !important;
  height: 24px;
  width: 72px;
  padding: 0 !important;
  font-size: 14px !important;
  border-radius: 12px !important;
}

.brand-filter-span{
  margin-top: 10px;
  border: 1px solid var(--line-bullet);
  border-radius: 6px;
  padding: 2px 20px 6px 20px;
}
.brand-filter-span img{
  width: 70px;
}

.custom-checkbox{
  margin-top: 10px;
}
.custom-control-label:before{
  background-color:white !important;
  border: none !important;
  height: 20px !important;
  width: 20px !important;
  position: absolute !important;
  top: 2px !important;
  border: 2px solid var(--grey) !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before{
  background-color:black;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::after{
  background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='black' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  height: 20px !important;
  width: 20px !important;
  /* position: absolute !important; */
  top: 2px !important;
}


</style>