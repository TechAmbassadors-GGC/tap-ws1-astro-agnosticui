<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem, Menu } from "agnostic-vue";
</script>
<template>  
  <Header isHeaderContentEnd>
    <template v-slot:logoleft>
      
      <a class="flex-fill" href="/" >TAP</a>

    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
        <HeaderNavItem>
         
          <a href="projects">Search Outreach Projects</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Join the discussion</a>
        </HeaderNavItem>
      
        <HeaderNavItem>
          <Menu id="menu-Home" menuTitle="Home" :disabledItems="['menuitem-1', 'menuitem-2', 'menuitem-people']" :isBordered="true" type="simple" >
            <template #menuitem-1>About</template>
            <template #menuitem-people>Projects</template>
            <template #menuitem-2>Awards</template>
            <template #menuitem-3><a href="">Apply</a></template>            
            <template #icon>&#9662;</template>
          </Menu>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header>
   
</template>