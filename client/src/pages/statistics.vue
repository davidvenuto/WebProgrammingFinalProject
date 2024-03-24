<script setup>
import { ref } from 'vue';

const activeTab = ref('Today');
</script>

<template>
<article class="panel is-link">
  <p class="panel-heading">Statistics</p>
  <p class="panel-tabs">
    <a :class="{ 'is-active': activeTab === 'Today' }" @click="activeTab = 'Today'">Today</a>
    <a :class="{ 'is-active': activeTab === 'Weekly' }" @click="activeTab = 'Weekly'">Weekly</a>
    <a :class="{ 'is-active': activeTab === 'All Time' }" @click="activeTab = 'All Time'">All Time</a>
  </p>

  <!-- Tab Content -->
  <div v-if="activeTab === 'Today'">
    <p>Today's statistics...</p>
  </div>
  <div v-if="activeTab === 'Weekly'">
    <p>Weekly statistics...</p>
  </div>
  <div v-if="activeTab === 'All Time'">
    <p>All-time statistics...</p>
  </div>
</article>
</template>

<style scoped>
</style>
