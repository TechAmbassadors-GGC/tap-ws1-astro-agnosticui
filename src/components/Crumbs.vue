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
    pageType: String,
    pageUrl: String,
  }
);

var trailOfTAPSite = []

const urls = pageProp.pageUrl.split("/");

if(pageProp.pageType == "projects"){
  
 trailOfTAPSite = [
    {
      label: "TAP",
      url: "/",
    },
    {
      label: `${urls[1]}`,
    },
  ];
}

if(pageProp.pageType == "project"){

  trailOfTAPSite = [
    {
      label: "TAP",
      url: `/`,
    },
    {
      label: `${urls[1]}`,
      url: `/${urls[1]}`,
    },
    {
      label: `${urls[2]}`,
      url: `/${urls[1]}/${urls[2]}`,
    },
    {
      label: `${urls[3]}`,
      url: `/${urls[1]}/${urls[2]}/${urls[3]}`,
    },
    {
      label: `${urls[4]}`,
    },
  ];
}

// if(pageProp.pageLabel == "post"){
//   const urls = pageProp.pageUrl.split("/")
//   const trailOfTAPSite = [
//     {
//       label: `${pageProp.pageLabel.split(",")[0]}`,
//       url: `/${pageProp.pageUrl.split("/")[0]}`,
//     },
//     {
//       label: `${pageProp.pageLabel.split(",")[1]}`,
//     },
//   ];
// }
</script>

<template>
    <div id="crumb" class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
    </div>
</template>
