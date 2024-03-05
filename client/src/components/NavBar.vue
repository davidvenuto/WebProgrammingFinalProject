<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import LoginButton from './LoginButton.vue';
import type { User } from '@/model/users';

const props = defineProps({
  currentUser: Object as () => User | null
});
const emit = defineEmits(['updateUser']);
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <RouterLink to="/" class="navbar-item">
        <img
          src="/Users/davidvenuto/Desktop/Web Programming/WebProgrammingFinalProject/client/src/pictures/websitelogo.jpeg"
          width="100" height="32">
      </RouterLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/myactivity" class="navbar-item">
          <span class="icon-text">
            <span class="icon is-small">
              <i class="fa-solid fa-user-group"></i>
            </span>
            <span>My Activity</span>
          </span>
        </RouterLink>

        <RouterLink to="/friendsactivity" class="navbar-item">
          <div>
            Friends Activity
          </div>
        </RouterLink>

        <div class="navbar-item has-dropdown is-hoverable" v-if="currentUser && currentUser['is-admin']">
          <a class="navbar-link">
            Admin
          </a>

          <div class="navbar-dropdown">
            <RouterLink to="/users" class="navbar-item">
              Users
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <LoginButton @updateUser="emit('updateUser', $event)"/>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.is-primary {
  background-color: grey;
}
</style>
