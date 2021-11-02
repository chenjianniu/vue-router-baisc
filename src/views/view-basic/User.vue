<template>
  <div>
    id: {{ $route.params.id }}
    name: {{ $route.params.name }}
    <router-view></router-view>
  </div>
</template>