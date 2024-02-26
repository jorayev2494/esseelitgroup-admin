<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Company</label>
                    <div class="col-lg-9">
                    <select class="form-select" v-model="form.company_uuid" aria-label="Default select example" required>
                        <option selected>Open this select menu</option>
                        <option
                        v-for="({ uuid, name }, idx) of companies" :key="idx"
                        :value="uuid"
                        >
                        {{ name }}
                        </option>
                    </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Logo</label>
                    <div class="col-lg-9">
                        <input class="form-control" type="file" accept="image/*" @change="uploadMedia($event, 'logo')">
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Cover</label>
                    <div class="col-lg-9">
                        <input class="form-control" type="file" accept="image/*" @change="uploadMedia($event, 'cover')">
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Youtube video id</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.youtube_video_id" class="form-control" required>
                    </div>
                </div>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>

    <Inputs :form="form" />
  </div>

  <div class="col-xl-6">
    <Media
      :logoPreview="logoPreview"
      :coverPreview="coverPreview"
    />

    <YouTubeFrame :youtube-video-id="form.youtube_video_id" />
  </div>

</template>

<script setup>
  import Media from '../partials/media/Index.vue'
  import Inputs from '../partials/input/Index.vue'
  import YouTubeFrame from '../partials/youtubeFrame/Index.vue'
  import useEdit from './useEdit.js';

  const { form, logoPreview, coverPreview, companies, uploadLogo, uploadCover, uploadMedia, create } = useEdit();
</script>