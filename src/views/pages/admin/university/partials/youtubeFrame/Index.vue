<template>
  <div class="col-xl-12 col-md-12">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">YouTube Video</h4>
      </div>
      <center>
        <div class="card-body">

          <div class="player">
            <VueYtframe
              v-if="youtubeVideoId"
              :video-id="youtubeVideoId"
              :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
              width="100%"
            />
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
    youtubeVideoId: {
      type: [String, null],
      required: true,
    },
  });

  const { } = useIndex({ props });
</script>

<style scoped>
.player {
  border-radius: 20px;
  height: 400px;
  max-width: 600px;
}
</style>
