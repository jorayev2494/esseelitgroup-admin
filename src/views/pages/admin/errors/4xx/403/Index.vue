<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper error-page">

    <div class="error-box">
      <h1>403</h1>
      <h3 class="h2 mb-3">
        <i class="fa fa-warning"></i>
        {{ $t('error.unauthorized_action.title') }}!
      </h3>
      <p class="h4 font-weight-normal">{{ $t('error.unauthorized_action.message') }}</p>
      <router-link :to="$tMakeRoute({ name: 'dashboard' })" class="btn btn-primary">Back to Home</router-link>
    </div>

  </div>
  <!-- /Main Wrapper -->
</template>