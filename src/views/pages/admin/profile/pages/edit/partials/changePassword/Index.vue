<template>
  <div class="card">
    <div class="card-body">

      <!-- <h5 class="card-title">{{ $t('profile.partials.change_password.title') }}</h5> -->
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <form method="POST" @submit.prevent="changePassword">

            <div class="form-group">
              <label for="current_password">
                {{ $t('profile.partials.change_password.form.current_password') }}
                <span class="star-red">*</span>
              </label>
              <input type="password" id="current_password" v-model="form.current_password" class="form-control" :placeholder="$t('profile.partials.change_password.form.current_password')" required>
            </div>

            <div class="form-group">
              <label for="new_password">
                {{ $t('profile.partials.change_password.form.new_password') }}
                <span class="star-red">*</span>
              </label>
              <input type="password" id="new_password" v-model="form.new_password" class="form-control" :placeholder="$t('profile.partials.change_password.form.new_password')" required>
            </div>

            <div class="form-group">
              <label for="new_password_confirmation">
                {{ $t('profile.partials.change_password.form.new_password_confirmation') }}
                <span class="star-red">*</span>
              </label>
              <input type="password" id="new_password_confirmation" v-model="form.new_password_confirmation" class="form-control" :placeholder="$t('profile.partials.change_password.form.new_password_confirmation')" required>
            </div>

            <button class="btn btn-primary" type="submit">{{ $t('system.save_changes') }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useBehavior from './useBehavior';

  const {
    form,

    changePassword,
  } = useBehavior();
</script>
