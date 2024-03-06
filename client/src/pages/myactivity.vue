<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import PersonalActivity from '@/components/PersonalActivity.vue';
import NewActivityForm from '@/components/AddActivity.vue';
import type { User, Activity } from '@/model/users';

const props = defineProps({
  currentUser: Object as () => User | null
});

const newActivities = ref<Activity[]>([]);

const addActivity = (activity: Activity) => {
  newActivities.value.push(activity);
};

onMounted(() => {
  if (props.currentUser && props.currentUser.activities.length) {
    newActivities.value.push(...props.currentUser.activities);
  }
});
</script>


<template>
  <main class="hero is-primary is-large">
    <NewActivityForm v-if="currentUser" @add-activity="addActivity" />
    <section v-if="currentUser">
      <PersonalActivity
        v-for="(activity, index) in currentUser.activities"
        :key="`default-${index}`"
        :activity="activity"
      />
      <PersonalActivity
        v-for="(activity, index) in newActivities"
        :key="`new-${index}`"
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


