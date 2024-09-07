<template>
  <li class="nav-item dropdown noti-dropdown">

    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown" @click.stop="openHandler">
      <i class="far fa-bell"></i>
      <span
        v-show="quantityUnviewedComp > 0"
        class="badge badge-pill"
      >{{ quantityUnviewedComp }}</span>
    </a>

    <div class="dropdown-menu notifications">
      <div class="topnav-dropdown-header">
        <span class="notification-title">{{ $t('notification.context_title') }}</span>
        <!-- <a href="javascript:void(0)" class="clear-noti"> {{ $t('notification.clear_all') }} </a> -->
      </div>

      <div class="noti-content">
        <ul class="notification-list">

          <!-- <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Jonathan Doe</span> Schedule
                    <span class="noti-title">his appointment</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">4 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li> -->

          <!-- <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user1.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Julie Pennington</span> has
                    booked her appointment to
                    <span class="noti-title">Ruby Perrin</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">6 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li> -->

          <!-- <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user2.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Tyrone Roberts</span> sent a
                    amount of $210 for his
                    <span class="noti-title">appointment</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">8 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li> -->

          <!-- <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user4.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">
                      Patricia Manzi</span> send a message <span class="noti-title"> to his Mentee
                    </span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">12 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li> -->

          <li class="notification-message" v-for="{ uuid, type, payload, viewed_managers, is_viewed, created_at } in notifications" :key="uuid">
            <a href="#">
              <component :is="type" :payload="payload" :viewed-managers="viewed_managers" :viewed="is_viewed" />
            </a>
          </li>

        </ul>
      </div>

      <div class="topnav-dropdown-footer">
        <router-link :to="$tMakeRoute({ name: 'notifications' })">
          {{ $t('notification.view_all_Notifications') }}
        </router-link>
      </div>
    </div>

  </li>
</template>

<script>
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";
  import registerNotification from '@/services/notification/register'
  import notificationComponents from "@/services/notification/components/index";

  export default {
    setup() {
      const store = useStore();

      const isOpened = ref(false);
      const notifications = ref([]);

      const notificationMapper = notification => {


        return notification;
      }

      const loadNotifications = () => {
        store.dispatch('notification/loadNotificationsAsync').then(response => {
          const { data: { data } } = response;

          notifications.value = data.map(notificationMapper);
        })
      }

      const openHandler = () => {
        isOpened.value = !isOpened.value;

        if (isOpened.value) {
          loadNotifications();
        }
      }

      const loadQualityUnviewedNotifications = () => {
        store.dispatch('notification/loadQualityUnviewedNotificationsAsync');
      }

      const quantityUnviewedComp = computed(() => store.getters['notification/getQuantityUnviewed']);

      onMounted(() => {
        registerNotification();
        loadQualityUnviewedNotifications();
      })

      return {
        notifications,

        quantityUnviewedComp,

        openHandler,
      }
    },
    components: {
      ...notificationComponents,
    }
  }
</script>

<style lang="scss" scoped>

</style>