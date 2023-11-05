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
          <a href="">Outreach projects</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="">Activity templates</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <Menu id="menu-about" menuTitle="About" :disabledItems="['menuitem-1', 'menuitem-2']" >
            <template #menuitem-1>History</template>
            <template #menuitem-2>Awards</template>
            <template #menuitem-3><a href="">Join</a></template>            
            <template #icon>&#9662;</template>
          </Menu>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header>
   
</template>