<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <!-- <pre>{{ universities }}</pre> -->
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.university') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="universitiesPreview"
                  :options="universities"
                  :multiple="false"

                  track-by="uuid"

                  label="name"
                  :placeholder="$t('faculty.form.university')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.university_uuid = item.uuid"
                  @remove="item => form.university_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.name') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="nameSelectedPreview"
                  :options="names"
                  :multiple="false"

                  track-by="value"

                  label="value"
                  :placeholder="$t('faculty.form.name')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.name_uuid = item.uuid"
                  @remove="item => form.name_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-3 col-form-label">{{ $t('faculty.form.logo') }}</label>
                <div class="col-lg-9">
                    <input class="form-control" type="file" accept="image/*" @change="uploadLogo" required>
                </div>
            </div>

            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('faculty.form.logo') }}</h4>
      </div>
      <center>
        <div class="card-body mt-4">
          <div class="avatar avatar-xxl mr-2">
            <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
          </div>
        </div>
      </center>
    </div>
  </div>

  <div class="col-xl-12 d-flex">
    <Inputs :form="form" :inputs="inputs" />
  </div>

</template>

<script setup>
  import useCreate from './useCreate';
  import VueMultiselect from 'vue-multiselect'
  import Inputs from '../../../components/InputCard/Index.vue'

  const {
    form,
    names,
    inputs,
    logoPreview,
    universitiesPreview,
    universities,
    nameSelectedPreview,

    uploadLogo,
    create,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
