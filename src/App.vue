<template>
  <div id="app" class="container-fluid">
    <navbar :brand="brand" :sub-brand="$ml.get('studio')"></navbar>
      <transition name="fade-in-up" mode="out-in">
        <router-view/>
      </transition>
    </div>
</template>
<script>
  import Navbar from './components/Navbar';
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        brand: 'STILISTO',
      }
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
