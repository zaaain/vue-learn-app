<template>
  <header class="header">
    <p>Logo</p>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  font-size: 24px;
}
</style>
