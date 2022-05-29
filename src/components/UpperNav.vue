<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Overview</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/money">Money</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/marchants">Marchants</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shoppers">Shoppers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions">Transactions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/groups">Groups</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/messages">Messages</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">Settings</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
