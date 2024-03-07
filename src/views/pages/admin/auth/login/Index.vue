<template>
 	<div class="login-right-wrap">
        <h1>{{ $t('auth.login') }}</h1>
        <p class="account-subtitle">{{ $t('auth.access_to_our_dashboard') }}</p>
        
        <!-- Form -->
        <form action="#" method="POST" @submit.prevent="login">
            <div class="form-group">
                <input class="form-control" type="text" v-model="form.email" placeholder="Email">
            </div>

            <div class="form-group">
                <input class="form-control" type="password" v-model="form.password" placeholder="Password">
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">{{ $t('auth.sign_in') }}</button>
            </div>
        </form>
        <!-- /Form -->
        
        <div class="text-center forgotpass">
            <router-link :to="$tMakeRoute({ name: 'restore_password.link' })">
                {{ $t('auth.forgot_password?') }}
            </router-link>
        </div>

        <div class="login-or" v-if="showSocialLogin">
            <span class="or-line"></span>
            <span class="span-or">or</span>
        </div>
            
        <!-- Social Login -->
        <div class="social-login" v-if="showSocialLogin">
            <span>Login with</span>
            <a href="#" class="facebook">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#" class="google">
                <i class="fab fa-google"></i>
            </a>
        </div>
        <!-- /Social Login -->
        
        <!-- <div class="text-center dont-have">
            {{ $t('auth.do_not_have_an_account') }}
            <router-link :to="$tMakeRoute({ name: 'register' })">{{ $t('auth.register') }}</router-link>
        </div> -->
    </div>
</template>

<script>
    import { useLogin } from './useLogin';

    export default {
        setup(_, data) {
            const {
                showSocialLogin,
                form,
                login,
            } = useLogin({ data});

            return {
                showSocialLogin,
                form,
                login,
            }
        }
    }
</script>

<style>
    .fa-facebook-square {
        font-size: 14px;
    }
    .fa-google {
        font-size: 14px;
    }
</style>