<template>

    <section class="mbe40"> 
        
        <Input  client:load id="7" is-underlined is-underlined-with-background placeholder="Enter name…" 
                label="Search for projects" type="text" />

    </section>

    <section class="mbe40"> Found Projects 
        <Card
            css="card-demo"
            isStacked
            isShadow
            v-for="project in projects"
            >
            <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{ project.data.title }}</a> &nbsp;
            {{ project.data.students.toString() }}
        </Card>

    </section>
    
  </template>
  
  <script setup>
    import { computed, ref } from "vue";
    // Components CSS
    import "agnostic-vue/dist/index.css";
    import "agnostic-vue/dist/common.min.css";
    import { Input, Card } from "agnostic-vue";
    const message = ref("");
  
    // load blog content: news, etc.
    import { getCollection } from 'astro:content';
    const projects = await getCollection('projects');
  </script>
  
  <style scoped>
  </style>
  