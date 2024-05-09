<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.name') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="nameSelectedPreview"
                  :options="names"
                  :multiple="false"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('department.form.name')"
                  
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
              <label class="col-lg-3 col-form-label">{{ $t('department.form.alias') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="aliasesPreview"
                  :options="aliases"
                  :multiple="false"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('department.form.alias')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.alias_uuid = item.uuid"
                  @remove="item => form.alias_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.university') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="universitiesPreview"
                  :options="universities"
                  :multiple="false"

                  track-by="uuid"
                  label="name"
                  :placeholder="$t('department.form.university')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="universityWasChanged"
                  @remove="item => form.university_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.faculty') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="facultiesPreview"
                  :options="faculties"
                  :multiple="false"

                  track-by="uuid"

                  :custom-label="({ name }) => name?.value"
                  :placeholder="$t('department.form.faculty')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.faculty_uuid = item.uuid"
                  @remove="item => form.faculty_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.language') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="languagesPreview"
                  :options="languages"
                  :multiple="false"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('department.form.language')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.language_uuid = item.uuid"
                  @remove="item => form.language_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.degree') }}</label>
              <div class="col-lg-9">

                <VueMultiselect
                  v-model="degreesPreviews"
                  :options="degrees"
                  :multiple="false"

                  label="value"
                  track-by="uuid"
                  :placeholder="$t('department.form.degree')"
                  
                  @select="item => form.degree_uuid = item.uuid"
                  @remove="item => form.degree_uuid = null"
                >
                </VueMultiselect>

              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('company.form.name') }}</label>
              <div class="col-lg-6">
                <input type="text" v-model="form.price" class="form-control" :placeholder="$t('department.form.price')" required>
              </div>
              <div class="col-lg-3">
                <VueMultiselect
                  v-model="currenciesPreviews"
                  :options="currencies"
                  :multiple="false"

                  label="code"
                  track-by="uuid"
                  :placeholder="$t('department.form.currency')"

                  :select-label="''"
                  :deselect-label="''"
                  :selected-label="''"
                  
                  @select="item => form.price_currency_uuid = item.uuid"
                  @remove="item => form.price_currency_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.is_filled') }}</label>
              <div class="col-lg-9">

                <div class="status-toggle d-flex justify-content-left">
                  <input type="checkbox" id="is_filled" name="is_filled" v-model="form.is_filled" class="check">
                  <label for="is_filled" class="checktoggle m-0">checkbox</label>
                </div>

              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.activity') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.is_active" required>
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
                <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6">
    <Inputs :form="form" :inputs="inputs" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'

  const {
    form,
    names,
    aliasesPreview,
    aliases,
    inputs,
    universitiesPreview,
    universities,
    facultiesPreview,
    faculties,
    languages,
    languagesPreview,
    degrees,
    degreesPreviews,
    currenciesPreviews,
    currencies,
    nameSelectedPreview,

    create,
    universityWasChanged,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
