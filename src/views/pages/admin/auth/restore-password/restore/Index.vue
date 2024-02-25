<template>
  <div class="login-right-wrap">
    <h1>{{ $t('auth.forgot_password?') }}</h1>
      <p class="account-subtitle">{{ $t('auth.enter_your_email_to_get_a_password_reset_link') }}</p>

    <!-- Form -->
    <form action="#" method="POST" @submit.prevent="restorePassword">
      <div class="form-group">
        <input class="form-control" type="password" v-model="form.password" :placeholder="$t('auth.new_password')">
      </div>

      <div class="form-group">
        <input class="form-control" type="password" v-model="form.password_confirmation" :placeholder="$t('auth.confirm_new_password')">
      </div>

      <div class="form-group mb-0">
        <button class="btn btn-primary btn-block" type="submit">{{ $t('auth.reset_password') }}</button>
      </div>
    </form>
    <!-- /Form -->

    <div class="text-center dont-have">
      {{ $t('auth.remember_your_password?') }}
      <router-link :to="$tMakeRoute({ name: 'login' })">{{ $t('auth.login') }}</router-link>
    </div>
  </div>
</template>

<script setup>
  import useRestorePassword from './useRestorePassword';

  const { form, restorePassword } = useRestorePassword();


</script>