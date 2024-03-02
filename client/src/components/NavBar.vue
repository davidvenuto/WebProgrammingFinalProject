<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <RouterLink to="/" class="navbar-item">
        <img src="file:///Users/davidvenuto/Desktop/websitelogo.jpeg" width="100" height="32">
      </RouterLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/activity" class="navbar-item">
          My Activity
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
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
