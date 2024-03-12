<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/statemanagement/store';
import type { User } from '@/model/users';

const users = store.users;
const emit = defineEmits(['updateUser']);

const currentUser = ref<User | null>(null);

const selectUser = (user: User) => {
  currentUser.value = user;
  emit('updateUser', user);
};

const logout = () => {
  currentUser.value = null;
  emit('updateUser', null);
};
</script>


<template>
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="currentUser ? logout() : null">
      <span>{{ currentUser ? 'Logout' : 'Login' }}</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true" v-if="!currentUser"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="!currentUser">
    <div class="dropdown-content">
      <a v-for="user in users" :key="user.name" class="dropdown-item" @click="selectUser(user)">
        {{ user.name }}
      </a>
    </div>
  </div>
</div>
</template>

