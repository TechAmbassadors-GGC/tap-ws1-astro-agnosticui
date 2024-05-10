<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem, Menu } from "agnostic-vue";
import { Icon } from "agnostic-react";

const base = import.meta.env.BASE_URL;
</script>
<template>  
  <Header isHeaderContentEnd>
      <a href="http://www.ggc.edu/tap" >APPLY NOW</a>
      <HeaderNav >
        <HeaderNavItem>
          <!--Social Media Icons-->
        </HeaderNavItem>        
      </HeaderNav>
  </Header>
   
</template>