<script setup>

// Import of AugnosticUI global common and its CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import Breadcrumb from "./vue/Breadcrumb.vue";


// Vue.use(Router);

// const home = { template: '<div>TAP</div>' }
// const projects = { template: '<div>Projects</div>' }
// const posts = { template: '<div>Posts</div>' }


//     goBack() {
//         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
//     }

const trailOfTAPSite = [
    {
      label: "TAP",
      url: "/",
    },
    {
      label: "Blog",
    }
];

</script>

<template>
    <h2>Breadcrumbs</h2>
    <div class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
    </div>
</template>