<template>
  <div class="shop-category">
    <div class="container">
      <app-section-header first="SHOP BY" second="CATEGORY" desc="We always try to give you the best product within a fast and reliable way"></app-section-header>
      <div class="shop-category-grid">
        <div class="shop-category-item item-men">
          <div class="shop-category-footer"><p>Men</p></div>
        </div>
        <div class="shop-category-item item-women">
          <div class="shop-category-footer"><p>Women</p></div>
        </div>
        <div class="shop-category-item item-kids">
          <div class="shop-category-footer"><p>Kids</p></div>
        </div>
        <div class="shop-category-item item-shoes">
          <div class="shop-category-footer"><p>Shoes</p></div>
        </div>
        <div class="shop-category-item item-hats">
          <div class="shop-category-footer"><p>Hats</p></div>
        </div>
        <div class="shop-category-item item-sunglasses">
          <div class="shop-category-footer"><p>Sunglasses</p><p class="item-qnt">18 products</p></div>
        </div>
        <div class="shop-category-item item-watches">
          <div class="shop-category-footer"><p>Watches</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appSectionHeader from '../components/app-section-header.vue'
export default {
  components:{
    appSectionHeader
  }
}
</script>

<style>
.shop-category-grid{
  display: grid;
  grid-template-areas:
      "men kids"
      "women kids"
      "women hats"
      "shoes shoes"
      "watches sunglasses";
  gap: .4rem;
  height: 850px;
}
.shop-category-item{
  position: relative;
  background-color: #CCCCCC;
  border-radius: 6px;
}
.shop-category-footer{
  line-height: 28px;
  font-weight: 500;
  padding: 8px 15px 6px 15px;
  font-size: 16px;
  position: absolute;
  width: 50%;
  color: var(--theme-color);
  bottom: 0;
  border-radius: 0 6px 0 6px;
  background-color: var(--secondary-color);
}
.item-qnt{
  font-size: 14px;
  color: white;
  line-height: 26px;
}

.item-men{
  grid-area: men;
}
.item-women{
  grid-area: women;
}
.item-kids{
  grid-area: kids;
}
.item-shoes{
  grid-area: shoes;
}
.item-hats{
  grid-area: hats;
}
.item-sunglasses{
  grid-area: sunglasses;
}
.item-watches{
  grid-area: watches;
}
@media(min-width: 992px){
  .shop-category-grid{
    height: 650px;
    grid-template-areas:
      "men women women kids kids"
      "shoes shoes hats kids kids"
      "shoes shoes sunglasses sunglasses watches";
  }
}
</style>