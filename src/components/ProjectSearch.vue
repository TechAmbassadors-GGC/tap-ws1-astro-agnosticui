<script setup>
    import { computed, ref } from "vue";
    // Components CSS
    import "agnostic-vue/dist/index.css";
    import "agnostic-vue/dist/common.min.css";
    import { Input, Card } from "agnostic-vue";
    const search_text = ref("");
  
    // load blog content: news, etc.
    import { getCollection } from 'astro:content';
    const projects = await getCollection('projects');

    // returns true if no search string or project mathes
    function matches(project) {
        // TODO: search in more project fields: students, instructors, tech, levels, etc
        return (! search_text.value ) || project.data.title.includes(search_text.value);
    }
</script>
<template>

    <section class="mbe40"> 
        
        <Input  id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…" 
                label="Search for projects" type="text" v-model="search_text" />

    </section>

    <h3> {{ search_text ? `Projects that contain: ${search_text}` : 'All Projects:' }} </h3>
    
    <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill"> 
        <template v-for="project in projects">
            <Card
                css="card-project"
                isStacked
                isShadow
                v-if="matches(project)"
                >
                <!-- TODO: add more info on the card like profs, techs, etc. -->
                <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{ project.data.title }}</a> &nbsp;
                {{ project.data.students.toString() }}
            </Card>
        </template>
    </section>
    
  </template>
  
  
  
  <style scoped>
  </style>
  