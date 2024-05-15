<template>
  <div class="col-xl-2">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('contestStudent.form.student.avatar') }}</h4>
      </div>

      <center>
        <label for="avatar">
          <div class="card-body mb-4">
            <!-- <div class="avatar avatar-xxl mr-2"> -->
              <img class="avatar-img rounded" role="button" alt="Client Avatar" :src="avatarPreview" width="100%">
            <!-- </div> -->
          </div>
        </label>
      </center>
    </div>
  </div>

  <div class="col-xl-4 d-flex">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('contestStudent.student') }}</h4>
      </div>

      <div class="card-body">
        <form action="#" method="POST" v-if="form?.student" @submit.prevent="update">

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('contestStudent.form.student.first_name') }}</label>
            <div class="col-lg-9">
              <input type="text" v-model="form.student.first_name" class="form-control" :placeholder="$t('contestStudent.form.student.first_name')" disabled>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('contestStudent.form.student.last_name') }}</label>
            <div class="col-lg-9">
              <input type="text" v-model="form.student.last_name" class="form-control" :placeholder="$t('contestStudent.form.student.last_name')" disabled>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>

  <!-- <pre>{{ additionalDocuments }}</pre> -->
  <!-- <pre>{{ form }}</pre> -->
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('contestStudent.student') }}</h4>
      </div>

      <div class="card-body">
        <form action="#" method="POST" v-if="form?.student" @submit.prevent="update">

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('contestStudent.form.gift_given_at') }}</label>
            <div class="col-lg-9">
              <input type="datetime-local" v-model="form.gift_given_at" class="form-control" :placeholder="$t('contestStudent.form.gift_given_at')">
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('contestStudent.form.note') }}</label>
            <div class="col-lg-9">
              <textarea class="form-control" v-model="form.note" rows="5" :placeholder="$t('contestStudent.form.note')" style="height: 100%;"></textarea>
              <!-- <textarea class="form-control" cols="4" v-model="form.note" :placeholder=""></textarea> -->
            </div>
          </div>

          <div class="text-right">
            <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex';

  const {
    form,
    avatarPreview,

    update,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
