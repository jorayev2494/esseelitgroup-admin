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
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.company') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="companyPreview"
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
              <label class="col-lg-3 col-form-label">{{ $t('student.form.birthday') }}</label>
              <div class="col-lg-9">
                  <input type="date" v-model="form.birthday" class="form-control" :placeholder="$t('student.form.birthday')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.email') }}</label>
              <div class="col-lg-9">
                  <input type="email" v-model="form.email" class="form-control" :placeholder="$t('student.form.email')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.nationality') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="nationalityPreview"
                  :options="nationalities"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('student.form.nationality')"

                  @select="item => form.nationality_uuid = item.uuid"
                  @remove="item => form.nationality_uuid = null"
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
              <label class="col-lg-3 col-form-label">{{ $t('student.form.passport_number') }}</label>
              <div class="col-lg-9">
                <input type="text" v-model="form.passport_number" class="form-control" :placeholder="$t('student.form.passport_number')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.passport_date_of_issue') }}</label>
              <div class="col-lg-9">
                <input type="date" v-model="form.passport_date_of_issue" class="form-control" :placeholder="$t('student.form.passport_date_of_issue')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.passport_date_of_expiry') }}</label>
              <div class="col-lg-9">
                <input type="date" v-model="form.passport_date_of_expiry" class="form-control" :placeholder="$t('student.form.passport_date_of_expiry')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.phone" class="form-control" :placeholder="$t('student.form.phone')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.friend_phone') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.friend_phone" class="form-control" :placeholder="$t('student.form.friend_phone')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.country_of_residence') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="countryOfResidencePreview"
                  :options="countryOfResidences"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('student.form.country_of_residence')"

                  @select="item => form.country_of_residence_uuid = item.uuid"
                  @remove="item => form.country_of_residence_uuid = null"
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
              <label class="col-lg-3 col-form-label">{{ $t('student.form.home_address') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.home_address" class="form-control" :placeholder="$t('student.form.home_address')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('system.gender.label') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="genderPreview"
                  :options="genders"

                  track-by="value"
                  label="label"
                  :placeholder="$t('system.gender.label')"

                  @select="item => form.gender = item.value"
                  @remove="item => form.gender = null"
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
              <label class="col-lg-3 col-form-label">{{ $t('system.marital_status.label') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="maritalStatusPreview"
                  :options="maritalStatuses"

                  track-by="value"
                  label="label"
                  :placeholder="$t('system.marital_status.label')"

                  @select="item => form.marital_type = item.value"
                  @remove="item => form.marital_type = null"
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
              <label class="col-lg-3 col-form-label">{{ $t('student.form.father_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.father_name" class="form-control" :placeholder="$t('student.form.father_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.mother_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.mother_name" class="form-control" :placeholder="$t('student.form.mother_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.high_school_country') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="highSchoolCountryPreview"
                  :options="highSchoolCountries"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('student.form.high_school_country')"

                  @select="item => form.high_school_country_uuid = item.uuid"
                  @remove="item => form.high_school_country_uuid = null" 
                >
                </VueMultiselect>
                <!-- @select="item => form.high_school_country_uuid = item.uuid"
                @remove="item => form.high_school_country_uuid = null" -->

                <!-- :select-group-label="$t('student.form.faculties_and_departments_select.select_group_label')"
                :deselect-group-label="$t('student.form.faculties_and_departments_select.deselect_group_label')"
                
                :select-label="$t('student.form.faculties_and_departments_select.select_label')"
                :deselect-label="$t('student.form.faculties_and_departments_select.deselect_label')"
                :selected-label="$t('student.form.faculties_and_departments_select.selected')" -->
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.high_school_name') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.high_school_name" class="form-control" :placeholder="$t('student.form.high_school_name')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.high_school_grade_average') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.high_school_grade_average" class="form-control" :placeholder="$t('student.form.high_school_grade_average')" required>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.home_address') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.home_address" class="form-control" :placeholder="$t('student.form.home_address')" required>
              </div>
            </div> -->

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.email') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.email" class="form-control" :placeholder="$t('student.form.email')" required>
              </div>
            </div> -->

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.company') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.company_uuid" aria-label="Default select example" :placeholder="$t('student.form.company')" @change="companyWasChanged" required>
                  <option value="" disabled selected>{{ $t('student.form.company') }}</option>
                  <option
                    v-for="({ uuid, name }, idx) of companies" :key="idx"
                    :value="uuid"
                    >
                    {{ name }}
                  </option>
                </select>
              </div>
            </div> -->

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.country') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.country_uuid" :placeholder="$t('student.form.country')" required>
                  <option value="" disabled selected>{{ $t('student.form.country') }}</option>
                  <option
                    v-for="({ uuid, value }, idx) of countries" :key="idx"
                    :value="uuid"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div> -->

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.status') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.status" required>
                  <option value="" disabled selected>{{ $t('student.form.status') }}</option>
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
              <label class="col-lg-3 col-form-label">{{ $t('student.form.status_note') }}</label>
              <div class="col-lg-9">
                  <input type="text" v-model="form.note" class="form-control" :placeholder="$t('student.form.status_note')" required>
              </div>
            </div> -->

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('student.form.communication_language') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="languagePreview"
                  :options="languages"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('student.form.communication_language')"

                  @select="item => form.communication_language_uuid = item.uuid"
                  @remove="item => form.communication_language_uuid = null"
                >
                </VueMultiselect>
                <!-- :select-group-label="$t('student.form.faculties_and_departments_select.select_group_label')"
                :deselect-group-label="$t('student.form.faculties_and_departments_select.deselect_group_label')"
                
                :select-label="$t('student.form.faculties_and_departments_select.select_label')"
                :deselect-label="$t('student.form.faculties_and_departments_select.deselect_label')"
                :selected-label="$t('student.form.faculties_and_departments_select.selected')" -->
              </div>
            </div>

            <div class="text-right">
                <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
            </div>
          </form>
        </div>
    </div>
  </div>

  <!-- <pre>{{ additionalDocuments }}</pre> -->
  <!-- <pre>{{ form }}</pre> -->
  <div class="col-xl-4 d-flex">
    <DocumentsUpload v-if="form" :form="form" :additional-documents="additionalDocuments" />
  </div>
</template>

<script setup>
  import DocumentsUpload from '../partials/documents/upload/Index.vue'
  import VueMultiselect from 'vue-multiselect'
  import useIndex from './useIndex';

  const {
    form,
    avatarPreview,
    uploadAvatar,

    companyPreview,
    companies,

    genderPreview,
    genders,

    maritalStatusPreview,
    maritalStatuses,

    nationalityPreview,
    nationalities,

    countryOfResidencePreview,
    countryOfResidences,

    highSchoolCountryPreview,
    highSchoolCountries,

    languagePreview,
    languages,
    
    additionalDocuments,

    create,
  } = useIndex();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
