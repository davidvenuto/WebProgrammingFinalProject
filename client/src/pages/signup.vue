<script setup lang="ts">
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
  },
});

const agreedToTerms = ref(false);
const name = ref('');
const password = ref('');
const username = ref('');
const email = ref('');
const gender = ref('');
const weight = ref('');

const users = ref<{ [key: string]: string }[]>([]);

const createUser = () => {
    const userProfile = {
        name: name.value,
        password: password.value,
        username: username.value,
        email: email.value,
        gender: gender.value,
        weight: weight.value,
    };

    users.value.push(userProfile);
    console.log('Current Users:', users.value);

    // Reset form fields
    name.value = '';
    password.value = '';
    username.value = '';
    email.value = '';
    gender.value = '';
    weight.value = '';
};

</script>


<template>
    <div class="header">Create Account</div>
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="John Smith" v-model="name">
        </div>
    </div>

    <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input class="input" type="text" v-model="password">
        </div>
    </div>

    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="username">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email">
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <label class="label">Gender</label>
        <div class="control">
            <div class="select">
                <select v-model="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
        </div>
    </div>

    <div class="field">
        <label class="label">Weight (lbs)</label>
        <div class="control">
            <input class="input" type="text" v-model="weight">
        </div>
    </div>

    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" v-model="agreedToTerms">
                I agree to the <a href="#">terms and conditions</a>
            </label>
        </div>
    </div>

    <RouterLink to="/">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" :disabled="!agreedToTerms" @click="createUser">Create</button>
            </div>
        </div>
    </RouterLink>
</template>

<style>
.header {
    font-size: 30px;
    text-decoration: underline;
    color: red;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>