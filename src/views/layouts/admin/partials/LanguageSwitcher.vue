<template>
  <li class="nav-item dropdown has-arrow">
    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
      <span class="p-1">
        {{ $t(`system.supported-locales.${locale}`) }}
      </span>
    </a>
    <div class="dropdown-menu">
      <!-- <router-link class="dropdown-item" to="/admin/profile">My Profile</router-link> -->
      <!-- <router-link class="dropdown-item" to="/admin/settings">Settings</router-link> -->
      <a href="#" class="dropdown-item"
        v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`"
        :class="{ 'active': sLocale === locale }"
        @click="switchLanguage(sLocale)"
      >
        {{ $t(`system.supported-locales.${sLocale}`) }}
      </a>
    </div>
  </li>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import Tr from '@/services/translations/translation'
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { t, locale } = useI18n();
  const supportedLocales = Tr.supportedLocales
  console.log('Supported Locales: ', Tr.supportedLocales);

  const switchLanguage = async locale => {
    await Tr.switchLanguage(locale);

    try {
      await router.replace({ params: { locale: locale } });
    } catch (error) {
      console.error(error);
      router.push('/');
    }
  }

</script>

<style lang="scss" scoped>

</style>
