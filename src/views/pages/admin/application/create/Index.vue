<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('application.application_form') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.full_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.full_name" class="form-control" :placeholder="$t('application.form.full_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.birthday') }}</label>
              <div class="col-lg-9">
                  <input type="date" v-model="form.birthday" class="form-control" :placeholder="$t('application.form.birthday')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.father_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.father_name" class="form-control" :placeholder="$t('application.form.father_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.mother_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.mother_name" class="form-control" :placeholder="$t('application.form.mother_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.passport_number') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.passport_number" class="form-control" :placeholder="$t('application.form.passport_number')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('application.form.phone')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.friend_phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.friend_phone" class="form-control" :placeholder="$t('application.form.friend_phone')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.home_address') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.home_address" class="form-control" :placeholder="$t('application.form.home_address')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.email') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.email" class="form-control" :placeholder="$t('application.form.email')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.company') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.company_uuid" aria-label="Default select example" :placeholder="$t('application.form.company')" @change="companyWasChanged" required>
                  <option value="" disabled selected>{{ $t('application.form.company') }}</option>
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
              <label class="col-lg-3 col-form-label">{{ $t('application.form.country') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.country_uuid" :placeholder="$t('application.form.country')" required>
                  <option value="" disabled selected>{{ $t('application.form.country') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of countries" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.university') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.university_uuid" @change="universityWasChanged" required>
                  <option value="" disabled selected>{{ $t('application.form.university') }}</option>
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
              <label class="col-lg-3 col-form-label">{{ $t('application.form.faculties_and_departments') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="selectedDepartments"
                  :options="departmentOptions"
                  :multiple="true"

                  :group-select="true"
                  group-label="faculty"
                  group-values="departments"
                  track-by="name"

                  label="name"
                  :placeholder="$t('application.form.faculties_and_departments_select.placeholder')"

                  :select-group-label="$t('application.form.faculties_and_departments_select.select_group_label')"
                  :deselect-group-label="$t('application.form.faculties_and_departments_select.deselect_group_label')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"
                >
                </VueMultiselect>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.status') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.status" required>
                  <option value="" disabled selected>{{ $t('application.form.status') }}</option>
                  <option
                    v-for="(value, idx) of statuses" :key="idx"
                    :value="value"
                    :selected="value === form.status.value"
                  >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div> -->

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.status_note') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.note" class="form-control" :placeholder="$t('application.form.status_note')" required>
              </div>
            </div> -->

            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <DocumentsPreview v-if="form" :form="form" :additional-documents="additionalDocuments" />
  </div>
</template>

<script setup>
  import DocumentsPreview from '../partials/documents/upload/Index.vue'
  import VueMultiselect from 'vue-multiselect'
  import useIndex from './useIndex';

  const {
    form,
    activityOptions,
    companies,
    countries,
    faculties,
    universities,
    statuses,
    additionalDocuments,

    selectedDepartments,
    departmentOptions,

    companyWasChanged,
    universityWasChanged,
    loadFaculties,
    create,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
