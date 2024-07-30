<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="tryToCreate" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.participants_number') }}</label>
              <div class="col-lg-9">
                  <input type="number" min="1" max="50" v-model="form.participants_number" class="form-control" :placeholder="$t('contest.form.participants_number')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.start_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.start_time" class="form-control" :placeholder="$t('contest.form.start_time')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.end_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.end_time" class="form-control" :placeholder="$t('contest.form.end_time')">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('contest.form.application_statuses') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="applicationStatusPreview"
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
                  v-model="studentNationalityPreview"
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
                  <input type="checkbox" id="is_active" name="is_active" v-model="form.is_active" class="check">
                  <label for="is_active" class="checktoggle m-0">checkbox</label>
                </div>

              </div>
            </div>

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
  import Inputs from '../../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'

  const {
    form,
    inputs,

    applicationStatusPreview,
    applicationStatuses,

    studentNationalityPreview,
    studentNationalities,

    activityOptions,

    tryToCreate,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
