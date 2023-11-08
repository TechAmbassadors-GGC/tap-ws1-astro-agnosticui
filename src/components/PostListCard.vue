<template>    
    <div class="p16 flex-grow-1 flex-shrink-1" style="flex-basis: 40ch;" >
      <Card
      css="card-demo"
      isStacked
      isShadow
    >
    <div class="h4 p16">
      TAP News
    </div>
      <ul>
        <li v-for="blogPostEntry in blogEntries">
        <a :href="`/posts/${blogPostEntry.slug}`">{{ blogPostEntry.data.title }}</a> &nbsp;
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
</script>

<style scoped>
</style>
