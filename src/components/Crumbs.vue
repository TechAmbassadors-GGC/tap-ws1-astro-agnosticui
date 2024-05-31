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
// Remove single slash as it causes double slashes in links
const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;
const TAPlink = 
    {
      label: "TAP",
      url: base,
    };


const urls = pageProp.pageUrl.split("/");

trailOfTAPSite = [ TAPlink ].concat(urls.slice(1).map( (url, index, restURLs) => { return { label: url, url: [ base ].concat(urls.slice(1, index + 2)).join('/') } }));
console.log(trailOfTAPSite); 

/*
No need for page types anymore?

if(pageProp.pageType == "projects"){
  
 trailOfTAPSite = [
    TAPlink,
    {
      label: `${urls[1]}`,
    },
  ];
}

else if(pageProp.pageType == "project"){

  trailOfTAPSite = [
    TAPlink,
    {
      label: `${urls[1]}`,
      url: `${base}/${urls[1]}`,
    },
    {
      label: `${urls[2]}`,
      url: `${base}/${urls[1]}/${urls[2]}`,
    },
    {
      label: `${urls[3]}`,
      url: `${base}/${urls[1]}/${urls[2]}/${urls[3]}`,
    },
    {
      label: `${urls[4]}`,
    },
  ];
}

else if(pageProp.pageType == "posts"){
  
  trailOfTAPSite = [
    TAPlink,
    {
      label: `${urls[1]}`,
    },
  ];
}

else if(pageProp.pageType == "post"){
  
  trailOfTAPSite = [
    TAPlink,
    {
      label: `${urls[1]}`,
      url: `${base}/${urls[1]}`,
    },
    {
      label: `${urls[2]}`,
      url: `${base}/${urls[1]}/${urls[2]}`,
    },
    {
      label: `${urls[3]}`,
      url: `${base}/${urls[1]}/${urls[2]}/${urls[3]}`,
    },
    {
      label: `${urls[4]}`,
      url: `${base}/${urls[1]}/${urls[2]}/${urls[3]}/${urls[4]}`,
    },
  ];
}
else {
  trailOfTAPSite = [
    TAPlink,
  ];
}*/
</script>

<template>
    <div id="crumb" class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
    </div>
</template>
