<script setup>
import { computed, ref } from 'vue';
import { Input, Select, Button} from 'agnostic-vue';
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";

import FacultyCard from "./FacultyCard.vue";

// Props to receive the faculty collection data
const props = defineProps({
    instructorList: Object, 
    filter: Object
});

// Reactive references for search inputs
const instructors = props.instructorList; 
const search_text = ref("");
const name =  props.filter?.name ? ref([props.filter.name]) : ref(['Any']);
const projects = props.filter?.projects ? ref([props.filter.projects]) : ref(['Any']);

// Generate unique options for the project dropdown based on projectList
function createOptions(instructors,x) {
    let optionSet = new Set();
    optionSet.add("Any");
    instructors.forEach(arrayContainer => {
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
const nameOptions = createOptions(instructors, "name"); 
const projectOptions = createOptions(instructors, "projects");

// Filter faculty based on name and projectList
function matches(faculty) {
    let isMatch = false;
    // Check if any filter is active (search text or dropdowns)
if (search_text.value || name.value != 'Any' || projects.value != 'Any') {

    if (faculty.data?.name && name.value != 'Any' && !name.value.includes(faculty.data.name)) {
        return false;
    }
    if (faculty.data?.projects && projects.value != 'Any' && !projects.value.some(project => faculty.data.projects.includes(project))) {
        return false;
    }

    let searchText = search_text.value.toLowerCase();

    // If no search text is provided, pass the filtering based on dropdown values
    if (searchText == '') {
        return true;
    } else {
        // Check if faculty matches the search text (by name, projects, etc.)
        if (
            (faculty.data?.name && faculty.data.name.toLowerCase().includes(searchText)) ||
            (faculty.data?.desc && faculty.data.desc.toLowerCase().includes(searchText))||
            (faculty.data?.projects && faculty.data.projects.some(project => project.toLowerCase().includes(searchText)))
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
const filteredInstructors = computed(() => {
    return instructors.filter((faculty) => matches(faculty));
});
const base = import.meta.env.BASE_URL;

</script>

<template>
    <div>
        <section class="mbe40">

            <!-- Input for searching faculty -->
            <Input id="faculty-search" is-underlined is-underlined-with-background 
                placeholder="Enter faculty name, related projects..." 
                label="Search for faculty" 
                type="text" 
                v-model="search_text" />

            <!-- Filter dropdowns -->
            <div class="faculty-filter-container">

                <!-- Name Filter -->
                <div class="faculty-filter-dropdown">
                    <label>Name:</label>
                    <Select 
                        unique-id="name" 
                        :options="nameOptions" 
                        :is-multiple="true" 
                        :multiple-size="3" 
                        @selected="(value) => { name = value }">
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
                        @selected="(value) => { projects = value }">
                    </Select>
                </div>

                <!-- Reset Button -->
                <div class="faculty-filter-dropdown">
                    <a :href="`${base == '/' ? '' : base}/instructors`">
                        <Button mode="primary" isRounded>Reset</Button>
                    </a>
                </div>
            </div>

        </section>

        <!-- Display selected or all faculty -->
        <h3>{{ ((search_text|| !name.includes('Any')|| projects.includes('Any')) ? 
            `Filtered instructors` : 'All instructors') }} ({{ filteredInstructors.length }})</h3>

        <!-- Display Faculty Cards for filtered faculty -->
        <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">
            <template v-for="faculty in filteredInstructors" :key="faculty.data.id">
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