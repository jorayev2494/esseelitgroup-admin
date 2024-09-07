<template>
  <div class="avatar-group" v-if="viewedManagers.length">
    <div class="avatar avatar-min" v-for="(viewedManager, idx) in viewedManagers" :key="idx">
      <img
        class="avatar-img rounded-circle border border-white cursor-pointer"
        alt="User Image"
        :title="viewedManager.full_name"
        :src="viewedManager.avatar"
        @click="() => $router.push($tMakeRoute({ name: 'manager-show', params: { uuid: viewedManager.uuid } }))"
      >
    </div>
    <!-- <div class="avatar avatar-min">
      <span class="avatar-title avatar-min rounded-circle border border-white">
        <small>+5</small>
      </span>
    </div> -->
  </div>
</template>

<script setup>
  import { useUrlPattern } from '@/views/pages/utils/UrlPattern'
  import { defineProps, onMounted } from 'vue'

  const { image } = useUrlPattern()

  const props = defineProps({
    viewedManagers: {
      type: Array,
      required: true,
    }
  })

  onMounted(() => {
    props.viewedManagers.map(viewedManager => {
      console.log('Viewed Manage: ', viewedManager);

      viewedManager.avatar = image(viewedManager.avatar);

      return viewedManager;
    })
  })
</script>
