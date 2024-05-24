<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem, Menu } from "agnostic-vue";

const base = import.meta.env.BASE_URL;
</script>
<template>  
  <Header isHeaderContentStart>
    <template v-slot:logoleft>
      
      <a class="flex-fill" :href="base" ><img :src="`${base == '/' ? '' : base}/images/tap-logo.jpg`" width="50px"></a>

    </template>
    <template v-slot:headernav>
      <HeaderNav css="header-mbe16">
        <HeaderNavItem>
          <a :href="`${base == '/' ? '' : base}/projects`">Projects</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://forum.tapggc.org" target="_blank">Forum</a>
        </HeaderNavItem>
      
        <HeaderNavItem>
          <Menu id="menu-More" menuTitle="More" :disabledItems="['menuitem-about', 'menuitem-2', 'menuitem-people']" :isBordered="true" type="simple" >
            <template #menuitem-about>About</template>
            <template #menuitem-template><a :href="`${base == '/' ? '' : base}/template`">Add project</a></template>
            <template #menuitem-apply>
              <a href="https://ggc.edu/academics/school-of-science-and-technology/research-internships-service-learning/technology-ambassador-program"
                 target="_blank">Student application</a></template>
            <template #icon>&#9662;</template>
          </Menu>
        </HeaderNavItem>
      </HeaderNav>
    </template>
  </Header>
   
</template>