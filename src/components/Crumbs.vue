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

else if(pageProp.pageType == "project"){

  trailOfTAPSite = [
    {
      label: "TAP",
      url: "/",
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

// Future pages information

// else if(pageProp.pageType == "posts"){
  
//   trailOfTAPSite = [
//     {
//       label: "TAP",
//       url: "/",
//     },
//     {
//       label: `${urls[1]}`,
//     },
//   ];
// }

// else if(pageProp.pageType == "post"){
  
//   trailOfTAPSite = [
//     {
//       label: "TAP",
//       url: "/",
//     },
//     {
//       label: `${urls[1]}`,
//       url: `/${urls[1]}`,
//     },
//     {
//       label: `${urls[2]}`,
//       url: `/${urls[1]}/${urls[2]}`,
//     },
//     {
//       label: `${urls[3]}`,
//       url: `/${urls[1]}/${urls[2]}/${urls[3]}`,
//     },
//   ];
// }
// else {
//   trailOfTAPSite = [
//     {
//       label: "TAP",
//       url: "/",
//     },
//   ];
//}
</script>

<template>
    <div id="crumb" class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
    </div>
</template>
