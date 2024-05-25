<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body" v-if="form">
          <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('document.form.type') }}</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.type" required>
                  <option value="" disabled selected>{{ $t('document.form.type') }}</option>
                  <option
                    v-for="({ value }, idx) of types" :key="idx"
                    :value="value"
                    >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('document.form.file') }}</label>
              <div class="col-lg-9">
                <input class="form-control" type="file" accept="application/pdf" @change="uploadFile">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('document.form.is_active') }}</label>
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
    <!-- <pre>{{ form }}</pre> -->
    <Inputs v-if="form && form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>
</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    types,
    inputs,

    uploadFile,
    update,
  } = useCreate();
</script>