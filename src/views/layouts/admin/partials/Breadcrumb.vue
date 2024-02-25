<template>
  <ul class="breadcrumb" v-if="$route.meta.breadcrumbs">
    <template v-for="({ label, route }, idx) in $route.meta.breadcrumbs" :key="idx">
      <li class="breadcrumb-item" v-if="++idx !== $route.meta.breadcrumbs.length">
        <router-link :to="$tMakeRoute(route)">{{ $t(label) }}</router-link>
      </li>
      <li class="breadcrumb-item active" v-else>{{ $t(label) }}</li>
    </template>
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
