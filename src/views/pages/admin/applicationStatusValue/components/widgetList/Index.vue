<template>
  <div class="row">

    <div
      class="col-xl-2 col-sm-6 col-12 mb-4"
      @click.stop="clearClicked()"
    >
      <div class="border border-danger rounded">
        <div class="rounded" :class="clickedItem !== null ? 'shadow cursor-pointer' : 'shadow-none cursor-not-allowed item-selected'">
          <span class="badge badge-light inv-badge py-2 w-100 text-danger">
            {{ $t(clearItem.label) }}
          </span>
        </div>
      </div>
    </div>

    <div
      v-for="(item, idx) in items" :key="idx"
      class="col-xl-2 col-sm-6 col-12 mb-4"
      @click.stop="itemClicked(item)"
    >
      <div class="cursor-pointer rounded" :class="clickedItem?.uuid === item.uuid ? 'shadow-none cursor-not-allowed item-selected' : 'shadow cursor-pointer'">
        <span class="badge badge-pill inv-badge py-2 w-100" :style="useApplicationStatusStyle(item)">
          {{ item.value ?? 'null' }}
          <span class="badge bg-white text-black ms-1">{{ item.application_count }}</span>
        </span>
      </div>
    </div>
  
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  import useBehavior from './useBehavior'

  const emit = defineEmits(['click', 'clear']);

  const props = defineProps({
    clearItem: {
      type: Object,
      default: () => ({
        label: 'system.clear',
      }),
    }
  });

  const {
    items,
    clickedItem,
    
    itemClicked,
    clearClicked,
    useApplicationStatusStyle,
  } = useBehavior({ props, emit });

</script>

<style scoped>
  .item-selected {
    opacity: .7;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .cursor-not-allowed {
    cursor: not-allowed;
  }
</style>
