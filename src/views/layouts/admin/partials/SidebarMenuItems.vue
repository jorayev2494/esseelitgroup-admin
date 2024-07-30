<template>
  <template v-for="(menuItem, idx) in menuItems" :key="idx">

    <template v-if="(! (menuItem?.meta?.anyPermission) ? true : $acl.anyPermission(menuItem.meta.anyPermission ?? []))">

      <li class="menu-title">
        <span>
          <!-- <i class="fontsize" :data-feather="menuItem.icon"></i> -->
          <i v-if="menuItem.icon" :class="`fa fa-${menuItem.icon}`" aria-hidden="true"></i>
          <!-- <i class="fontsize" :data-feather="menuItem.icon"></i> -->
          {{ menuItem.label }}
        </span>
      </li>

      <li v-for="(item, itemInx) in menuItem?.items" :key="itemInx" :class="item?.submenu ? 'submenu' : ''">
        <template v-if="item.route && (! (item?.meta?.permission || item?.meta?.anyPermission) ? true : $acl.permission(item.meta.permission ?? []) || $acl.anyPermission(item.meta.anyPermission ?? []))">
          <router-link :to="$tMakeRoute(item.route)">
            <span>{{ $t(`${item.label}.context_title`) }}</span>
          </router-link>
        </template>

        <template v-if="item?.submenu && (! (item?.meta?.anyPermission) ? true : $acl.anyPermission(item.meta.anyPermission ?? []))">
          <a href="#">
            <span>{{ $t(`${item.label}.context_title`) }}</span>
            <span class="menu-arrow"></span>
          </a>
          <ul style="display: none">
            <li v-for="(submenuItem, submenuItemIdx) in item.submenu" :key="submenuItemIdx">
              <template v-if="submenuItem.route && (! (submenuItem?.meta?.permission || submenuItem?.meta?.anyPermission) ? true : $acl.permission(submenuItem.meta.permission ?? []) || $acl.anyPermission(submenuItem.meta.anyPermission ?? []))">
                <router-link :to="$tMakeRoute(submenuItem.route)">{{ $t(`${submenuItem.label}.context_title`) }}</router-link>
              </template>
            </li>
          </ul>
        </template>
      </li>

    </template>

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
