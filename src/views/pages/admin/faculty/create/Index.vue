<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.company') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.company_uuid" @change="companyWasChanged" required>
                    <option value="" disabled selected>{{ $t('faculty.form.company') }}</option>
                    <option
                      v-for="({ uuid, name }, idx) of companies" :key="idx"
                      :value="uuid"
                    >
                    {{ name }}
                    </option>
                </select>
              </div>
            </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('faculty.form.university') }}</label>
            <div class="col-lg-9">
              <select class="form-select" v-model="form.university_uuid" required>
                <option value="" disabled selected>{{ $t('faculty.form.university') }}</option>
                <option
                  v-for="({ uuid, name }, idx) of universities" :key="idx"
                  :value="uuid"
                  >
                  {{ name }}
                </option>
              </select>
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
  import Inputs from '../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,
    companies,
    universities,
    companyWasChanged,
    logoPreview,
    uploadLogo,
    create,
  } = useCreate();
</script>