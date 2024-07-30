<template>
  <div>
    <CountryIndex v-permission="COUNTRY_RESOURCE_ACTIONS.RESOURCE_INDEX" />
    <CityIndex v-permission="CITY_RESOURCE_ACTIONS.RESOURCE_INDEX" />
  </div>
</template>

<script setup>
  import { RESOURCE_ACTIONS as COUNTRY_RESOURCE_ACTIONS } from '../country/acl/constants'
  import { RESOURCE_ACTIONS as CITY_RESOURCE_ACTIONS } from '../city/acl/constants'

  import CountryIndex from '../country/index/Index.vue'
  import CityIndex from '../city/index/Index.vue'
</script>
