<template>
  <div class="col-xl-2">
    
  </div>

  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">{{ $t('application.application_form') }}</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <!-- <div class="form-group row">
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
            </div> -->

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.alias') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.alias_uuid" :placeholder="$t('application.form.country')" @change="loadData('alias')" required>
                  <option value="" disabled selected>{{ $t('application.form.alias') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of aliases" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.country') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.country_uuid" :placeholder="$t('application.form.country')" @change="loadData('country')" required>
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
              <label class="col-lg-3 col-form-label">{{ $t('application.form.language') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.language_uuid" :placeholder="$t('application.form.language')" @change="loadData('language')" required>
                  <option value="" disabled selected>{{ $t('application.form.language') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of languages" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('application.form.degree') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.degree_uuid" :placeholder="$t('application.form.degree')" @change="loadData('degree')" required>
                  <option value="" disabled selected>{{ $t('application.form.degree') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of degrees" :key="idx"
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
                <select class="form-select" v-model="form.university_uuid" @change="loadData('university')" required>
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

            <div>
              <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
              <button type="submit" class="btn btn-danger ms-2" @click="clear">{{ $t('system.clear') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-4">
    <!-- <pre>{{ form }}</pre> -->
  </div>
</template>

<script setup>
  import VueMultiselect from 'vue-multiselect'
  import useIndex from './useIndex';

  const {
    form,
    aliases,
    languages,
    degrees,
    // companies,
    countries,
    universities,

    selectedDepartments,
    departmentOptions,

    loadData,
    clear,
    create,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
