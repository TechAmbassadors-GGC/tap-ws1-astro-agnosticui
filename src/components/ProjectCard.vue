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

// Truncate description to a fixed number of characters
const maxDescriptionLength = 100; // Adjust the length as needed
const truncatedDescription = computed(() => {
  const desc = projectProp.item.data.desc || '';
  return desc.length > maxDescriptionLength
    ? desc.substring(0, maxDescriptionLength) + '...'
    : desc;
});
</script>

<template>
    <a :href="`/projects/${item.data.year}/${item.data.semester}/${item.data.id}`" class="card-link" isShadow>
        <Card css="projectCard" isShadow>
            
            <img :src="imageLogoLight" alt="Project Image" class="projectImage imageLight">
            <img :src="imageLogoDark" alt="Project Image" class="projectImage imageDark">

            <div class="projectText">                        
                <h4 class="projectTitle">{{ item.data.shortTitle ? item.data.shortTitle : item.data.title }}</h4>

                <p class="description">{{ truncatedDescription }}</p>

                <!-- Display students as Tags -->
                <p><em>Students:</em></p>
                <div class="tag-container">
                    <span v-for="(student, index) in item.data.students" :key="index" class="tag">{{ student }}</span>
                </div>

                <!-- Display Techs as Tags -->
                <p><em>Techs:</em></p>
                <div class="tag-container">
                    <span v-for="(tech, index) in item.data.techs" :key="index" class="tag">{{ tech }}</span>
                </div>

                <p><em>Pulished:</em> {{ item.data.publishedDate}}</p>
            
                <!-- <p>{{ item.data.semester.charAt(0).toUpperCase() + item.data.semester.slice(1) }} {{ item.data.year }}</p> -->

                <!-- <p><a href="`${item.data.github}`">Github link</a></p> -->
            </div>
        </Card>
    </a>
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
  transition: transform 0.2s ease-in;
}

.projectCard:hover{
    transform: translateY(-3px);

}

.projectCard h4 {
    margin-bottom: 0.5em;
}

/* Tag Styling */
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.tag {
  display: inline-block;
  padding: 0.25em 0.75em;
  font-size: 0.875em;
  background-color: var(--agnostic-primary);
  color: var(--agnostic-btn-primary-color, var(--agnostic-light));
  border-radius: var(--agnostic-btn-radius, var(--agnostic-radius, .25rem));
  transition: background-color 0.3s ease;
}

/* Save this until we can have links for each tag */
/* .tag:hover {
  background-color: #0056b3;
} */

/* Ensure the card link covers the entire card and removes default anchor styling */
.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  pointer-events: none;
}

.card-link .projectCard {
  pointer-events: auto; /* Allow the card itself to be clickable */
}
</style>

// Export the Card components for each project
export { Card };
