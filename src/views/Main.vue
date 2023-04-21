<template>
  <div>
    <h1>主路由</h1>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/user">User</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
