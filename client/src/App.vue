<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import type { User } from "@/model/users";

const currentUser = ref<User | null>(null);
</script>

<template>
  <NavBar :currentUser="currentUser" @updateUser="currentUser = $event" />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
