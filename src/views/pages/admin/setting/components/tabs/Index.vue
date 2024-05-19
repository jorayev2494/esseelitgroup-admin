<template>
  <div class="settings-menu-links">
    <ul class="nav nav-tabs menu-tabs">

      <li
        class="nav-item"
        v-for="({ label, route }, idx) of items" :key="idx"
        :class="currentPath == route.name ? 'active' : 'notactive'"
      >
        <router-link class="nav-link" :to="$tMakeRoute(route)">
          {{ $t(label) }}
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script setup>
  import useBehavior from "./useBehavior";

  const {
    currentPath,
    items,
  } = useBehavior()

</script>
