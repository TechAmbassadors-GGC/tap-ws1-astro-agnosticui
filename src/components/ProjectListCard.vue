<template>
    
        <Card
            isStacked
            isShadow
            isAnimated
            class=card-main
            >
            <div class="h4 p16">
                Recent Outreach Projects
            </div>
            <ul> <!-- order recent projects by date? -->
            <li v-for="project in projects">
            <a :href="`${base}/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{ project.data.title }}</a> &nbsp;
            {{ project.data.students.toString() }}
            </li>
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
  </script>
  
  <style scoped>
  </style>
  