<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";

// load blog content: news, etc.
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');
// Remove single slash as it causes double slashes in card
const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;



const projectProp = defineProps(
    {
        item: Object
    }
);


</script>


<template>
    <Card css="card-project" isStacked  isShadow>
        <a :href="`/projects/${item.data.year}/${item.data.semester}/${item.data.id}`">{{item.data.title }}
        </a> &nbsp; 
        
        {{ item.data.students.toString() }} &nbsp; 

        <img :src="`${item.data.image.src}`" alt="Project Image">
    </Card>
  </template>


<style scoped>
</style>

// Export the Card components for each project
export { Card };
