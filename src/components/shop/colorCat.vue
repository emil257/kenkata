<template>
  <div class="sorting-option-category d-flex justify-content-between">
    <div class="custom-control custom-checkbox">  
        <input type="checkbox" class="custom-control-input" :class="color" :id="color">  
        <label class="custom-control-label pl-1" :class="color" :for="color">{{ capitalizeFirstLetter(color) }}</label>  
    </div>
    <span class="sorting-option-qnt">18</span>
  </div>
</template>

<script>
export default {
  props:['color', 'qnt'],
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>

<style>

</style>