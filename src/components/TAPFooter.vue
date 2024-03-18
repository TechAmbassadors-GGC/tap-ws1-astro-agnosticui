<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Footer, FooterNav, FooterNavItem, Menu } from "agnostic-vue";
import { Icon } from "agnostic-react";

</script>
<template>  
  <Footer isContentEnd>

    <template v-slot:footernav>
      <FooterNav css="header-mbe16">
        <FooterNavItem>
          <Menu id="menu-Home" menuTitle="Home" :isBordered="true" type="simple" >
            <template #menuitem-1>HOME</template>
            <template #menuitem-people>EVENTS </template>
            <template #menuitem-2>AWARDS</template>
            <template #menuitem-3><a href="">PROJECTS</a></template>            
            <template #menuitem-4><a href="">PUBLICATIONS</a></template>            
            <template #menuitem-6><a href="https://www.ggc.edu/academics/school-of-science-and-technology/research-internships-service-learning/technology-ambassador-program/tap-application">APPLY</a></template>            

            <template #icon>&#9662;</template>
          </Menu>
        </FooterNavItem>
        <FooterNavItem>
         <!-- social media icons -->
        </FooterNavItem>
      
        <FooterNavItem>
          
        </FooterNavItem>
      </FooterNav>
    </template>
  </Footer>
   
</template>