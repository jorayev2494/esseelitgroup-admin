<template>
  <div class="media d-flex">
    <span class="avatar avatar-sm flex-shrink-0">
      <img class="avatar-img rounded-circle" alt="Avatar" :src="avatar" />
    </span>
    <div class="media-body flex-grow-1" :class="{ 'ms-3': isNotificationsPage }">

      <p class="noti-details">
        <span class="noti-title">{{ manager.full_name }}</span> {{ $t(title) }}
        <span class="noti-title">his appointment</span>
      </p>

      <p class="noti-time" v-if="! isNotificationsPage">
        <span class="notification-time">4 mins ago</span>
      </p>

      <ViewedManagers v-if="isNotificationsPage" :viewed-managers="viewedManagers" />

    </div>

    <div v-if="! viewed">
      <span class="text-success" style="font-size: x-large; vertical-align: -webkit-baseline-middle;">
        &#8226;
      </span>
    </div>
  </div>
</template>

<script setup>
  import ViewedManagers from '@/services/notification/components/partials/ViewedManagers.vue'
  import { useUrlPattern } from '@/views/pages/utils/UrlPattern'
  import { defineProps, toRefs } from 'vue'

  const { image } = useUrlPattern();

  const props = defineProps({
    payload: {
      type: Object,
      required: true,
    },
    viewedManagers: {
      type: Array,
      default: () => [],
    },
    viewed: {
      type: Boolean,
      default: true,
    },
    isNotificationsPage: {
      type: Boolean,
      default: false,
    },
  })

  const { manager, title, is_viewed: isViewed } = toRefs(props.payload);

  const avatar = image(props.payload.manager.avatar)

</script>
