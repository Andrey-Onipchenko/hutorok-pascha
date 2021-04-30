<template>
  <div></div>
  <div class="nav">
    <router-link class="nav__link nav__home" to="/">Головна</router-link>
    <router-link class="nav__link nav__rules" to="/rules">Правила</router-link>
    <router-link class="nav__link" to="/winners">Переможці</router-link>
  </div>

  <router-view />
</template>
<script>
export default {
  mounted: function () {
    console.log(this.$router.getRoutes);
  },
};
</script>

<style src="./assets/scss/index.scss" lang="scss"></style>
