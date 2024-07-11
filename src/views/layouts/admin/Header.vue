<template>
  <!-- Header -->
  <div class="header">
    <!-- Logo -->
    <div class="header-left">
      <router-link :to="$tMakeRoute({ name: 'dashboard' })" class="logo">
        <img src="@/assets/img/admin/logo.png" alt="Logo" />
      </router-link>
      <router-link to="/admin/index" class="logo logo-small">
        <img src="@/assets/img/admin/logo-small.png" alt="Logo" width="30" height="30" />
      </router-link>
    </div>
    <!-- /Logo -->
    <a href="javascript:void(0);" id="toggle_btn">
      <i class="fa fa-align-left"></i>
    </a>
    <!-- <div class="top-nav-search">
      <form>
        <input type="text" class="form-control" placeholder="Search here" />
        <button class="btn" type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div> -->
    <!-- Mobile Menu Toggle -->
    <a class="mobile_btn" id="mobile_btn">
      <i class="fa fa-bars"></i>
    </a>
    <!-- /Mobile Menu Toggle -->

    <!-- Header Right Menu -->
    <ul class="nav user-menu">
      <LanguageSwitcher />
      <!-- <Notification /> -->

      <!-- User Menu -->
      <li class="nav-item dropdown has-arrow">
        <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
          <span class="user-img">
            <img class="rounded-circle" :src="avatarPreview" width="31" alt="Avatar" />
          </span>
        </a>
        <div class="dropdown-menu">
          <div class="user-header">
            <div class="avatar avatar-sm">
              <img :src="avatarPreview" alt="User Image" class="avatar-img rounded-circle" />
            </div>
            <div class="user-text">
              <h6>{{ $store.getters['auth/getAuthDataProperty']('full_name') }}</h6>
              <!-- <p class="text-muted mb-0">Administrator</p> -->
            </div>
          </div>
          <router-link class="dropdown-item" :to="$tMakeRoute({ name: 'profile-show' })">My Profile</router-link>
          <!-- <router-link class="dropdown-item" to="/admin/settings">Settings</router-link> -->
          <a href="#" class="dropdown-item" @click="logout">{{ $t('auth.logout') }}</a>
        </div>
      </li>
      <!-- /User Menu -->

    </ul>
    <!-- /Header Right Menu -->
  </div>
  <!-- /Header -->
</template>

<script>
  import LanguageSwitcher from './partials/LanguageSwitcher.vue';
  import Notification from './partials/Notification.vue';
  import { onMounted, ref } from "vue";
  import feather from "feather-icons";
  import useAuth from '@/services/auth/useAuth';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { useUrlPattern } from '@/views/pages/utils/UrlPattern';

  export default {
    setup() {

      const { image } = useUrlPattern();
      const router = useRouter();
      const store = useStore();

      const avatarPreview = ref(null);
      const authData = ref(store.getters['auth/getAuthData']);

      const logout = () => {
        useAuth.logout().then(() => {
          router.push(this.$tMakeRoute({ name: 'login' }));
        }).catch(err => {
          console.log('Login error response: ', err);
        });
      }

      onMounted(() => {
        feather.replace();

        avatarPreview.value = image(authData.value.avatar)
      });

      return {
        avatarPreview,
        authData,

        logout,
      }
    },
    computed: {
      currentPath() {
        return this.$route.name;
      },
    },
    components: {
      LanguageSwitcher,
      Notification,
    },
  };
</script>