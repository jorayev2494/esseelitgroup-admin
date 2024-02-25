<template>
   	<div class="login-right-wrap">
        <h1>Register</h1>
        <p class="account-subtitle">Access to our dashboard</p>
        
        <!-- Form -->
        <form action="/admin/login">
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Name">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Email">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Password">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Confirm Password">
            </div>
            <div class="form-group mb-0">
                <button class="btn btn-primary btn-block" type="submit">Register</button>
            </div>
        </form>
        <!-- /Form -->
        
        <div class="login-or" v-if="showSocialLogin">
            <span class="or-line"></span>
            <span class="span-or">or</span>
        </div>
        
        <!-- Social Login -->
        <div class="social-login" v-if="showSocialLogin">
            <span>Register with</span>
            <a href="#" class="facebook">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#" class="google">
                <i class="fab fa-google"></i>
            </a>
        </div>
        <!-- /Social Login -->
        
        <div class="text-center dont-have">
            Already have an account?
            <router-link :to="$tMakeRoute({ name: 'login' })">Login</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const showSocialLogin = false;

            return {
                showSocialLogin,
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
