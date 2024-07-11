<template>
  <div class="modal fade" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-content p-2">
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h5 class="modal-title">Announcement</h5>

            <h4 class="modal-title">{{ data.title }}</h4>
            <p class="mb-4">{{ data.content }}</p>

            <!-- <button type="button" class="btn btn-primary">Delete </button> -->
            <!-- <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })
</script>
