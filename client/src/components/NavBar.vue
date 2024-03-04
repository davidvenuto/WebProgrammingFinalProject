<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
          Friends Activity
        </RouterLink>

        <div class="navbar-item has-dropdown is-hoverable">
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
            <RouterLink to="/signup" class="button is-primary">
              <strong>Sign up</strong>
            </RouterLink>

            <RouterLink to="/login" class="button is-light">
              Login
            </RouterLink>
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
