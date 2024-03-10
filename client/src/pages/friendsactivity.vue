<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/model/users';
import { store } from '@/statemanagement/store';

// Assuming you have a way to fetch all users into this array
const users = store.users;

</script>

<template>
  <div class="content-wrapper">
    <div class="user-activities">
      <section v-for="(user, username) in users" :key="`user-${username}`" class="user-section">
        <h2 class="user-name">{{ user.name }}'s Activities</h2>
        <div v-for="(activity, activityIndex) in user.activities" :key="`activity-${username}-${activityIndex}`" class="activity-details">
          <p><strong>Title:</strong> {{ activity.title }}</p>
          <p><strong>Date:</strong> {{ activity.date }}</p>
          <p><strong>Location:</strong> {{ activity.location }}</p>
          <p><strong>Distance:</strong> {{ activity.distance_miles }} miles</p>
          <p><strong>Duration:</strong> {{ activity.duration_minutes }} minutes</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  background-color: #fff; /* Ensure a white background */
  padding: 20px;
}

.user-activities {
  overflow: auto; /* Adds scroll if content overflows */
}

.user-section + .user-section {
  margin-top: 20px; /* Adds spacing between user sections */
}

.activity-details + .activity-details {
  margin-top: 10px; /* Adds spacing between activities */
}

.user-name {
  color: #333; /* Dark text for better readability */
}

.activity-details {
  background-color: #f2f2f2; /* Slight background for activities */
  border-radius: 5px; /* Rounded corners for activity details */
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for depth */
}
</style>

