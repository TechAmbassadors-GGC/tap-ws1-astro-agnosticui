import "agnostic-react/dist/common.min.css";
import "agnostic-react/dist/esm/index.css";
import { Table  } from "agnostic-react";

<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img width="24" height="24" src="/assets/Vue-icon.svg" alt="Vue logo" class="mie12" />Vue 3 Close
    </div>
    <Table :rows="rows" :headers="headers" :isHoverable="true" caption="My caption test" />
  </section>
</template>

<script setup>
// Components CSS
import "agnostic-vue/dist/index.css";
import { Table } from "agnostic-vue";

const createRow = (date, events) => ({
  date,
  events,

});

const rows = [
  createRow("Sunday", "No Event Scheduled"),
  createRow(
    "Monday", "No Event Scheduled"
  ),
  createRow("Tuesday", "No Event Scheduled"),
  createRow("Wednesday", "No Event Scheduled"),
  createRow("Thursday", "No Event Scheduled"),
  createRow(
    "Friday", "No Event Scheduled"
  ),
  createRow("Saturday", "No Event Scheduled"),
];

const headers = [
  {
    label: date,
    key: "day",
    width: "35%",
    sortable: true,
  },
  {
    label: Month, year,
    key: "event",
    width: "65%",
  },
];
</script>