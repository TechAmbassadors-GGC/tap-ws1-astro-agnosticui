<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";
import { Input, Card, Select } from "agnostic-vue";
const search_text = ref("");
const selectedOption = ref("");

// load blog content: news, etc.
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');  //list of projects
//Step 1 => get list of instructors in a set to avoid duplication

//Step 2 => place them in an object {value = ?, label = ?} to feed into a select option

//Insert into three select/dropdown menus

//Add onclick listener to each dropdown 
let filteredResults = new Set();
//console.log(projects);
//To make sure non-duplicated instructos are included

//console.log(projectInstructor);
// returns true if no search string or project mathes


//NEW GOAL: When a value is selected by the dropdown menu, it should filter by that value

//On select/click, a method is called with that (value) => filterBy(value), then it returns a list of result that our search bar can work with

//None selected, search through the massive list of data

//Instructor selected, search through the list of only instructors
const filterList = [{ value: 'instructor', label: 'Instructor' }, { value: 'techa', label: 'Tech' }, { value: 'levels', label: 'Levels' }, { value: 'studenta', label: 'Student' }];
const filtering = computed(filterBy(selectedOption.value));

function filterBy(selectedOption) {
    //looping through the project list to get
    if (selectedOption == '') {
        return
    } else {
        projects.forEach(element => {
            let filterResults = element.data.selectedOption;
            console.log(selectedOption);
            for (let iterator of filterResults) {
                filteredResults.add(iterator);
            }
            return filteredResults;
        });
    }


}
function matches(filteredResults) {
    // TODO: search in more project fields: students, instructors, tech, levels, etc

    //check for case sensitivity

    return (!search_text.value) || filteredResults.has(search_text.value);
}
</script>
<template>
    <section class="mbe40">

        <Input id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…"
            label="Search for projects" type="text" v-model="search_text" />

        <!--list of objects ==> objects[value, label]-->
        <!-- <Select :options="projectInstructor">Hi </Select>
        <Select></Select>
        <Select></Select> -->
        <Select unique-id="sel1" v-model="selectedOption" :options=filterList></Select>

    </section>

    <h3> {{ search_text ? `Projects that contain: ${search_text}` : 'All Projects:' }} </h3>

    <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">
        <template v-for="project in projects">
            <Card css="card-project" isStacked isShadow v-if="matches(filteredResults)">
                <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{
                    project.data.title }}</a> &nbsp;
                {{ project.data.students.toString() }}
            </Card>
        </template>
    </section>
</template>
  
  
  
<style scoped></style>
  