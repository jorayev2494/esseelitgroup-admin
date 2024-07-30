<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body" v-if="form">
          <form action="#" method="POST">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.participants_number') }}</label>
              <div class="col-lg-9">
                  <input type="number" min="1" max="50" v-model="form.participants_number" class="form-control" :placeholder="$t('contest.form.participants_number')" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.start_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.start_time" class="form-control" :placeholder="$t('contest.form.start_time')" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.end_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.end_time" class="form-control" :placeholder="$t('contest.form.end_time')" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.application_statuses') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="form.application_statuses"
                  :options="applicationStatuses"
                  :multiple="true"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('contest.form.application_statuses')"
                  
                  :select-label="''"
                  :deselect-label="''"
                  :selected-label="''"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.student_nationalities') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="form.student_nationalities"
                  :options="studentNationalities"
                  :multiple="true"

                  track-by="uuid"
                  label="value"
                  :placeholder="$t('contest.form.student_nationalities')"
                  
                  :select-label="''"
                  :deselect-label="''"
                  :selected-label="''"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.is_active') }}</label>
              <div class="col-lg-9">

                <div class="status-toggle d-flex justify-content-left">
                  <input type="checkbox" id="is_active" name="is_active" v-model="form.is_active" class="check" disabled>
                  <label for="is_active" class="checktoggle m-0">checkbox</label>
                </div>

              </div>
            </div>
          </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6">
    <Inputs v-if="form" :form="form" :inputs="inputs" :values="form.translations" readonly />
  </div>

  <div class="col-xl-12">
    <!-- <pre>{{ form }}</pre> -->
    <Students v-if="form && form.uuid" :contestUuid="form.uuid" :participantsNumber="form.participants_number" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'
  import Students from '../../../contestStudent/pages/index/Index.vue'

  const {
    form,
    inputs,

    applicationStatusPreview,
    applicationStatuses,

    studentNationalityPreview,
    studentNationalities,

    activityOptions,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
