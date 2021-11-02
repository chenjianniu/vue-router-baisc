<template>
  <p>menu</p>
  <MenuNav />
  <router-view></router-view>
  <router-view name="menuProfile2"></router-view>
</template>

<script>
import MenuNav from './MenuNav.vue'
export default {
  components: {
    MenuNav,
  }
}
</script>