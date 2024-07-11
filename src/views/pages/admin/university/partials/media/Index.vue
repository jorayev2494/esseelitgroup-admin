<template>  
    <div class="col-xl-12 col-md-12">
      <div class="card flex-fill">
        <div class="card-header">
          <strong class="card-title">{{ $t('university.form.logo') }} </strong>
        </div>

        <center>
          <div class="card-body">
            <div class="avatar avatar-xxl mr-2">

              <input id="logo" class="d-none" name="logo" type="file" accept="image/*" @change="$emit('changed', $event)">

              <label for="logo">
                <img class="img-fluid rounded" :src="logoPreview" alt="logo">
              </label>

            </div>
          </div>
        </center>
      </div>

      <div class="card flex-fill">
        <div class="card-header">
          <strong class="card-title">{{ $t('university.form.cover') }} </strong>
        </div>
        <center>
          <div class="card-body">
            <div class="blog-image mb-0">

              <input id="cover" class="d-none" name="cover" type="file" accept="image/*" @change="$emit('changed', $event)">

              <label for="cover">
                <img class="img-fluid rounded" :src="coverPreview" width="75%" alt="cover">
              </label>

            </div>
          </div>
        </center>
      </div>
    </div>
</template>

<script setup>
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

</script>
