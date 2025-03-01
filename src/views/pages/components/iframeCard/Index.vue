<template>
  <div class="card flex-fill mh-100">
    <div class="card-header">
      <h4 class="card-title">Show file</h4>
    </div>

    <div class="card-body card-height" v-if="file">
      <iframe
        :src="file?.url"
        height="100%" 
        width="100%"
      >
      </iframe>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import useBehavior from './useBehavior';

  const props = defineProps({
    file: {
      type: [Object, null],
      required: false,
      default: () => null,
    }
  });

  const {
    file,
  } = useBehavior({ props });
</script>

<style scope>
.card-height {
  height: 1000px;
}
</style>
