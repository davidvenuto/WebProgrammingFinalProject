<script setup lang="ts">


</script>

<template>
  <main class="hero is-primary is-large hero-first">
    <div class="hero-body">
      <div class="container">
        <h1 class="subtitle">Ready to get in the best shape of your life?</h1>
        <RouterLink to="/signup">Sign up now!</RouterLink>
      </div>
    </div>
  </main>
  <main class="hero is-primary is-large hero-second">
    <div class="hero-body">
      <div class="half-container">
        <div class="info-box h2 underline-text">
          <h1>FAQs</h1>
          <h2>- Why am I so fat?</h2>
          <h2>- How to join?</h2>
          <h2>- Why is this website so cool?</h2>
        </div>
        <div class="info-box h2 underline-text">
          <h1>Why use FitQuest?</h1>
          <h2>- Track your workouts</h2>
          <h2>- See friends workouts</h2>
          <h2>- Get in depth statistics</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.hero-body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
}

.half-container {
  display: flex;
  width: 100%;
  gap: 20px;
  color: white;
}

.half-container h1 {
  font-size: 44px;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
}

.info-box {
  flex: 1;
  width: 50px;
  height: 500px;
  background: rgb(0, 0, 0, 0.84);
  position: relative;
}

.info-box h2{
margin: 50px;
text-decoration: underline;
font-size: 24px;
}

.info-box h2:hover {
  font-size: 26px;
}

.hero.is-primary.is-large {
  width: 100%;
  background-position: center;
}

.hero-first {
  background-image: url('/Users/davidvenuto/Desktop/Web Programming/WebProgrammingFinalProject/client/src/pictures/guylifting.PNG');
  margin-bottom: 50px;
  background-size: 80%;
}

.hero-second {
  background-image: url('/Users/davidvenuto/Desktop/Web Programming/WebProgrammingFinalProject/client/src/pictures/treadmillguy.png');
  background-size: cover;
  background-position: center;
  height: 900px;
}

.subtitle{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 44px;
}
</style>