<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper login-body">
       <div class="login-wrapper">
           <div class="container">
               <div class="loginbox">
                   <div class="login-left">
                       <img class="img-fluid" src="@/assets/img/admin/logo.png" alt="Logo">
                   </div>
                   <div class="login-right">
                        <router-view />
                   </div>
               </div>
               <HorizontalLanguageSwitcher />
           </div>
       </div>
   </div>
   <!-- /Main Wrapper -->   
</template>

<script setup>
import HorizontalLanguageSwitcher from '@/views/pages/components/horizontalLanguageSwitcher/Index.vue'
</script>
