<template>
  <div class="MyVideo">
    <video ref="video" src="videoSrc"></video>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';

  const video = ref<HTMLVideoElement | null>(null);
  onMounted(async () => {
    console.log(navigator);
    const options = {
      video: {
        width: {
          min: 1920,
          ideal: 1920,
          max: 1920,
        },
        height: {
          min: 1080,
          ideal: 1080,
          max: 1080,
        }
      }
    };
    const videoStream: MediaStream = await navigator.mediaDevices.getUserMedia(options);
    console.log(video.value);
    video.value!.srcObject = videoStream;
    video.value!.play();
    videoStream.addEventListener('addtrack', res => {
      console.log(1111111, res);
    })
  });
</script>
<style scoped lang="scss">
  .MyVideo {
    video {
      width: 640px;
      height: 360px;
      border: 1px solid red;
    }
  }
</style>
