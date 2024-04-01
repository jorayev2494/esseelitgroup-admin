<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
            <div class="form-group row">
                <label class="col-lg-3 col-form-label">{{ $t('faculty.form.logo') }}</label>
                <div class="col-lg-9">
                    <input class="form-control" type="file" accept="image/*" @change="uploadLogo" required>
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
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('faculty.form.logo') }}</h4>
      </div>
      <center>
        <div class="card-body mt-4">
          <div class="avatar avatar-xxl mr-2">
            <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
          </div>
        </div>
    </center>
    </div>
  </div>

  <div class="col-xl-12 d-flex">
    <Inputs :form="form" :inputs="inputs" />
  </div>

</template>

<script setup>
  import useCreate from './useCreate';
  import Inputs from '../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,
    logoPreview,

    uploadLogo,
    create,
  } = useCreate();
</script>