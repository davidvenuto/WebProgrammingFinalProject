<script setup lang="ts">
import { ref } from 'vue';
import { store } from "@/statemanagement/store";
import { type User } from "@/model/users";

const users = store.users;

const isAddingUser = ref(false);

const props = defineProps({
  currentUser: Object as () => User | null
});

const newUser = ref<User>({
  name: '',
  password: '',
  username: '',
  email: '',
  gender: '',
  weight: 0,
  profilePicture: '',
  isAdmin: false,
  activities: []
});

const handleAddUser = () => {
  users.push(newUser.value);
  isAddingUser.value = false;
  newUser.value = {
    name: '',
    password: '',
    username: '',
    email: '',
    gender: '',
    weight: 0,
    profilePicture: '',
    isAdmin: false,
    activities: []
  };
};

const toggleAddUserForm = () => {
  console.log(isAddingUser.value);
  isAddingUser.value = !isAddingUser.value;
  console.log(isAddingUser.value)
};

const deleteUser = (username: string): void => {
  const index = store.users.findIndex((user: User) => user.username === username);
  if (index !== -1) {
    store.users.splice(index, 1);
  }
};

const editUser = (username: string): void => {
  
}
</script>

<template>
  <div v-if="currentUser && currentUser.isAdmin" class="user-list">
    <button class="button is-primary" @click="toggleAddUserForm">Add User</button>

    <div v-if="isAddingUser" class="modal is-active">
      <div class="modal-background" @click="toggleAddUserForm"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add User</p>
          <button class="delete" aria-label="close" @click="toggleAddUserForm"></button>
        </header>
        <section class="modal-card-body">
          <div class="modal-content">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" v-model="newUser.username" placeholder="Username">
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" v-model="newUser.name" placeholder="Name">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" v-model="newUser.password" placeholder="Password">
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="newUser.email" placeholder="Email">
            </div>
          </div>
          <div class="field">
            <label class="label">Gender</label>
            <div class="control">
              <input class="input" type="text" v-model="newUser.gender" placeholder="Gender">
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input class="input" type="number" v-model.number="newUser.weight" placeholder="Weight">
            </div>
          </div>
          <div class="field">
            <label class="label">Is Admin</label>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="newUser.isAdmin">
              </label>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="handleAddUser">Save changes</button>
          <button class="button" @click="toggleAddUserForm">Cancel</button>
        </footer>
      </div>
    </div>

    <div>
      <div v-for="user in users" :key="user.username" class="card">
        <div class="card-content">
          <h1 class="name">{{ user.name }}</h1>
          <img :src="user.profilePicture" alt="Profile Picture" />
          <p>Username: {{ user.username }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Gender: {{ user.gender }}</p>
          <p>Weight (lbs): {{ user.weight }} lbs</p>
          <p>Is Admin: {{ user.isAdmin }}</p>
          <button class="button is-info">Edit</button>
          <button v-if="!user.isAdmin" class="button is-danger" @click="deleteUser(user.username)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="admin-only">
    <h1>YOU MUST BE AN ADMIN TO VIEW THIS PAGE</h1>
  </div>
</template>

<style scoped>
.admin-only {
  text-align: center;
  padding: 2rem;
  color: #555;
  font-size: 1.2rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-card-head,
.modal-card-foot {
  background-color: #f5f5f5;
  border-bottom: 1px solid #dbdbdb;
}

.modal-card-title {
  color: #363636;
}

.input {
  padding: 10px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}

.input:focus {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.name {
  font-size: 20px;
  font-weight: 700;
}

.card {
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
}

.card-content {
  padding: 20px;
}

.card-content img {
  width: 100px;
  height: auto;
  border-radius: 50%;
}

.button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  opacity: 0.8;
}

.button.is-primary {
  background-color: #3273dc;
  color: #ffffff;
  margin-top: 15px;
}

.button.is-info,
.button.is-danger {
  margin: 5px;
}

.button.is-success {
  background-color: #23d160;
  color: #ffffff;
}

.modal.is-active {
  display: block;
}

.modal-card {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  margin: 0;
}

@media (max-width: 600px) {
  .modal-card {
    width: 95%;
  }

  .modal-card-body {
    padding: 20px;
  }
}
</style>