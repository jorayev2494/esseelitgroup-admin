<template>  
    <div class="col-xl-12 col-md-12">
      <div class="card flex-fill">
        <div class="card-header">
          <strong class="card-title">Logo </strong>
          <!-- <small>{{ imageInfo.logoWidth }} x {{ imageInfo.logoHeight }}</small> -->
        </div>

        <center>
          <div class="card-body">
            <div class="avatar avatar-xxl mr-2">
              <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
            </div>
          </div>
        </center>
      </div>

      <div class="card flex-fill">
        <div class="card-header">
          <strong class="card-title">Cover </strong>
          <!-- <small>{{ imageInfo.coverWidth }} x {{ imageInfo.coverHeight }}</small> -->
        </div>
        <center>
          <div class="card-body">
            <div class="blog-image mb-0">
              <img class="img-fluid" :src="coverPreview" width="75%" :alt="coverPreview">
            </div>
          </div>
        </center>
      </div>
    </div>
</template>

<script setup>
  import useIndex from './useIndex'

  import { defineProps } from 'vue'

  const props = defineProps({
    logoPreview: {
      type: String,
      required: true,
    },
    coverPreview: {
      type: String,
      required: true,
    },
  });

  const { imageInfo } = useIndex({ props });
</script>
