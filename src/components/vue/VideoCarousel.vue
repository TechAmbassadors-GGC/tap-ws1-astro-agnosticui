<script setup lang="ts">

import { ref } from 'vue'
import '/src/styles/global.css';

interface ClipProps {
  src: string;
  caption?: string;
}

interface Props{
  videos: ClipProps[];
  showIframe: boolean;
}

const props = defineProps<Props>(); 

const { videos, showIframe } = props;

let cIndex = ref(0);

function next() {
  cIndex.value = cIndex.value == videos.length - 1 ? 0 : cIndex.value + 1;
}

function prev() {
  cIndex.value = cIndex.value == 0 ? videos.length - 1 : cIndex.value - 1;
} 
</script>

<template>

<section>
    <div v-if="showIframe">
      <iframe
        class="video-section"
        :src="`https://www.youtube.com/embed/${videos[cIndex].src}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p v-if="videos[cIndex].caption">{{videos[cIndex].caption}}</p>
        <a @click="prev()" class="prev">&#10094;</a>
        <a @click="next()" class="next">&#10095;</a>
    </div>
</section>

</template>

<style scoped>
   .video-section {
    width: 100%;
    max-width: 800px;
    height: 450px;
  }

</style>