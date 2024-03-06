<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import type { User } from "@/model/users";
import type { Activity } from '@/model/users';

const currentUser = ref<User | null>(null);

const addActivity = (activity: Activity) => {
  if (currentUser.value) {
    currentUser.value.activities.push(activity);
  }
};

</script>

<template>
  <NavBar :currentUser="currentUser" @updateUser="currentUser = $event" />
  <div class="container">
    <RouterView :currentUser="currentUser" :addActivity="addActivity" />
  </div>
</template>

<style scoped>
</style>