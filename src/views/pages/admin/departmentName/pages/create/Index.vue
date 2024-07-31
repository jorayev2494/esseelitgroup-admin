<template>

  <div class="col-xl-12 d-flex">
    <Inputs :form="form" :inputs="inputs" />
  </div>

  <div class="col-xl-3">
    <!-- <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data"> -->
              <div class="text-right">
                  <button type="submit" class="btn btn-primary" @click.prevent="create">{{ $t('system.save') }}</button>
              </div>
            <!-- </form>
        </div>
    </div> -->

  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,

    create,
  } = useEdit();
</script>
