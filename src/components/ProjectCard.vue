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
        <div class="card-content">
            <div class="leftside-img">
                <img :src="`${item.data.image.src}`" alt="Project Image" class="project-image">
            </div>
            <div class="rightside-content">
                <a :href="`/projects/${item.data.year}/${item.data.semester}/${item.data.id}`">{{item.data.title }}</a>
                <p>{{ item.data.students.toString() }}</p>
            </div>
        </div>
    </Card>
  </template>


<style scoped>

.card-content {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Vertically center align items */
}

.leftside-img {
    margin-right: 1rem; /* Add some space between the image and content */
}

.project-image {
    width: 100px; /* Set the width of the image */
    height: auto; /* Maintain aspect ratio */
}

.rightside-content {
    flex-grow: 1; /* Allow content to grow to fill remaining space */
}
</style>

// Export the Card components for each project
export { Card };
