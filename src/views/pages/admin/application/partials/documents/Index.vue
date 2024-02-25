<template>  
    <div class="col-xl-12 col-md-12">
      <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Logo</h4>
        </div>
        <center>
          <div class="card-body">
            <div class="avatar avatar-xxl mr-2">
              <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
            </div>
            <!-- <div class="avatar avatar-xxl ml-2">
              <img class="avatar-img rounded" alt="User Image" :src="logoPreview">
            </div> -->
          </div>
        </center>
      </div>

      <div class="card flex-fill">
        <div class="card-header">
          <h4 class="card-title">Cover</h4>
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

  // const { logoPreview, coverPreview, uploadLogo, uploadCover } = useIndex({ props });
</script>
