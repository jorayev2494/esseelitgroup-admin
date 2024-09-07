<template>
  <div class="media d-flex">
    <span class="avatar avatar-sm flex-shrink-0">
      <img class="avatar-img rounded-circle" alt="Avatar" :src="avatar" />
    </span>
    <div class="media-body flex-grow-1" :class="{ 'ms-3': isNotificationsPage }">

      <p class="noti-details">
        <span class="noti-title">
          <router-link  class="d-inline p-0 text-black" :to="$tMakeRoute({ name: 'student-show', params: { uuid: student.uuid } })">
            {{ student.full_name }}
          </router-link>
        </span>
        <span
          v-html="$t(
            title,
            {
              href: $router.resolve($tMakeRoute({ name: 'application-show', params: { uuid } })).href,
              applicationClass: 'd-inline p-0 text-black'
            }
          )">
        </span>
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
  import { defineProps, onMounted, toRefs } from 'vue'

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

  const { uuid, student, title, is_viewed: isViewed } = toRefs(props.payload);

  const avatar = image(props.payload.student.avatar)

</script>
