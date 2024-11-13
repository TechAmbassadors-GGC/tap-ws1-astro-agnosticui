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

<section class="video-carousel">
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
  section.video-carousel {
    position: relative;
  }

  .video-section {
    width: 100%;
    max-width: 800px;
    height: 450px;
  }

  /* make these more specific! */
  .video-carousel .prev,
	.video-carousel .next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		//padding: 1.5rem;
		margin-top: -50px;
		color: var(--agnostic-font-color);
		font-weight: bold;
		font-size: 84px;
		border-radius: 0 3px 3px 0;
		/* user-select: none; */
		/* -webkit-user-select: none; */
	}

	/* Position the "next button" to the right */
	.video-carousel .next {
	right: 0;
	border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.video-carousel .prev:hover,
	.video-carousel .next:hover {
	text-decoration: none;
	}

	.video-carousel .prev:disabled,
	.video-carousel .next:disabled {
	cursor: not-allowed;
	text-decoration: none;
	color: #2f2c2c
	}


</style>