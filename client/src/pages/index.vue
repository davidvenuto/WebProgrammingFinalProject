<script setup lang="ts">


</script>

<template>
  <main class="hero is-primary is-large hero-first">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Home</h1>
        <h2 class="subtitle">Ready to get in the best shape of your life?</h2>
      </div>
    </div>
  </main>
  <main class="hero is-primary is-large hero-second">
    <div class="hero-body">
      <div class="half-container">
        <div class="left-half">
          <h1>FAQs</h1>
          <h2>Why am I so fat?</h2>
        </div>
        <div class="right-half">
          Right Side Content
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
}

.half-container {
  display: flex;
  width: 100%;
  gap: 20px;
}

.left-half, .right-half {
  flex: 1;
  width: 50px;
  height: 500px;
  background: rgb(0, 0, 0, 0.84); 
  mix-blend-mode: multiply;
  filter: blur(8px);
}

.hero.is-primary.is-large {
  width: 100%;
  background-position: center;
}

.hero-first {
  background-image: url('/Users/davidvenuto/Desktop/Web Programming/WebProgrammingFinalProject/client/src/pictures/guylifting.PNG');
  margin-bottom: 50px;
  background-size: 85%;
}

.hero-second {
  background-image: url('/Users/davidvenuto/Desktop/Web Programming/WebProgrammingFinalProject/client/src/pictures/treadmillguy.png');
  background-size: cover; 
  background-position: center;
  height: 900px; 
}
</style>