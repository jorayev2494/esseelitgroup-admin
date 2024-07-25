<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
      <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
      </div>

      <div class="card-body">
        <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
          <div class="form-group row">
            <label class="col-lg-3 col-form-label">{{ $t('role.form.is_active') }}</label>
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

  <div class="col-xl-3">
    <!-- <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data"> -->
              <!-- <div class="text-right">
                  <button type="submit" class="btn btn-primary" @click.prevent="create">{{ $t('system.save') }}</button>
              </div> -->
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