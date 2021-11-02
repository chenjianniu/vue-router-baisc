<template>
  <div id="app">
    <h3>view-basic</h3>
    <router-link to="/a">a</router-link>
    &nbsp;&nbsp;
    <button @click='pusha'>a</button>
    &nbsp;&nbsp;
    <router-link to="/b">b</router-link>
    &nbsp;&nbsp;
    <router-link to="/id/3/name/zhangsan">3/zhangsan</router-link>
    &nbsp;&nbsp;
    <router-link to="/id/3/name/zhangsan/userProfile">3/zhangsan/profile</router-link>
    &nbsp;&nbsp;
    <button @click='pushb'>5/wangwu</button>
    &nbsp;&nbsp;
    <router-link :to="{ name: 'url', params: { url: 'baidu' } }">url</router-link>
    &nbsp;&nbsp;
    <button @click="pushc">url</button>
    <hr />
    <h3>view-multi</h3>
    <router-link to="/multi/asc">multi-asc</router-link>
    &nbsp;&nbsp;
    <router-link to="/multi/desc">multi-desc</router-link>
    <hr />
    <h3>view-menu</h3>
    <router-link to="/menu">menu</router-link>
    <hr />
    <h2>terminal</h2>
    <router-view></router-view>
    <router-view name="mu2"></router-view>
    <router-view name="mu3"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$watch(
        () => {
          console.log('params', this.$route.params);
        },
        (to, from) => {

        },
      )
    },
    methods: {
      pusha() {
        // this.$router.push('/a');
        this.$router.push({
          path: '/a'
        });
      },
      pushb() {
        // this.$router.push('/id/5/name/wangwu');
        this.$router.push({
          path: '/id/5/name/wangwu'
        });
      },
      pushc() {
        this.$router.push({
          name: 'url',
          params: {
            url: 'google'
          }
        });
      },
    }
  }
</script>