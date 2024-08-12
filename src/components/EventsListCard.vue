<template>
    
    <div class= card-main >
        <Card
            isStacked
            isShadow
            isAnimated

            >
            <div class="h4 p16">
                Recent Events
            </div>
            <ul> <!-- order recent projects by date? -->
            <li v-for="event in events">
            <a :href="`${base}/events/${event.data.year}/${event.data.month}/${event.data.day}`">{{ event.data.title }}</a> &nbsp;
            {{ event.data.date.toString() }}
            </li>
            </ul>
        </Card>
    </div>
    
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  // Components CSS
  import "agnostic-vue/dist/index.css";
  import { Card } from "agnostic-vue";
  
  // load blog content: news, etc.
  import { getCollection } from 'astro:content';
  const projects = await getCollection('events');
  // Remove single slash as it causes double slashes in card
  const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;


// Where we get info: 


//Call some api   => go link => get event information

//Add new event



  </script>
  
  <style scoped>
  </style>
  