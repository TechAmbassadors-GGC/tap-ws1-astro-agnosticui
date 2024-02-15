
<script setup>

// Import of AugnosticUI global common and its CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import Breadcrumb from "./vue/Breadcrumb.vue";

const trailOfTAPSite = [
    {
      label: "TAP",
      url: "/",
    },
    {
      label: "Projects",
      url: "",
    }
];

</script>

<template>
    <h2>Breadcrumbs</h2>
    <div class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
    </div>
</template>
