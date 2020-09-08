<template>
  <div class="position-relative pl-3">
    <div class="c-item-bg col-9 col-md-8"></div>
    <div class="c-item-info col-9 col-sm-8 col-md-7 col-xl-6 position-absolute">
      <div class="c-item-date">
        <h1 class="c-item-date-day">29</h1>
        <p>MAR</p>
      </div>
      <div class="c-item-desc">
        <p class="c-item-author">By <span>Adam Moore</span></p>
        <p class="text-theme-color">A beautiful scenery in the
          world we are missing
        </p>
        <div class="c-item-tags">
          <span class="c-item-tag">
          Travel
          </span>
          <span class="c-item-tag">
            Fashion
          </span>
        </div>
        <router-link to="blog/details" class="btn c-item-btn">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.c-item-bg{
  background-color: #cccccc;
  border-radius: 6px;
  height: 400px;
}
.c-item-info{
  background-color: var(--secondary-color);
  margin: auto;
  border-radius: 6px;
  height: 310px;
  right: 15px;
  top: 0;
  bottom: 0;
  padding: 0 25px !important;
}
.c-item-date{
  background-color: var(--theme-color);
  color: white;
  padding: 11px;
  display: inline-block;
  text-align: center;
  
}
.c-item-date-day {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0;
}

.c-item-desc{
  margin-top: 25px;
  font-weight: 500;
  line-height: 26px;
}
.c-item-author{
  color: white;
  font-size: 14px;
  font-weight: 400;
}
.c-item-author span {
  text-decoration: underline;
}
.c-item-tags{
  margin-top: 20px;
}
.c-item-btn{
  background-color: white !important;
  border-radius: 24px !important;
  color: var(--theme-color) !important;
  padding: 5px 20px !important;
  position: absolute;
  bottom: 1.3rem;
}
</style>