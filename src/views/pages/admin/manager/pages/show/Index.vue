<template>
  <div class="col-xl-2">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('manager.form.avatar') }}</h4>
      </div>

      <center>
        <label for="avatar">
          <div class="card-body mb-4">
            <!-- <div class="avatar avatar-xxl mr-2"> -->
              <img class="avatar-img rounded" role="button" :src="avatarPreview" width="100%" :alt="avatarPreview">
            <!-- </div> -->
          </div>
        </label>
      </center>
    
      <input class="form-control d-none" id="avatar" type="file" accept="image/*" @change="event => uploadAvatar(event, avatar => form.avatar = avatar)">
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('manager.context_title') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('manager.form.first_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.first_name" class="form-control" :placeholder="$t('manager.form.first_name')" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('manager.form.last_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.last_name" class="form-control" :placeholder="$t('manager.form.last_name')" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('manager.form.email') }}</label>
              <div class="col-lg-9">
                <input type="email" v-model="form.email" class="form-control" :placeholder="$t('manager.form.email')" disabled>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('manager.form.phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('manager.form.phone')" required>
              </div>
            </div> -->

            <!-- <div class="text-right">
              <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div> -->
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-4 d-flex">

  </div>
</template>

<script setup>
  import VueMultiselect from 'vue-multiselect'
  import useIndex from './useIndex';

  const {
    form,
    avatarPreview,
    uploadAvatar,

    companies,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
