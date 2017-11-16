<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'app'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  user-select: none;
  text-size-adjust: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Microsoft Yahei' !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
input{
  border: none;
  outline: none;
}
button{
  text-align: center;
  outline: none;
  border: none;
}
</style>
