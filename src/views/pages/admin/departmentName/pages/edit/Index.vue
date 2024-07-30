<template>
  <div class="col-xl-12 d-flex">
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>

  <div class="col-xl-2">
    <!-- <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" enctype="multipart/form-data"> -->
              <div class="text-right">
                  <button type="submit" class="btn btn-primary" @click="update">{{ $t('system.save') }}</button>
              </div>
            <!-- </form>
        </div>
    </div> -->

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
