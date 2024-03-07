<template>
  <template v-for="(menuItem, idx) in menuItems" :key="idx">
    <li class="menu-title">
      <span>
        <!-- <i class="fontsize" :data-feather="menuItem.icon"></i> -->
        <i v-if="menuItem.icon" :class="`fa fa-${menuItem.icon}`" aria-hidden="true"></i>
        <!-- <i class="fontsize" :data-feather="menuItem.icon"></i> -->
        {{ menuItem.label }}
      </span>
    </li>

    <li v-for="(item, itemInx) in menuItem?.items" :key="itemInx" :class="item?.submenu ? 'submenu' : ''">
      <template v-if="item?.route">
        <router-link :to="$tMakeRoute(item.route)">
          <span>{{ $t(`${item.label}.context_title`) }}</span>
        </router-link>
      </template>

      <template v-if="item?.submenu">
        <a href="#">
          <span>{{ item.label }}</span>
          <span class="menu-arrow"></span>
        </a>
        <ul style="display: none">
          <li v-for="(submenuItem, submenuItemIdx) in item.submenu" :key="submenuItemIdx">
            <router-link :to="$tMakeRoute(submenuItem.route)">{{ submenuItem.label }}</router-link>
          </li>
        </ul>
      </template>
    </li>
  </template>
</template>

<script>
export default {
	props: {
    menuItems: {
      type: Object,
      required: true,
    },
  },
}
</script>
