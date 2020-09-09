<template>
    <router-link to="/portfolio/details" class="project-item d-flex align-items-end">
      <span class="weight-medium">
        <p class="font-size-24 text-theme-color">Women's fashion</p>
        <p class="text-white">Fashion</p>
      </span>
      <img src="@/assets/img/blog-img/plus-icon.png" alt="add" class="img-fix d-none">
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.project-item{
  position: relative;
  border-radius: 6px;
  background-color: #CCCCCC;
  padding: 20px;
  min-height: 368px;
  height: 100%;
}
.project-item span {
  display: none;
}
.img-fix{
  display: none !important;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 100px;
  width: 100px !important;
}
.project-item:hover {
  background-color: var(--secondary-color);
  text-decoration: none;
}
.project-item:hover img, .project-item:hover span {
  display: inline-block !important;
}
</style>