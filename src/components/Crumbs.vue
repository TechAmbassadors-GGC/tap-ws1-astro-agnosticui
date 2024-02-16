<script setup>

// Import of AugnosticUI global common and its CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import Breadcrumb from "./vue/Breadcrumb.vue";

//set up of the props for seperate pages

// create a prop that can be edited on each of the pages this component 
// is used on and then use the prop as a variable to be entered into 
// the vue 3 Breadcrumb module url parameter

const pageProp = defineProps(
  {
    pageLabel: String,
    pageUrl: String
  }
);

//bread crumb set up

const trailOfTAPSite = [
    {
      label: `${pageProp.pageLabel.split(",")[0]}`,
      url: `${pageProp.pageUrl.split(",")[0]}`,
    },
    {
      label: `${pageProp.pageLabel.split(",")[1]}`,
    }
];

</script>

<style>
/* #crumb{ */
  /* background-color: rgb(0, 0, 157); */
/* } */
</style>

<template>
    <div id="crumb" class="mbs24 mbe16">
        <h4><Breadcrumb type="slash" :routes="trailOfTAPSite" /></h4>
    </div>
</template>
