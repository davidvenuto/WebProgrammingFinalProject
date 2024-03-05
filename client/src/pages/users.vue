<script setup lang="ts">
    import { ref } from 'vue'
    import { type User, getUser } from "@/model/users";

    const users = ref([] as User[])

    users.value = getUser()

</script>

<template>
    <div class="user-list">
        <div v-for="user in users" :key="user.name" class="card" >
            <div class="card-image">
            </div>
            <div class="card-content">
              <h1 class="name">{{ user.name }}</h1>
              <img :src="user['profile-picture']" />
                <p>Username: {{ user.username }}</p>
                <p>Email: {{ user.email }}</p>
                <p>Gender: {{ user.gender }}</p>
                <p>Weight (lbs): {{ user.weight }} lbs</p>
                <p>Is Admin: {{ user['is-admin'] }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.name {
  font-size: 20px;
  text-decoration: solid;
  font-weight: 700;
}
</style>