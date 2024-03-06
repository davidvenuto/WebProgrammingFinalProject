<script setup lang="ts">
import { defineProps } from 'vue';

interface Activity {
  title: string;
  date: string;
  location: string;
  distance_miles: number;
  duration_minutes: number;
}

const props = defineProps({
  activity: Object as () => Activity
});
</script>

<template>
  <div class="activity">
    <h3>{{ activity?.title }}</h3>
    <p>Date: {{ activity?.date }}</p>
    <p>Location: {{ activity?.location }}</p>
    <p>Distance: {{ activity?.distance_miles }} miles</p>
    <p>Duration: {{ activity?.duration_minutes }} minutes</p>
  </div>
</template>

<style scoped>
.activity {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity h3 {
  color: #333;
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.activity p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin: 4px 0;
}

/* Additional styling for specific details */
.activity p:nth-child(3) {
  color: #4a90e2; /* Highlight the location */
}

.activity p:nth-child(4), .activity p:nth-child(5) {
  font-weight: bold; /* Emphasize distance and duration */
}
</style>
