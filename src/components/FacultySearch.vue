<script setup>
import { computed, ref } from 'vue';
import { Input, Select } from 'agnostic-vue';
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";

import FacultyCard from "./FacultyCard.vue";

// Props to receive the faculty collection data
const props = defineProps({
    facultyList: Array,  // Array of faculty objects
    filter: Object
});

// Reactive references for search inputs
const searchName = ref("");
const selectedProject = ref("Any");

// Generate unique options for the project dropdown based on projectList
const projectOptions = computed(() => {
    const projectSet = new Set(["Any"]);
    props.facultyList.forEach(faculty => {
        if (Array.isArray(faculty.projectList)) {
            faculty.projectList.forEach(project => projectSet.add(project));
        }
    });
    return Array.from(projectSet).map(project => ({ value: project, label: project }));
});

// Filter faculty based on name and projectList
function matches(faculty) {
    const nameMatch = !searchName.value || faculty.name.toLowerCase().includes(searchName.value.toLowerCase());
    const projectMatch = selectedProject.value === "Any" || (faculty.projectList && faculty.projectList.includes(selectedProject.value));
    return nameMatch && projectMatch;
}

// Computed property for filtered faculty
const filteredFaculty = computed(() => props.facultyList.filter(matches));
</script>

<template>
    <div>
        <section class="filter-section">

            <!-- Search input for faculty name -->
            <Input 
                placeholder="Search by name..." 
                label="Faculty Name" 
                type="text" 
                v-model="searchName" 
                is-underlined 
                is-underlined-with-background />

            <!-- Project dropdown filter -->
            <div class="project-filter">
                <label>Filter by Project:</label>
                <Select 
                    :options="projectOptions" 
                    @selected="value => { selectedProject.value = value }" 
                    unique-id="project-filter" />
            </div>
        </section>

        <!-- Display filtered faculty count -->
        <h3>{{ filteredFaculty.length }} Faculty Found</h3>

        <!-- Faculty cards for each filtered faculty member -->
        <section class="faculty-cards">
            <template v-for="faculty in filteredFaculty" :key="faculty.id">
                <FacultyCard :item="faculty" />
            </template>
        </section>
    </div>
</template>

<style scoped>
.filter-section {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
}

.project-filter {
    min-width: 10rem;
}

.faculty-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
