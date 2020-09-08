<template>
  <div>
    <div class="team-banner d-flex justify-content-center weight-bold text-white flex-column ">
      <div class="container">
        <h1 class="text-size-36">An <span class="text-theme-color">Awesome Team</span></h1>
        <h1 class="text-size-36">Behind Our Online store</h1>
      </div>
    </div>
    <div class="container">
      <div class="team-section d-flex align-items-center flex-column">
        <div class="team-header">
          <h1 class="text-size-36 text-theme-color weight-bold mb-3">Behind in every successful business,<br>there have a strong qualified person</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
        </div>
        <div class="team-grid mt-5">
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
          <team-profile></team-profile>
        </div>
      </div>
    </div>
    <div class="special-moments-section">
      <span class="d-flex flex-column align-items-center mb-4">
        <h1 class="weight-bold text-size-36 text-white mb-0">Some <span class="text-theme-color">special moments</span></h1>
        <h1 class="weight-bold text-size-36 text-white mb-3">from our company</h1>
        <p class="text-white text-center text-fix mb-3">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </span>
      <div class="special-moments-grid">
        <div class="special-moment-item"></div>
        <div class="special-moment-item"></div>
        <div class="special-moment-item"></div>
      </div>
    </div>
    <app-contact></app-contact>
  </div>
</template>

<script>
import appContact from '../components/app-contact.vue'
import teamProfile from '../components/team/team-profile.vue'
export default {
  components:{
    appContact,
    teamProfile
  }
}
</script>

<style>
.team-banner{
  background-color: #0e153da6;
  height: 400px;
}
.team-section{
  margin: 120px 0;
}
.team-header{
  max-width: 730px;
  text-align: center;
}
.team-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.special-moments-section{
  padding-top: 100px;
  background-color: var(--secondary-color);
  margin-bottom: 120px;
}
.special-moments-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
.special-moment-item{
  background-color: #CCCCCC;
  min-height: 600px;
}
.text-fix{
  max-width: 540px;
}
@media (min-width: 768px) {
  .team-grid{
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .special-moments-grid{
    grid-template-columns: 1fr 1fr 1fr;
  }
  .team-grid{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1200px) {
  .team-grid{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>