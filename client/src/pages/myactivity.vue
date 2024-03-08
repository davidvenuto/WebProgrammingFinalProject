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
  <main class="hero is-primary is-large">
    <NewActivityForm v-if="props.currentUser" @add-activity="addActivity" />
    <section v-if="props.currentUser">
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
section {
  padding-top: 50px;
}

.login-prompt {
  text-align: center;
  padding-top: 50px;
}
</style>