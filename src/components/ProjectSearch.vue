<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";
import { Input, Card, Select } from "agnostic-vue";
const search_text = ref("");
const level = ref(['Any']);
const semester = ref(['Any']);
const tech = ref(['Any']);
const duration = ref(['Any']);
const difficulty = ref(['Any']);

// Component Imports
import ProjectCard from "./ProjectCard.vue";

// load content from props
const props = defineProps({
        projectList: Object
    });
const projects = props.projectList;

//Step 1 => get list of instructors in a set to avoid duplication
//Step 2 => place them in an object {value = ?, label = ?} to feed into a select option
//Insert into three select/dropdown menus
//Add onclick listener to each dropdown
//Instructor selected, search through the list of only instructors

// Semester list constant
const semesterList = ref([{value:'Any', label:'Any'},{value: 'fall', label:'Fall'}, {value: 'spring', label:'Spring'}, {value: 'summer', label:'Summer'}]);

function createOptions(projects, x) {
    let optionSet = new Set();
    //Add default option
    optionSet.add("Any");
    projects.forEach(arrayContainer =>{
        if(Array.isArray(arrayContainer.data[x])){
            arrayContainer.data[x].forEach(element =>{
            optionSet.add(element);
        });
        }else{
            optionSet.add(arrayContainer.data[x]);
        }
        
    });
    return Array.from(optionSet).map(option =>({value:option, label:option}));
}

const levelOptions = createOptions(projects, "levels");
const techOptions = createOptions(projects, "techs");
const durationOptions = createOptions(projects, "durationMins");
const difficultyOptions = createOptions(projects, "difficulty");

function matches(project) {
    //semester: consider this as ref variable 
    let isMatch = false;
    if(search_text.value || semester.value!='Any' || level.value!='Any' || tech!== 'Any' || duration.value != 'Any' || difficulty.value !== 'Any'){   //If Fall semester

        //check filters (dropdown menus)
        //if dropdown value does not match with project data, it fails match immediately
        if(semester.value != 'Any' && !semester.value.includes(project.data.semester)){
            return false;
        }
        if(level.value != 'Any' && !level.value.some(level => project.data.levels.includes(level))){
            return false;
        }
        if(tech.value != 'Any' && !tech.value.some(tech => project.data.techs.includes(tech))){
            return false;
        }
        //duration.value is an array contains String values. project.data.durationMins contains Number values
        if(duration.value != 'Any' && !duration.value.some(durationString => project.data.durationMins.some(durationNumber => durationString == String(durationNumber)))){
            return false;
        }
        if(difficulty.value != 'Any' && !difficulty.value.some(diff => project.data.difficulty.includes(diff))){
            return false;
        }
        let searchText = search_text.value.toLowerCase();
        
        //if no search Text, then return true;
        
        //actual filtering
        //Now if it passes the search filter, it passes immediately
        if(searchText == ''){
            return true;
        }else
        if(
            project.data.title.toLowerCase().includes(searchText) ||
            project.data.levels.some(level => level.includes(searchText)) ||
            project.data.semester == searchText ||
            project.data.techs.some(tech => tech.includes(searchText))||
            project.data.instructors.some(inst => inst.toLowerCase().includes(searchText))||
            project.data.students.some(stu => stu.toLowerCase().includes(searchText))
            ){
            return true;
        }else{
            return false;
        }
    }
    //otherwise, always return true
    return true;  
}
</script>
<template>
    <div>
    
    <section class="mbe40">

        <Input id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…"
            label="Search for projects" type="text" v-model="search_text" />
        
        <div class="project-filter-container">
            <div class="project-filter-dropdown">
                <label>Semester</label>
                <Select name="semester" unique-id="sem" @selected="(value) => { semester = value }" 
                    label-copy="Select a semester to filter results" 
                    :options="semesterList" :is-multiple="true" :multiple-size="3"></Select>
            </div>
            <div class="project-filter-dropdown">
                <label>Tech:</label>
                <Select unique-id="tec" :options="techOptions" :is-multiple="true" :multiple-size="3" @selected="(value) => { tech = value }">
                </Select>

            </div>
            <div class="project-filter-dropdown">
                <label>Levels:</label>
                <Select unique-id="lev" :options="levelOptions" :is-multiple="true" :multiple-size="3" @selected="(value) => { level = value }">
                </Select>
            </div>

            <div class="project-filter-dropdown">
                <label>Difficulty:</label>
                <Select unique-id="dif" :options="difficultyOptions" :is-multiple="true" :multiple-size="3"  @selected="(value) => { difficulty = value }">
                </Select>
            </div>

            <div class="project-filter-dropdown">
                <label>Duration:</label>
                <Select unique-id="dur" :options="durationOptions" :is-multiple="true" :multiple-size="3" @selected="(value) => { duration = value }">
                </Select>
            </div>
        </div>        

    </section>

    <h3> {{ ((search_text || !semester.includes('Any') || !level.includes('Any') || !tech.includes('Any') || !duration.includes('Any') || !difficulty.includes('Any')) ? 
            `Selected projects` : 'All Projects') }}</h3>

    <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">
        <template v-for="project in projects">  <!-- Unfiltered* -->
        
            <ProjectCard :item = "project" v-if="matches(project)"/>

            <!-- img :src="`${project.data.image.src}`" alt="Project Image" v-if="matches(project)" -->

            <!-- <Card css="card-project" isStacked  isShadow v-if="matches(project)">
                <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{
                    project.data.title }}</a> &nbsp; 

                {{ project.data.students.toString() }} &nbsp;

                <img :src="`${project.data.image.src}`" alt="Project Image">
            </Card> -->
        </template>
    </section>


    </div>
</template>  
  
<style scoped>
.project-filter-container {
    justify-content: space-around;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
}
.project-filter-dropdown {
    /* apply grid and flex here */
    min-width: 10rem !important;
    max-width: 20em;
    margin: 0 auto;
    padding: 1em;
    flex: 1;
}
</style>  