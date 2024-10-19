<script setup>
import { computed, ref } from "vue";
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";
import { Input, Select } from "agnostic-vue";
import StudentCard from "./StudentCard.vue";

// Load props
const props = defineProps({
    studentList: Array, // Ensure studentList is an array
    filter: Object
});

const students = props.studentList || []; // Ensure students is an array
const search_text = ref("");
const graduationYear = props.filter?.graduationYear ? ref([props.filter.graduationYear]) : ref(['Any']);
const project = props.filter?.project ? ref([props.filter.project]) : ref(['Any']);

// Create options for dropdowns
function createOptions(students, field) {
    let optionSet = new Set();
    optionSet.add("Any");
    
    students.forEach(student => {
        if (Array.isArray(student[field])) {
            student[field].forEach(element => {
                optionSet.add(element);
            });
        } else {
            optionSet.add(student[field]);
        }
    });

    return Array.from(optionSet).map(option => ({ value: option, label: option }));
}

// Generate options for dropdowns
const yearOptions = createOptions(students, "graduationYear"); // Update this based on your metadata if necessary
const projectOptions = createOptions(students, "relatedProjectIds"); // Use relatedProjectIds for projects

// Matches function to filter students based on search criteria
function matches(student) {
    const matchesSearchText = student.name.toLowerCase().includes(search_text.value.toLowerCase());
    const matchesGraduationYear = graduationYear.value.includes('Any') || student.graduationYear === graduationYear.value[0]; // Check for graduationYear if it exists
    const matchesProject = project.value.includes('Any') || student.relatedProjectIds.includes(project.value[0]); // Check against relatedProjectIds

    return matchesSearchText && matchesGraduationYear && matchesProject;
}

// Computed property to filter students based on criteria
const filteredStudents = computed(() => {
    return students.filter(matches);
});
</script>

<template>
    <div>
        <Input v-model="search_text" placeholder="Search students..." />
        <Select v-model="graduationYear" :options="yearOptions" />
        <Select v-model="project" :options="projectOptions" />

        <div class="student-cards">
            <!-- Display StudentCards for filtered students -->
            <StudentCard 
                v-for="student in filteredStudents" 
                :key="student.id" 
                :student="student" 
            />
        </div>
    </div>
</template>

<style scoped>
.student-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Adjust gap between cards */
}
</style>
