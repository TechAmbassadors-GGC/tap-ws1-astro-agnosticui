
<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img width="24" height="24" src="/assets/Vue-icon.svg" alt="Vue logo" class="mie12" />Events Calendar
    </div>
    <Table :rows="rows" :headers="headers" :isHoverable="true" caption="My caption test" />
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";
// load blog content: news, etc.
import { getCollection } from 'astro:content';


const events = await getCollection('events');
events.forEach(event => {
  console.log(event.data.title);
})

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let monthName = date.toLocaleString('default', { month: 'long' });
let day = date.toLocaleString('default', { weekday: 'long' });
let dayNum = date.getDay();




var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createRow = (date, events) => ({
  date,
  events,

});

//get event for a specific day
let currEvent = "No Event Scheduled";

let rows = [];

//find a way to change eventDate to actual human Date for comparison

for(let i = dayNum; i<dayNum+7; i++){

  //if currentDate == the date inside the events list

  //then change the value of currEvent = event.data.title
  //currEvent = title ;
  rows.push(createRow(`${days[i]} ${date.getUTCDate()+i}`, currEvent));
  }


  
//for loop from current date till (currentDate + 7)
 

  // createRow("Sunday", "No Event Scheduled"),
  // createRow(
  //   "Monday", "No Event Scheduled"
  // ),
  // createRow("Tuesday", "No Event Scheduled"),
  // createRow("Wednesday", "No Event Scheduled"),
  // createRow("Thursday", "No Event Scheduled"),
  // createRow(
  //   "Friday", "No Event Scheduled"
  // ),
  // createRow("Saturday", "No Event Scheduled"),


const headers = [
  {
    label: "Upcoming Events",
    key: "day",
    width: "35%",
    sortable: true,
  },
  {
    label: `${monthName} ${year}`,
    key: "event",
    width: "65%",
  },
];
</script>