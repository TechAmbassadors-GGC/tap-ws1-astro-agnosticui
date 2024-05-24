<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";

// Remove single slash as it causes double slashes in card
const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;

const projectProp = defineProps({
        item: Object
    });

// Logos
let imageLogoLight = projectProp.item.data.imageLogoLight?.src;
const imageLogoDark = projectProp.item.data.imageLogoDark ? projectProp.item.data.imageLogoDark.src : imageLogoLight;
imageLogoLight = imageLogoLight ? imageLogoLight : imageLogoDark; // in case only dark is provided

</script>

<template>
    <Card css="projectCard" isShadow>
        
        <img :src="imageLogoLight" alt="Project Image" class="projectImage imageLight">
        <img :src="imageLogoDark" alt="Project Image" class="projectImage imageDark">

        <div class="projectText">                        
            <h4 class="projectTitle"><a :href="`/projects/${item.data.year}/${item.data.semester}/${item.data.id}`">{{ item.data.shortTitle ? item.data.shortTitle : item.data.title }}</a></h4>

            {{item.data.desc}}

            <p><em>Techs:</em> {{ item.data.techs.join(", ") }}</p>
            
            <p>{{ item.data.semester.charAt(0).toUpperCase() + item.data.semester.slice(1) }} {{ item.data.year }}</p>

            <p><a href="`${item.data.github}`">Github link</a></p>
        </div>
    </Card>
</template>


<style scoped>
.projectImage {
    /*float: left;*/
    margin-right: 1em;
    width: var(--project-logo-width);
}

.projectText {
    text-align: left; /* or justify? */
    width: calc(100% - var(--project-logo-width) - 1em);
}

.projectText p {
    margin-top: 1em;
}

.projectTitle {
    text-align: center;
}

.projectCard {
  min-width: 30rem !important;
  max-width: 40rem;
  margin: 0.5em;
  padding: 1em 1em 1em;
  flex: 1;
  background-color: var(--agnostic-gray-mid);
}

.projectCard h4 {
    margin-bottom: 0.5em;
}

/* Only show light or dark image based on browser option */
.imageDark {
    display: none;
  }
  .imageLight {
    display: block;
  }
@media (prefers-color-scheme: dark) {
  .imageDark {
    display: block;
  }
  .imageLight {
    display: none;
  }
}


</style>

// Export the Card components for each project
export { Card };
