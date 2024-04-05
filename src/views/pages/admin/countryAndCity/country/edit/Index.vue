<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('country.form.iso') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.iso" class="form-control" maxlength="3" required>
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
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,

    update,
  } = useEdit();
</script>