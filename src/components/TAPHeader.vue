<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem } from "agnostic-vue";
</script>
<template>  
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      <a class="flex-fill" href="/" >TAP</a>
    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
        <HeaderNavItem>
          <a href="">Outreach projects</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Activity templates</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">About</a>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header> 
</template>