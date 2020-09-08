<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <app-brands></app-brands>
    <app-footer></app-footer>
  </div>
</template>

<script>
import navbar from './components/navigation/navbar'
import appFooter from './components/app-footer.vue'
import appBrands from './components/app-brands'

export default {
  components: {
    navbar,
    appFooter,
    appBrands
  }
}
</script>

<style>

</style>
