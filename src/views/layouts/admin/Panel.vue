<template>
  <div class="main-wrapper">
    <layout-headeradmin></layout-headeradmin>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">

        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">{{ $route.meta.title ? $t($route.meta.title) : 'Page title is here' }}</h3>
              <Breadcrumb />
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <div class="row">
          <router-view></router-view>
        </div>

      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script setup>
  import Breadcrumb from './partials/Breadcrumb.vue';
</script>

<style lang="scss" scoped>

</style>
