<template>
  <div class="current-path">
    <div class="container">
      <div class="current-path-container d-flex align-items-center justify-content-between">
        <h3 class="text-theme-color">{{ $route.name }}</h3>
        <h2 v-if="subPath == null"><span class="text-theme-color">Home </span>/ {{ $route.name }}</h2>
        <h2 v-else><span class="text-theme-color">Home </span> / <span class="text-theme-color">{{ $route.name }} </span> / {{ subPath }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['subPath']
}
</script>

<style>
.current-path{
  background-color: #0e153da6;
}
.current-path-container{
  height: 140px;
}
.current-path-container h3{
  font-size: 24px;
}
.current-path-container h2{
  font-size: 16px;
  color: white;
}
</style>