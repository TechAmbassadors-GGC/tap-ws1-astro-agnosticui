<template>
    <Card
        css="card-demo"
        isStacked
        isShadow
      >
      <div class="h4 p16">
        Projects
      </div>
      <div class="p16 flex-grow-1 flex-shrink-1" style="flex-basis: 50ch;" >
        <ul> <!-- order recent projects by date? -->
          <li v-for="project in projects">
          <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{ project.data.title }}</a> &nbsp;
          {{ project.data.students.toString() }}
          </li>
        </ul>
      </div>
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
  </script>
  
  <style scoped>
  </style>
  