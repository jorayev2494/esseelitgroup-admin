<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('department.form.degrees') }}</label>
              <div class="col-lg-9">

                <VueMultiselect
                  v-model="degreesPreviews"
                  :options="degrees"
                  :multiple="true"
                  :taggable="true"

                  label="value"
                   track-by="uuid"
                  :placeholder="$t('department.form.degrees')"
                  required
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

  <div class="col-xl-6 d-flex">
    <Inputs :form="form" :inputs="inputs" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'

  const {
    form,
    companies,
    inputs,
    universities,
    faculties,
    degrees,
    degreesPreviews,

    create,
  } = useCreate();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
