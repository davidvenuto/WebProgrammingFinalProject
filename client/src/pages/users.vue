<script setup lang="ts">
import { store, deleteUser } from "@/statemanagement/store";

const users = store.users;

const handleDelete = (userName: string) => {
  deleteUser(userName);
}

</script>

<template>
  <div class="user-list">
    <div class="add-user-container">
      <button class="button is-primary">Add User</button>
    </div>
    <div v-for="user in users" :key="user.name" class="card">
      <div class="card-content">
        <h1 class="name">{{ user.name }}</h1>
        <img :src="user['profilePicture']" alt="Profile Picture" />
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Gender: {{ user.gender }}</p>
        <p>Weight (lbs): {{ user.weight }} lbs</p>
        <p>Is Admin: {{ user['isAdmin'] }}</p>
        <button class="button is-info">Edit</button> 
        <button class="button is-danger" @click="handleDelete(user.username)">Delete</button>
      </div>
    </div>
  </div>
</template>

  

  <style scoped>
  .name {
    font-size: 20px;
    font-weight: 700;
  }
  
  .card {
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  
  .card-content {
    padding: 20px;
  }
  
  .button.is-primary {
    margin-top: 15px;
  }

  .button.is-info, button.is-danger {
    margin: 5px;
  }

  .add-user-container {
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 20px; 
}
  
  </style>
  