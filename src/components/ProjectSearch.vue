<script setup>
    import { computed, ref } from "vue";
    // Components CSS
    import "agnostic-vue/dist/index.css";
    import "agnostic-vue/dist/common.min.css";
    import { Input, Card, Select } from "agnostic-vue";
    const search_text = ref("");
  
    // load blog content: news, etc.
    import { getCollection } from 'astro:content';
    const projects = await getCollection('projects');  //list of projects
    //Step 1 => get list of instructors in a set to avoid duplication

    //Step 2 => place them in an object {value = ?, label = ?} to feed into a select option

    //Insert into three select/dropdown menus

    //Add onclick listener to each dropdown 
    let projectInstructor = new Set();
    //console.log(projects);
    //To make sure non-duplicated instructos are included
    projects.forEach(element => {
        let instructors = element.data.instructors;
        for(let instructor of instructors){
            projectInstructor.add(instructor);
        }
       
    });
   console.log(projectInstructor);
    // returns true if no search string or project mathes
    function matches(project) {
        // TODO: search in more project fields: students, instructors, tech, levels, etc

        //check for case sensitivity
        return (! search_text.value ) || project.data.title.includes(search_text.value) || project.data.students.includes(search_text.value) 
        || project.data.instructors.includes(search_text.value) || project.data.tech.includes(search_text.value) || project.data.levels.includes(search_text.value);
    }

</script>
<template>

    <section class="mbe40"> 
        
        <Input  id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…" 
                label="Search for projects" type="text" v-model="search_text" />

                <!--list of objects ==> objects[value, label]-->
        <!-- <Select :options="projectInstructor">Hi </Select>
        <Select></Select>
        <Select></Select> -->

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
                <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{ project.data.title }}</a> &nbsp;
                {{ project.data.students.toString() }}
            </Card>
        </template>
    </section>
    
  </template>
  
  
  
  <style scoped>
  </style>
  