<template>
    
        <Card
            isStacked
            isShadow
            isAnimated
            class=card-main
            >
            <div class="h4 p16 card-title">
                Recent Outreach Projects
            </div>            
            <ul> <!-- order recent projects by date? -->
            <li v-for="project in projects.sort( (p1, p2) => p1.data.publishedDate < p2.data.publishedDate).slice(0,4)">
            <a :href="`${base}/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">
                {{ project.data.shortTitle ? project.data.shortTitle : project.data.title }}</a> &nbsp;
            {{ project.data.publishedDate.toLocaleDateString(undefined, date_options) }}
            </li>
            <li><a :href="`${base}/projects/`">More . . .</a></li>
            </ul>
        </Card>
    
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  // Components CSS
  import "agnostic-vue/dist/index.css";
  import { Card } from "agnostic-vue";
  
  // load blog content: news, etc.
  import { getCollection } from 'astro:content';
  const projects = await getCollection('projects');
  // Remove single slash as it causes double slashes in card
  const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;

  // Format last updated date with these options
  const date_options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  </script>
  
  <style scoped>
  </style>
  