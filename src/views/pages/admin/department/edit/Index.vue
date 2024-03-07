<template>
  <div class="col-xl-6 d-flex" v-if="form.translations">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
            
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.company') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.company_uuid" @change="companyWasChanged" required>
                    <option value="" disabled selected>{{ $t('department.form.company') }}</option>
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
              <label class="col-lg-3 col-form-label">{{ $t('department.form.university') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.university_uuid" @change="universityWasChanged" required>
                  <option value="" disabled selected>{{ $t('department.form.university') }}</option>
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
              <label class="col-lg-3 col-form-label">{{ $t('department.form.faculty') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.faculty_uuid" aria-label="Default select example" required>
                  <option value="" selected disabled>{{ $t('department.form.faculty') }}</option>
                  <option
                    v-for="({ uuid, name }, idx) of faculties" :key="idx"
                    :value="uuid"
                    >
                    {{ name }}
                  </option>
                </select>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.activity') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.is_active" aria-label="Default select example" required>
                  <option value="" selected disabled>{{ $t('department.form.activity') }}</option>
                  <option
                    v-for="(value, key) of activityOptions" :key="key"
                    :value="value"
                    :selected="key === 'active'"
                  >
                    {{ key }}
                  </option>
                </select>
              </div>
            </div> -->

            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../components/InputCard/Index.vue'

  const {
    form,
    companies,
    inputs,
    activityOptions,
    faculties,
    universities,
    update,

    companyWasChanged,
    universityWasChanged,
    loadFaculties,
  } = useCreate();
</script>