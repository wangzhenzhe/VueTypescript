<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <router-view/>
  </div>
</template>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
