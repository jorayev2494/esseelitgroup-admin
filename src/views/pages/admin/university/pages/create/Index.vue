<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">{{ $t('university.form.country') }}</label>
                <div class="col-lg-9">
                <select class="form-select" v-model="form.country_uuid" @change="countryChanged" aria-label="Default select example" required>
                    <option value="" disabled selected>{{ $t('university.form.country') }}</option>
                    <option
                      v-for="({ uuid, value }, idx) of countries" :key="idx"
                      :value="uuid"
                    >
                    {{ value }}
                    </option>
                </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">{{ $t('university.form.city') }}</label>
                <div class="col-lg-9">
                <select class="form-select" v-model="form.city_uuid" aria-label="Default select example" required>
                    <option value="" disabled selected>{{ $t('university.form.city') }}</option>
                    <option
                      v-for="({ uuid, value }, idx) of cities" :key="idx"
                      :value="uuid"
                    >
                    {{ value }}
                    </option>
                </select>
                </div>
              </div>

              <!-- <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('university.form.logo') }}</label>
                  <div class="col-lg-9">
                      <input class="form-control" name="logo" type="file" accept="image/*" @change="uploadMedia">
                  </div>
              </div>

              <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('university.form.cover') }}</label>
                  <div class="col-lg-9">
                    <input class="form-control" name="cover" type="file" accept="image/*" @change="uploadMedia">
                  </div>
              </div> -->

              <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('university.form.youtube_video_id') }}</label>
                  <div class="col-lg-9">
                    <input type="text" v-model="form.youtube_video_id" class="form-control" required>
                  </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label">{{ $t('university.form.is_on_the_country_list') }}</label>
                <div class="col-lg-9">

                  <div class="status-toggle d-flex justify-content-left">
                    <input type="checkbox" id="is_on_the_country_list" name="is_on_the_country_list" v-model="form.is_on_the_country_list" class="check">
                    <label for="is_on_the_country_list" class="checktoggle m-0">checkbox</label>
                  </div>

                </div>
              </div>

              <div class="text-right">
                  <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
              </div>
            </form>
        </div>
    </div>

    <Inputs :form="form" :inputs="inputs" />
  </div>

  <div class="col-xl-6">
    <Media
      :logoPreview="logoPreview"
      :coverPreview="coverPreview"
      @changed="uploadMedia"
    />

    <YouTubeFrame :youtube-video-id="form.youtube_video_id" />

  </div>

  <ImageCropper
    v-bind="modalBindings"
    @cropped="croppedMedia"
  />

</template>

<script setup>
  import Media from '../../partials/media/Index.vue'
  import YouTubeFrame from '../../partials/youtubeFrame/Index.vue'
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'
  import ImageCropper from '../../../../components/imageCropper/Index.vue'

  const {
    form,
    inputs,
    countries,
    cities,
    logoPreview,
    coverPreview,
    modalBindings,

    countryChanged,
    uploadMedia,
    croppedMedia,
    create,
  } = useEdit();
</script>
