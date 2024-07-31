<template>
  <div class="col-xl-6 d-flex" v-if="form.translations">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.university') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="form.university"
                  :options="universities"
                  :multiple="false"

                  track-by="uuid"

                  label="name"
                  :placeholder="$t('faculty.form.university')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.university_uuid = item.uuid"
                  @remove="item => form.university_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.name') }}</label>
              <div class="col-lg-9">
                <VueMultiselect
                  v-model="nameSelectedPreview"
                  :options="names"
                  :multiple="false"

                  track-by="value"

                  label="value"
                  :placeholder="$t('application.form.faculties_and_departments_select.placeholder')"
                  
                  :select-label="$t('application.form.faculties_and_departments_select.select_label')"
                  :deselect-label="$t('application.form.faculties_and_departments_select.deselect_label')"
                  :selected-label="$t('application.form.faculties_and_departments_select.selected')"

                  @select="item => form.name_uuid = item.uuid"
                  @remove="item => form.name_uuid = null"
                >
                </VueMultiselect>
              </div>
            </div>

            <!-- <div class="form-group row">
              <label class="col-lg-3 col-form-label">{{ $t('faculty.form.logo') }}</label>
              <div class="col-lg-9">
                <input class="form-control" type="file" accept="image/*" @change="uploadLogo">
              </div>
            </div> -->

            <div class="text-right">
              <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
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
          
          <input
            id="input-logo"
            class="d-none"
            name="logo"
            type="file"
            accept="image/*"
            :data-crop-width="$store.getters['faculty/getLogoProp']('width')"
            :data-crop-height="$store.getters['faculty/getLogoProp']('height')"
            @change="changedImage"
          >
          <label for="input-logo">
            <img class="avatar-img rounded" alt="User Image" :src="imagePreview">
          </label>
          
        </div>
    </center>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>

  <ImageCropper
    v-bind="modalBindings"
    @cropped="data => croppedImage(form, data)"
  />
</template>

<script setup>
  import Inputs from '../../../../components/InputCard/Index.vue'
  import VueMultiselect from 'vue-multiselect'
  import useEdit from './useEdit';
  import ImageCropper from '../../../../components/imageCropper/Index.vue'

  const {
    form,
    names,
    inputs,
    imagePreview,
    universities,
    nameSelectedPreview,
    modalBindings,

    changedImage,
    croppedImage,
    update,
  } = useEdit();
</script>

<style scoped>
  @import '@/assets/css/admin/vue-multiselect.css';
</style>
