<template>
  <ul class="list-group list-group-horizontal justify-content-center align-items-center">
    <li class="list-item pe-2 text-secondary" v-for="(itemLocale, idx) of Tr.supportedLocales" :key="idx" @click="switchLanguage(itemLocale)">
      <p v-if="locale === itemLocale">
        <small>
          {{ $t(`system.supported-locales.${itemLocale}`) }}
        </small>
      </p>
      <p class="cursor-pointer" v-else>
        <u>
          <small>
            {{ $t(`system.supported-locales.${itemLocale}`) }}
          </small>
        </u>
      </p>
    </li>
  </ul>
</template>

<script setup>
  import Tr from '@/services/translations/translation.js';
  import { useI18n } from 'vue-i18n';
  const { locale } = useI18n();
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const switchLanguage = async newLocale => {
    await Tr.switchLanguage(newLocale);

    try {
      await router.replace({ params: { locale: newLocale } })
    } catch (error) {
      router.push('/');
    }
  }

</script>


<style>
  ul {
    list-style-type: none;
  }
</style>
