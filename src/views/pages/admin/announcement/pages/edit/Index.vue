<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <!-- <pre>{{ statuses }}</pre> -->
        <!-- <pre>{{ form }}</pre> -->

        <div class="card-body" v-if="form">
          <form action="#" method="POST" @submit.prevent="update">

            <div class="form-group row" v-if="statuses">
              <!-- <pre>statusSelectedPreview: {{ statusSelectedPreview }}</pre> -->
              <!-- <pre>{{ statuses }}</pre> -->
              <label class="col-lg-3 col-form-label">{{ $t('announcement.form.for') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="statusSelectedPreview"
                  :options="statuses"
                  :multiple="false"

                  track-by="value"
                  label="label"
                  :placeholder="$t('announcement.form.for')"
                  
                  :select-label="''"
                  :deselect-label="''"
                  :selected-label="''"

                  @select="item => form.for = item.value"
                  @remove="item => form.for = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('announcement.form.start_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.start_time" class="form-control" :placeholder="$t('announcement.form.start_time')" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('announcement.form.end_time') }}</label>
              <div class="col-lg-9">
                <input type="datetime-local" v-model="form.end_time" class="form-control" :placeholder="$t('announcement.form.end_time')">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('announcement.form.is_active') }}</label>
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
    <Inputs v-if="form" :form="form" :inputs="inputs" :values="form.translations" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'

  const {
    form,
    inputs,
    statuses,
    statusSelectedPreview,

    update,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
