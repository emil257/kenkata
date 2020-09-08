<template>
  <div>
    <current-path></current-path>
    <div class="container">
      <div class="port-header d-flex align-items-center justify-content-center flex-column">
        <h3 class="text-size-36 weight-bold mb-0">Some of our special</h3>
        <h3 class="text-size-36 weight-bold text-theme-color mb-4">project gallery</h3>
        <p class="text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      
      </div>
      <div class="project-gallery">
        <div class="port-categories">
          <div class="d-flex flex-column flex-md-row justify-content-md-center">
            <span class="port-categori">All</span>
            <span class="port-categori active">Graphic Design</span>
            <span class="port-categori">Branding</span>
            <span class="port-categori">Web Design</span>
            <span class="port-categori">Web Development
            </span>
          </div>
          <hr class="port-categories-breaker mb-5">
        </div>
        <div class="port-grid">
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
          <project-item></project-item>
        </div>
          <div class="d-flex justify-content-center mt-5">
          <button class="btn custom-theme-btn btn-load my-2">
            LOAD MORE
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import currentPath from '../components/navigation/current-path'
import projectItem from '../components/blog/project-item'
export default {
  components:{
    currentPath,
    projectItem
  }
}
</script>

<style scoped>
.project-gallery{
  padding: 0 5%;
}
.port-header{
  padding: 120px 0;
}
.port-header p {
  max-width: 540px;
}
.port-categories-breaker{
  margin-top: -2px;
  height: 2px;
  border: none;
  background-color: var(--product-bg);
}
.port-categori{
  padding: 7px 13px;
  border-bottom: 2px solid var(--product-bg);
  cursor: pointer;
}
.port-categori.active{
  color: var(--theme-color);
  border-bottom: 2px solid var(--theme-color);
}
.port-categori:hover{
  color: var(--theme-color);
  border-bottom: 2px solid var(--theme-color);
}
.port-grid{
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 530px;
}
.btn-load{
  height: 48px;
  width: 160px;
  border-radius: 27px;
  font-size: 18px;
}
@media (min-width: 992px) {
  .port-grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1400px) {
  .port-grid{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>