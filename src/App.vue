<template>
  <div>
    <Header />
    <UpperNav />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import UpperNav from './components/UpperNav.vue'
export default {
  name: 'App',
  components: {
    Header,
    UpperNav,
  },
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
