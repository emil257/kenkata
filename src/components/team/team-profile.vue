<template>
  <div class="team-profile-bg">
    <img src="@/assets/img/about/team-thumb.png" alt="">
    <div class="team-profile-footer d-flex align-items-center flex-column">
      <h3 class="text-white text-size-18">JOHN DOE</h3>
      <p class="text-white mb-3">Managing Director</p>
      <div class="team-socials d-flex justify-content-between text-white align-items-center">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.team-profile-bg{
  border-radius: 6px;
  border: 2px solid var(--theme-color);
}
.team-profile-footer{
 background-color: var(--theme-color);
 padding: 20px 0;
}
.team-socials {
  border-radius: 21px;
  background-color: var(--secondary-color);
  height: 42px;
  width: 182px;
  padding: 0 22px ;
}

.team-profile-bg:hover .team-socials {
  color: var(--secondary-color) !important;
  background-color: white;
}
.team-profile-bg:hover {
  border: 2px solid var(--secondary-color) !important;
}
.team-profile-bg:hover .team-profile-footer{
  background-color: var(--secondary-color) !important;
}
</style>