<template>
    <div class="login-right-wrap">
        <h1>{{ $t('auth.forgot_password?') }}</h1>
        <p class="account-subtitle">{{ $t('auth.enter_your_email_to_get_a_password_reset_link') }}</p>
        
        <!-- Form -->
        <form action="#" method="POST" @submit.prevent="restorePasswordLink">
            <div class="form-group">
                <input class="form-control" type="text" v-model="email" placeholder="Email">
            </div>
            <div class="form-group mb-0">
                <button class="btn btn-primary btn-block" type="submit">{{ $t('system.send') }}</button>
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
    import useRestorePasswordLink from './useRestorePasswordLink';

    const { email, restorePasswordLink } = useRestorePasswordLink();
</script>
