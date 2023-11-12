<template>

    <section class="mbe40"> 
        
        <Input  id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…" 
                label="Search for projects" type="text" />

    </section>

    <h3> Projects Found </h3>
    <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill"> 
        <Card
            css="card-project"
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
  