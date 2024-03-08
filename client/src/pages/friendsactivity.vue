<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { type Activity, getActivity } from "@/model/activities";
    import { type User, getUser } from "@/model/users";

    const users = ref(getUser())
    const activities = ref(getActivity())

const userActivities = computed(() => {
  return users.value.map((user, index) => activities.value[index % activities.value.length]);
});

</script>

<template>
  <div class="user-list">
    <div v-for="(user, index) in users" :key="user.name" class="user-card">
      <div class="activities" v-if="userActivities[index]">
        <div class="card">
          <div class="card-content">
            <h2>{{ user.name }}</h2>
            <h3 class="title">{{ userActivities[index].title }}</h3>
            <p>Date: {{ userActivities[index].date }}</p>
            <p>Location: {{ userActivities[index].location }}</p>
            <p>Distance: {{ userActivities[index].distance_miles }} miles</p>
            <p>Duration: {{ userActivities[index].duration_minutes }} minutes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
  text-decoration: solid;
  font-weight: 700;
}
</style>