<script setup lang="ts">
import { computed } from 'vue';
import type { User, Activity } from '@/model/users';

const props = defineProps({
  currentUser: Object as () => User | null
});

const today: Date = new Date();
const startOfWeek = new Date(new Date().setDate(today.getDate() - today.getDay()));
startOfWeek.setHours(0, 0, 0, 0);

const endOfWeek = new Date(new Date().setDate(startOfWeek.getDate() + 7));
endOfWeek.setHours(23, 59, 59, 999);


const filterActivities = (startDate: Date, endDate: Date = new Date()) => {
  return props.currentUser?.activities.filter((activity: Activity) => {
    const activityDate: Date = new Date(activity.date + 'T00:00:00'); 
    return activityDate >= startDate && activityDate < endDate;
  }) || [];
};


const totalDistance = (activities: Activity[]) => activities.reduce((acc: number, activity: Activity) => acc + activity.distance_miles, 0);
const totalDuration = (activities: Activity[]) => activities.reduce((acc: number, activity: Activity) => acc + activity.duration_minutes, 0);

const todayActivities = computed(() => filterActivities(new Date(new Date().setHours(0, 0, 0, 0))));
const weekActivities = computed(() => filterActivities(startOfWeek, endOfWeek));
const allTimeActivities = computed(() => props.currentUser ? props.currentUser.activities : []);

const todayStats = computed(() => ({
  distance: totalDistance(todayActivities.value),
  duration: totalDuration(todayActivities.value)
}));

const weekStats = computed(() => ({
  distance: totalDistance(weekActivities.value),
  duration: totalDuration(weekActivities.value)
}));

const allTimeStats = computed(() => ({
  distance: totalDistance(allTimeActivities.value),
  duration: totalDuration(allTimeActivities.value)
}));

const todayActivityCount = computed(() => todayActivities.value.length);
const weekActivityCount = computed(() => weekActivities.value.length);
const allTimeActivityCount = computed(() => allTimeActivities.value.length);

</script>

<template>
<main class="stats-section">
    <div class="stat" v-if="props.currentUser">
      <h2>Today's Stats</h2>
      <p>Total Distance: {{ todayStats.distance }} miles</p>
      <p>Total Duration: {{ todayStats.duration }} minutes</p>
      <p>Number of Activities: {{ todayActivityCount }}</p>
    </div>
    <div class="stat" v-if="props.currentUser">
      <h2>This Week's Stats</h2>
      <p>Total Distance: {{ weekStats.distance }} miles</p>
      <p>Total Duration: {{ weekStats.duration }} minutes</p>
      <p>Number of Activities: {{ weekActivityCount }}</p>
    </div>
    <div class="stat" v-if="props.currentUser">
      <h2>All Time Stats</h2>
      <p>Total Distance: {{ allTimeStats.distance }} miles</p>
      <p>Total Duration: {{ allTimeStats.duration }} minutes</p>
      <p>Number of Activities: {{ allTimeActivityCount }}</p>
    </div>
    <div v-else class="login-prompt">
      Please log in to view your statistics
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
.login-prompt {
  text-align: center;
  color: #555; 
  font-size: 1.2rem; 
  margin-top: 10px;
}

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
  background: rgba(0, 0, 0, 0.84);
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

.stats-section {
  max-width: 800px;
  margin: 30px auto 50px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.stat {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat h2 {
  margin: 0;
  color: #3273dc;
  font-size: 28px;
  font-weight: 600;
}

.stat p {
  margin: 0;
  font-size: 20px;
  color: #363636;
}

.stat:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .stats-section {
    flex-direction: column;
    align-items: center;
  }

  .stat {
    width: 100%;
    padding: 15px;
  }
}

</style>