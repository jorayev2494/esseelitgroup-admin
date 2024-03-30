<template>
  <span
    v-if="isShow"
    class="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-light"
    :class="`bg-${color}`"
  >
    <i :class="icon"></i>
  </span>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    isShow: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      default: () => 'fa-solid fa-check',
    },
    color: {
      type: String,
      default: () => 'success',
    },
  });

  const {
    isShow,
    icon,
    color,
  } = props;

</script>
