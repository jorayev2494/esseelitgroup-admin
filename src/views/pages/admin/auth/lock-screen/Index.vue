<template>
    <div class="login-right-wrap">
        <div class="lock-user">
            <img class="rounded-circle" src="@/assets/img/admin/profiles/avatar-12.jpg" alt="User Image">
            <h4>Allen Davis</h4>
        </div>
        
        <!-- Form -->
        <form action="/admin/index">
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Password">
            </div>
            <div class="form-group mb-0">
                <button class="btn btn-primary btn-block" type="submit">Enter</button>
            </div>
        </form>
        <!-- /Form -->
        
        <div class="text-center dont-have">
            Sign in as a different user?
            <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
    </div>
</template>