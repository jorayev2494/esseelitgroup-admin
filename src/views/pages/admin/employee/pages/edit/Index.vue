<template>
  <div class="col-xl-2">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('student.form.avatar') }}</h4>
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
    
      <input class="form-control d-none" id="avatar" type="file" accept="image/*" @change="event => uploadAvatar(event, avatar => form.avatar = avatar)">
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('student.application_form') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">

            <div class="form-group row" v-if="true">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.company') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="form.company"
                  :options="companies"

                  track-by="uuid"
                  label="name"
                  :placeholder="$t('student.form.company')"

                  @select="item => form.company_uuid = item.uuid"
                  @remove="item => form.company_uuid = null"
                >
                </VueMultiselect>
                <!-- :select-group-label="$t('student.form.faculties_and_departments_select.select_group_label')"
                :deselect-group-label="$t('student.form.faculties_and_departments_select.deselect_group_label')"
                
                :select-label="$t('student.form.faculties_and_departments_select.select_label')"
                :deselect-label="$t('student.form.faculties_and_departments_select.deselect_label')"
                :selected-label="$t('student.form.faculties_and_departments_select.selected')" -->
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.first_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.first_name" class="form-control" :placeholder="$t('student.form.first_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.last_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.last_name" class="form-control" :placeholder="$t('student.form.last_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.email') }}</label>
              <div class="col-lg-9">
                <input type="email" v-model="form.email" class="form-control" :placeholder="$t('student.form.email')" required>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('student.form.phone')" required>
              </div>
            </div> -->

            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
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
    update,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
