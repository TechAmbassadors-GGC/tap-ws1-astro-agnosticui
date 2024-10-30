<script setup>
import { computed, ref } from 'vue';
import { Input, Select } from 'agnostic-vue';
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";

import FacultyCard from "./FacultyCard.vue";

// Props to receive the faculty collection data
const props = defineProps({
    facultyList: Object, 
    filter: Object
});

// Reactive references for search inputs
const faculties = props.facultyList || []; 
const search_text = ref("");
const Name =  props.filter?.name ? ref([props.filter.name]) : ref(['Any']);
const ProjectList = props.filter?.projectList ? ref([props.filter.projectList]) : ref(['Any']);

// Generate unique options for the project dropdown based on projectList
function createOptions(faculties,x) {
    let optionSet = new Set();
    optionSet.add("Any");
    students.forEach(arrayContainer => {
        if (Array.isArray(arrayContainer.data[x])) {
            arrayContainer.data[x].forEach(element => {
                optionSet.add(element);
            });
        } else {
            optionSet.add(arrayContainer.data[x]);
        }
    });
    return Array.from(optionSet).map(option => ({ value: option, label: option }));
}
// Generate options for dropdowns
const nameOptions = createOptions(faculties, "name"); 
const projectOptions = createOptions(faculties, "projectList");

// Filter faculty based on name and projectList
function matches(faculty) {
    let isMatch = false;
    // Check if any filter is active (search text or dropdowns)
if (search_text.value || Name.value != 'Any' || ProjectList.value != 'Any') {
if (Name.value != 'Any' && !Name.value.includes(faculty.data.name.toString())) {
    return false;
}
if (ProjectList.value != 'Any' && !ProjectList.value.some(ProjectList => faculty.data.projectList.includes(ProjectList))) {
    return false;
}

let searchText = search_text.value.toLowerCase();

// If no search text is provided, pass the filtering based on dropdown values
if (searchText == '') {
    return true;
} else {
    // Check if student matches the search text (by name, projects, etc.)
    if (
        faculty.data.name.toString().includes(searchText) ||
        faculty.data.projectList.some(ProjectList => ProjectList.tolowerCase().includes(searchText))
    ) {
        return true;
    } else {
        return false;
    }
}
}

// If no filters are active, return true
return true;
}

// Compute filtered students based on matching criteria
const filteredFaculties = computed(() => {
    return faculties.filter(faculty => matches(faculty));
});
const base = import.meta.env.BASE_URL;

</script>

<template>
    <div>
        <section class="mbe40">

            <!-- Input for searching faculty -->
            <Input id="faculty-search" is-underlined is-underlined-with-background 
                placeholder="Enter faculty name..." 
                label="Search for faculty" 
                type="text" 
                v-model="search_text" />

            <!-- Filter dropdowns -->
            <div class="faculty-filter-container">

                <!-- Name Filter -->
                <div class="faculty-filter-dropdown">
                    <label>Name:</label>
                    <Select 
                        unique-id="names" 
                        :options="nameOptions" 
                        :is-multiple="true" 
                        :multiple-size="3" 
                        @selected="(value) => { name.value = value }">
                    </Select>
                </div>
                
                <!-- Project Filter -->
                <div class="faculty-filter-dropdown">
                    <label>Related Projects:</label>
                    <Select 
                        unique-id="projects" 
                        :options="projectOptions" 
                        :is-multiple="true" 
                        :multiple-size="3" 
                        @selected="(value) => { projectList.value = value }">
                    </Select>
                </div>

                <!-- Reset Button -->
                <div class="faculty-filter-dropdown">
                    <a :href="`${base == '/' ? '' : base}/faculties`">
                        <Button mode="primary" isRounded>Reset</Button>
                    </a>
                </div>
            </div>

        </section>

        <!-- Display selected or all faculty -->
        <h3>{{ ((search_text|| !name.includes('Any')|| projectList.includes('Any')) ? 
            `Filtered Faculty` : 'All Faculty') }} ({{ filteredFaculties.length }})</h3>

        <!-- Display Faculty Cards for filtered faculty -->
        <section class="mbe40 faculty-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">
            <template v-for="faculty in filteredFaculty" :key="faculty.data.id">
                <FacultyCard :item="faculty" />
            </template>
        </section>
    </div>
</template>


<style scoped>
.faculty-cards-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Adjust gap between cards */
}

.faculty-filter-container {
    justify-content: space-around;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
.faculty-filter-dropdown {
    min-width: 10rem !important;
    max-width: 15em;
    padding: 1em;
    flex: 1;
}
</style>