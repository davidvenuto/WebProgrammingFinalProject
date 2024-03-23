<script setup lang="ts">
import type { User } from '@/model/users';
import { store } from '@/statemanagement/store';

const users = store.users; // Assuming this contains friends' data including their activities

const props = defineProps({
  currentUser: Object as () => User | null
});
</script>

<template>
  <div class="content-wrapper">
    <div v-if="props.currentUser" class="user-activities">
      <section v-for="(user, username) in users" :key="`user-${username}`" class="user-section">
        <h2 class="user-name">{{ user.name }}'s Activities</h2>
        <div v-if="user.activities.length" v-for="(activity, activityIndex) in user.activities" :key="`activity-${username}-${activityIndex}`" class="activity-details">
          <p><strong>Title:</strong> {{ activity.title }}</p>
          <p><strong>Date:</strong> {{ activity.date }}</p>
          <p><strong>Location:</strong> {{ activity.location }}</p>
          <p><strong>Distance:</strong> {{ activity.distance_miles }} miles</p>
          <p><strong>Duration:</strong> {{ activity.duration_minutes }} minutes</p>
        </div>
        <p v-else>No activities found.</p>
      </section>
    </div>
    <div v-else class="login-prompt">
      Please login to view your friend's activities.
    </div>
  </div>
</template>



<style scoped>
.login-prompt {
  text-align: center;
  padding: 2rem;
  color: #555; 
  font-size: 1.2rem; 
  margin-top: 5rem; 
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.user-activities {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%; /* Ensure it takes the full width of its container */
}

.user-section {
  border: 1px solid #9e9e9e;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  width: 100%; /* Ensure each user section takes the full width of its container */
}

.user-name {
  background-color: #3f51b5;
  color: #ffffff;
  text-align: center;
  margin: 0;
  padding: 1rem;
}

.activity-details {
  background-color: #ffffff;
  border-bottom: 1px solid #9e9e9e;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
}

.activity-details:hover {
  background-color: #f0f0f0;
}

.activity-details:last-child {
  border-bottom: none;
}
</style>