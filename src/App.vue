<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
button {
  margin: 5px;
}
input {
  margin: 5px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 8px;
  text-align: left;
}
</style>