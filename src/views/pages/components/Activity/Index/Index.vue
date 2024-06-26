<template>
  <p class="mt-2">
    <span v-if="isActive" class="text-success">
      <i class="fa fa-check-circle" aria-hidden="true"></i>
      <!-- <i class="fa fa-toggle-on" aria-hidden="true"></i> -->
    </span>
    <span v-else class="text-danger">
      <i class="fa fa-minus-circle" aria-hidden="true"></i>
      <!-- <i class="fa fa-toggle-off" aria-hidden="true"></i> -->
    </span>
  </p>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    isActive: {
      type: Boolean,
      required: true,
    },
  })
</script>
