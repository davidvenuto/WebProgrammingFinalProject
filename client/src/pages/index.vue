<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { User } from '@/model/users';

const props = defineProps({
  currentUser: Object as () => User | null
});

const totalDistance = computed(() => {
  if (!props.currentUser) return 0;
  return props.currentUser.activities.reduce((acc, activity) => acc + activity.distance_miles, 0);
});

const totalDuration = computed(() => {
  if (!props.currentUser) return 0;
  return props.currentUser.activities.reduce((acc, activity) => acc + activity.duration_minutes, 0);
});
</script>

<template>
  <main class="hero is-primary is-large hero-first">
    <div class="hero-body">
      <div class="container">
        <h2>Your Stats</h2>
        <p>Total Activities: {{ props.currentUser?.activities.length }}</p>
        <p>Total Distance: {{ totalDistance }} miles</p>
        <p>Total Duration: {{ totalDuration }} minutes</p>
      </div>
    </div>
  </main>
  <main class="hero is-primary is-large hero-second">
    <div class="hero-body">
      <div class="half-container">
        <div class="faq-box h2 underline-text">
          <h1>FAQs</h1>
          <h2>- Why am I so fat?</h2>
          <h3>    - Because you're not using this app</h3>
          <h2>- Who made this website?</h2>
          <h3>    - David Venuto</h3>
          <h2>- Why is this website so cool?</h2>
          <h3>    - He realy is just that good of a programmer</h3>
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
  background: rgba(0, 0, 0, 0.84);
  position: relative;
}

.info-box h2 {
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 70px;
  text-decoration: underline;
  font-size: 24px;
}

.info-box h2:hover {
  font-size: 26px;
}

.faq-box{
  flex: 1;
  width: 50px;
  height: 500px;
  background: rgba(0, 0, 0, 0.84); /* Adjust the background color if needed */
  position: relative;
}

.faq-box h2 {
  margin-top: 40px;
  margin-left: 50px;
  margin-bottom: 10px;
  text-decoration: underline;
  font-size: 24px;
}

.faq-box h2:hover {
  font-size: 26px;
}

.faq-box h3 {
  margin-top: 0px;
  margin-left: 70px;
  margin-bottom: 0px;
  font-size: 20px;
  color: #E6E6E6;
  font-style: italic;
  transition: color 0.3s ease; 
}

.hero.is-primary.is-large {
  width: 100%;
  background-position: center;
}

.hero-first {
  background-image: url('@/pictures/guylifting.PNG');
  margin-bottom: 50px;
  background-size: 80%;
}

.hero-second {
  background-image: url('@/pictures/treadmillguy.png');
  background-size: cover;
  background-position: center;
  height: 900px;
}

.subtitle {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 44px;
}

.container {
  font-size: 20px;
}

</style>