<template>
  <div id="app">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <RouterLink to="/">
    <button class="button is-success">
      Login
    </button>
  </RouterLink>
  </p>
</div>
</div>
</template>

<style scoped>
#app {
height:600px;
}
.field {
  margin: 30px;
}
</style>