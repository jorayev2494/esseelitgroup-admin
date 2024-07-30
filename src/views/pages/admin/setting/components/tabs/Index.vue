<template>
  <div class="settings-menu-links">
    <ul class="nav nav-tabs menu-tabs">

      <template v-for="({ label, route, meta }, idx) of items" :key="idx">
        <li
          v-if="(! meta?.permission) ? true : $acl.permission(meta.permission ?? [])"
          class="nav-item"
          :class="currentPath == route.name ? 'active' : 'notactive'"
        >
          <router-link
            class="nav-link"
            :to="$tMakeRoute(route)"
          >
            {{ $t(label) }}
          </router-link>
        </li>
      </template>

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
