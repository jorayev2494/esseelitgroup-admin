<template>

  <iframe
    v-if="src"
    :src="src"
    @load="cons"
    height="1550"
  >
  </iframe>

</template>

<script setup>
  import useBehavior from './useBehavior'

  const {
    src,
  } = useBehavior();
</script>
