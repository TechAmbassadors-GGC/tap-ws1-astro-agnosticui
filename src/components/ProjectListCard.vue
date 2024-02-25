<template>
    
    <div class="p16 flex-grow-1 flex-shrink-1" style="flex-basis: 40ch;" >
        <Card
            css="card-demo"
            isStacked
            isShadow
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
    </div>
    
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  // Components CSS
  import "agnostic-vue/dist/index.css";
  import { Card } from "agnostic-vue";
  
  // load blog content: news, etc.
  import { getCollection } from 'astro:content';
  const projects = await getCollection('projects');
  const base = import.meta.env.BASE_URL;
  </script>
  
  <style scoped>
  </style>
  