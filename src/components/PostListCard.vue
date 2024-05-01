<template>    
    <div class= card-main >
      <Card
      isStacked
      isShadow
      isAnimated

    >
    <div class="h4 p16">
      TAP News
    </div>
      <ul>
        <li v-for="blogPostEntry in blogEntries">
        <a :href="`${base}/posts/${blogPostEntry.data.year}/${blogPostEntry.data.semester}/${blogPostEntry.data.title}`">{{ blogPostEntry.data.title }}</a> &nbsp;
        <time datetime={{ blogPostEntry.data.publishedDate.toISOString() }}>
          {{ blogPostEntry.data.publishedDate.toDateString() }}
        </time>
        </li>
      </ul>
    </Card>
    </div>
  
</template>

<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";

// load blog content: news, etc.
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('posts');

// Remove single slash as it causes double slashes in card
const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;
</script>

<style scoped>
</style>
