<script setup lang="ts">
import PersonalActivity from '@/components/PersonalActivity.vue';
import NewActivityForm from '@/components/AddActivity.vue';
import type { User, Activity } from '@/model/users';

const props = defineProps({
  currentUser: Object as () => User | null
});

const addActivity = (activity: Activity) => {
  if (props.currentUser) {
    props.currentUser.activities.push(activity);
  }
};
</script>

<template>
  <main class="page-layout">
    <NewActivityForm v-if="props.currentUser" @add-activity="addActivity" />
    <section v-if="props.currentUser" class="activities-section">
      <PersonalActivity
        v-for="(activity, index) in props.currentUser.activities"
        :key="`activity-${index}`"
        :activity="activity"
      />
    </section>
    <div v-else class="login-prompt">
      Please log in to view your activities.
    </div>
  </main>
</template>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.activities-section {
  max-width: 800px; 
  width: 100%; 
  padding: 2rem;
}

.login-prompt {
  text-align: center;
  padding: 2rem;
  color: #555; 
  font-size: 1.2rem; 
  margin-top: 5rem; 
}

</style>
