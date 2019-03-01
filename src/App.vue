<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <router-view/>

  </div>
</template>


<style lang="scss">
@import "./src/assets/css/colors";

html, body {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primary;
  color: lighten($primary, 80%);
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: lighten($primary, 20%);
    &.router-link-exact-active { color: lighten($primary, 80%); }
    &:hover { filter: brightness(80%); }
  }
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
