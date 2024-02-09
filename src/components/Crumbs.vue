
<script setup>

// Import of AugnosticUI global common and its CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import Breadcrumb from "./vue/Breadcrumb.vue";
// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router);

// const Home = { template: '<div>TAP</div>' }
// const Projects = { template: '<div>Projects</div>' }

// const router = new Router({
//     routes:[
//         {
//             path: '/',
//             component: Home
//         },
//         {
//             path: '/projects',
//             component: Projects
//         }
//     ]
// })

// export default {
//     goBack() {
//         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
//     }
// }

const trailOfTAPSite = [
    {
        label: "first page",
        url: "/localhost:4321",
    },
    {
        label: "second page",
        url: "/projects",
    },
    {
        label: "third page",
        url: "#foo",
    }
];

</script>

<template>
    <h2>Breadcrumbs</h2>
    <div class="mbs24 mbe16">
        <Breadcrumb type="slash" :routes="trailOfTAPSite" />
        <Breadcrumb :routes="[{label: 'First', url: '/'}, { label: 'Second', url: '#bar' }]" />
    </div>
</template>

<!-- <template>
  <div id="app">
    <h1>Hello App!</h1>
    <p> -->
      <!-- <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>

    <router-view></router-view>
  </div>
</template> -->