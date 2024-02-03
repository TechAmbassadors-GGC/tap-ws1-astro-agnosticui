<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";
import { Input, Card, Select } from "agnostic-vue";
const search_text = ref("");
const levels = ref("");
const semester = ref([]);
const tech = ref([]);

// load blog content: news, etc.
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');  //list of projects
//Step 1 => get list of instructors in a set to avoid duplication

//Step 2 => place them in an object {value = ?, label = ?} to feed into a select option

//Insert into three select/dropdown menus

//Add onclick listener to each dropdown 
let filteredResults = new Set();


//Instructor selected, search through the list of only instructors
const filterList = ref([{ value: 'tech', label: 'Tech' }, { value: 'levels', label: 'Levels' }, { value: 'students', label: 'Student' }]);
const semesterList = ref([{value:'', label:'Any'},{value: 'fall', label:'Fall'}, {value: 'spring', label:'Spring'}, {value: 'summer', label:'Summer'}]);
// const techList = computed(()=>{
//     //let techSet = projects.map( (x) => x.data.techs).reduce( (acc, x) =>{return acc.union(new Set(x))}, new Set());
//     let techSet = new Set();
//     projects.forEach(element =>{
//         techSet.add(element.data.techs);
//     });

//     return techSet;
// });

// const levelOptions = computed(()=>{
//     let levelSet = new Set();
//     projects.forEach(element =>{
//     element.data.levels.forEach(level =>{
//         levelSet.add(level);
//     });
//   });
// return Array.from(levelSet).map(level => ({value:level, label:level}));
// }); 

function createOptions(x){
    let optionSet = new Set();
    projects.forEach(arrayContainer =>{
        arrayContainer.data[x].forEach(element =>{
            optionSet.add(element);
        });
    });
    return Array.from(optionSet).map(option =>({value:option, label:option}));
}

// //const techOptions = Array.from(techList.value).map(tech => ({value:tech, label:tech}));
const levelOptions = computed(() => createOptions("levels") );
const techOptions = computed(() => createOptions("techs"));


//const filtering = computed(filterBy(selectedOption.value));

// function filterBy(selectedOption) {
//     //looping through the project list to get
//     if (selectedOption == '') {
//         return
//     } else {
//         projects.forEach(element => {
//             let filterResults = element.data.selectedOption;
//             console.log(selectedOption);
//             for (let iterator of filterResults) {
//                 filteredResults.add(iterator);
//             }
//             return filteredResults;
//         });
//     }


// }


function matches(project) {
    //semester: consider this as ref variable 
    let isMatch = false;
    if(search_text.value || semester.value!=''){   //If Fall semester
        console.log(semester.value);

        //check filters (dropdown menus)
        //if dropdown value does not match with project data, it fails match immediately
        if(semester.value != '' && !semester.value.includes(project.data.semester)){
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
            project.data.techs.some(tech => tech.includes(searchText))
            ){
            return true;
        }else{
            return false;
        }


    }
    //otherwise, always return true

    //check if the semester value matches the project.data.semester value
    // if(semester.value.includes(project.data.semester)){
    //     return true;
    // }else{
    //     return false;
    // }
    //only false if parameters are set  and do es notma tch

    //tech
    return true;
    //check for case sensitivity

    // return (!search_text.value) || project.data.levels.includes(search_text.value.toLowerCase()) || project.data.semester==search_text.value
    //  || project.data.techs.includes(search_text.value);
}
</script>
<template>
    <div>

    
    <section class="mbe40">

        <Input id="7" is-underlined is-underlined-with-background placeholder="Enter project name, student, technology…"
            label="Search for projects" type="text" v-model="search_text" />

        
        <div>
            <div>
                <label>Semester</label>
                <Select name="semester" unique-id="sem" @selected="(value) => { semester = value }" 
                    label-copy="Select a semester to filter results" 
                    :options="semesterList" :is-multiple="true" :multiple-size="3"></Select>
            </div>
            <div>
                <label>Tech:</label>
                <Select name="tech" unique-id="tec" :options="techOptions">
                    <!-- <option v-for="tech in techOptions" :value="tech" :label-copy="tech"></option> -->
                    <!-- <option v-for="tech in techList.value" :value="tech.value">{{ tech.value }}</option> -->
                </Select>

            </div>
            <div>
                <label>Levels:</label>
                <Select name="level" unique-id="lev" :options="levelOptions">
                
                </Select>
               
            </div>
        </div>
        

    </section>

    <h3> {{ (search_text ? `Projects that contain: "${search_text}"` : 'All Projects') + 
            (semester.length > 0 ? ` in ${semester} semester(s)` : "") }}</h3>

    <section class="mbe40 project-cards-flex flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">
        <template v-for="project in projects">  <!--Unfiltered*-->
            <Card css="card-project" isStacked  isShadow v-if="matches(project)">
                <a :href="`/projects/${project.data.year}/${project.data.semester}/${project.data.id}`">{{
                    project.data.title }}</a> &nbsp;
                {{ project.data.students.toString() }}
            </Card>
        </template>
    </section>
    </div>
</template>
  
  
  
<style scoped></style>
  