<script setup lang="ts">

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

let cIndex = 0;

function next() {
  cIndex = cIndex === videos.length - 1 ? 0 : cIndex + 1;
  console.log("CIndex:");
  console.log(cIndex);
}

function prev() {
  cIndex = cIndex === 0 ? videos.length - 1 : cIndex - 1;
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
        <a :onclick="prev()" class="prev">&#10094;</a>
        <span @click="next()" class="next">&#10095;</span>
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