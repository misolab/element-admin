<template>
  <div class="error-page">
    <div class="error-page__tip">403 Forbidden
      <router-link to="/login">LOGIN</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index';
</style>

<script>
export default {
  name: 'Forbidden'
}
</script>
