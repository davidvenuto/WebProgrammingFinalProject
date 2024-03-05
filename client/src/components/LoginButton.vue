<script setup lang="ts">
import { ref } from 'vue';
import { getUser } from "@/model/users";

const users = ref(getUser());
</script>

<template>
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Login</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a v-for="user in users" :key="user.name" class="dropdown-item">
        {{ user.name }}
      </a>
    </div>
  </div>
</div>
</template>
