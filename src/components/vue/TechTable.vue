<template>
  <section class="mbe40">
    <Table :rows="rows" :headers="headers" :isHoverable="true" caption="Projects associated with technologies" />
  </section>
</template>

<script setup>
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";
import { ref, defineProps, watchEffect } from 'vue';

// Define props for tech and projects data passed to the component
const props = defineProps({
  projects: {
    type: Array,
    default: () => [], // Set a default empty array
  },
});

// Reactive rows reference
const rows = ref([]);

// Function to create a table row for each tech
const createRow = (techData) => ({
  tech: `<a href="/techs/${techData.tech}">${techData.tech}</a>` || 'No tech found', // Tech Name
  quantity: techData.count || '0', // Number of Projects with this Tech
  // Wrap each project name in an anchor tag with a link to its page
  projectNames: techData.projects
    .map(
      (project) =>
        `<a href="/projects/${project.data.year}/${project.data.semester}/${project.data.id}">${project.data.shortTitle||'Unnamed Project'}</a>`
    )
    .join(', '), // Comma-separated clickable project titles
});

// Populate rows when props.projects change
watchEffect(() => {
  rows.value = props.projects.map(createRow);
  //console.log("Rows:", rows.value); // Debugging: Log the rows to see what data is being populated
});

// Define table headers
const headers = [
  {
    label: "Technology",
    key: "tech",
    width: "20%",
    sortable: true,
    renderFn: (value) => value, // Render HTML for tech links
  },
  {
    label: "Quantity",
    key: "quantity",
    width: "10%",
    sortable: true,
  },
  {
    label: "Projects",
    key: "projectNames",
    width: "70%",
    renderFn: (value) => value, // Render HTML for project name links
  },
];
</script>
