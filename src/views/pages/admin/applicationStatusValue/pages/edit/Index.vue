<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
      <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
      </div>

      <div class="card-body">
        <form action="#" method="POST" @submit.prevent="update">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('applicationStatusValue.form.text_color') }}</label>
            <div class="col-lg-9">
              <input type="color" name="text_color" v-model="form.text_color" class="form-control form-control-color" required>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('applicationStatusValue.form.background_color') }}</label>
            <div class="col-lg-9">
              <input type="color" name="background_color" v-model="form.background_color" class="form-control form-control-color" required>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('applicationStatusValue.form.is_required_note') }}</label>
            <div class="col-lg-9">

              <div class="status-toggle d-flex justify-content-left">
                <input type="checkbox" id="is_required_note" name="is_required_note" v-model="form.is_required_note" class="check">
                <label for="is_required_note" class="checktoggle m-0">checkbox</label>
              </div>

            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('applicationStatusValue.form.is_first') }}</label>
            <div class="col-lg-9">

              <div class="status-toggle d-flex justify-content-left">
                <input type="checkbox" id="is_first" name="is_first" v-model="form.is_first" class="check">
                <label for="is_first" class="checktoggle m-0">checkbox</label>
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

  <div class="col-xl-6 d-flex">
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>
</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,

    update,
  } = useEdit();
</script>
