<script setup lang="ts">
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
          src="@/pictures/websitelogo.jpeg"
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

        <div class="navbar-item has-dropdown is-hoverable" v-if="currentUser && currentUser['isAdmin']">
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
          <RouterLink to="myactivity">
          <div class="profile">
            {{ currentUser?.name }}
            <div class="buttons">
              <LoginButton @updateUser="emit('updateUser', $event)" />
            </div>
          </div>
        </RouterLink>
        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped>
.is-primary {
  background-color: grey;
}

.profile {
  display: flex;
  align-items: center;
  gap: 40px;
}
</style>
