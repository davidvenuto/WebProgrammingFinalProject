<script setup lang="ts">
import { ref } from 'vue';
const agreedToTerms = ref(false);

</script>


<template>
    <div class="header">Create Account</div>
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="John Smith">
        </div>
    </div>

    <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input class="input" type="text">
        </div>
    </div>

    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input" type="text">
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
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
    </div>

    <div class="field">
        <label class="label">Gender</label>
        <div class="control">
            <div class="select">
                <select>
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
            <input class="input" type="text">
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
                <button class="button is-link" :disabled="!agreedToTerms">Create</button>
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