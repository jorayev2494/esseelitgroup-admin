<template>
  <li class="nav-item dropdown has-arrow">
    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
      <span class="p-1">
        <i :class="`fi fi-${getLocaleFlag(locale)} me-1`" width="300"></i>
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
        <i :class="`fi fi-${getLocaleFlag(sLocale)} me-1`" width="300"></i>
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
  const { locale } = useI18n();
  const supportedLocales = Tr.supportedLocales

  const switchLanguage = async locale => {
    await Tr.switchLanguage(locale);

    try {
      await router.replace({ params: { locale: locale } });
    } catch (error) {
      console.error(error);
      router.push('/');
    }

    window.location.reload();
  }

  const getLocaleFlag = flag => {
    const flags = {
      en: 'us',
      ru: 'ru',
      tm: 'tm',
      tr: 'tr',
    }

    return flags[flag] ?? flag
  }

</script>

<style lang="scss" scoped>

</style>
