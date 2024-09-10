<template>
  <div class="row">

    <div class="col-md-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title">{{ $t('setting.form.about_us.cover') }}</h5>
        </div>
        <div class="card-body pt-0 w-100">
          <form>
            <div class="settings-form">

              <div class="form-group row d-none">
                <label class="col-lg-3 col-form-label">{{ $t('faculty.form.logo') }}</label>
                <div class="col-lg-9">
                  <input class="form-control" id="cover" type="file" accept="image/*" @change="event => uploadCover(event, cover => form.cover = cover)">
                </div>
              </div>

              <center>
                <div class="card-body">
                  <label for="cover" role="button">
                    <img class="rounded" alt="cover" :src="coverPreview" width="100%">
                  </label>
                </div>
              </center>

            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-md-8">
      <form method="POST" @submit.prevent="update">
        <Inputs v-if="form" :form="form" :inputs="inputs" :values="form.translations" />

        <div class="text-right">
          <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup>
  import useBehavior from './useBehavior'
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,
    coverPreview,

    uploadCover,
    update,
  } = useBehavior();

</script>
