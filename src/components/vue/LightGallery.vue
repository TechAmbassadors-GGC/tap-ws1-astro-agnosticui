<template>
    <lightgalleryComp
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
      <slot ref="slot"></slot>
    </lightgalleryComp>
  </template>
  
  <script>
  
  import lightgalleryComp from 'lightgallery/vue';
  import lgThumbnail from 'lightgallery/plugins/thumbnail';
  import lgZoom from 'lightgallery/plugins/zoom';
  
  export default {
    name: 'LightGallery',
    components: {
      lightgalleryComp
    },
    data() {
      return {
        plugins: [lgThumbnail, lgZoom],
      };
    },
    mounted() {
      /*lightGallery(this.$refs.lightGallery, {
        speed: 500,
        plugins: this.plugins,
      });*/
    },
    methods: {
            onInit: () => {
                console.log('lightGallery has been initialized');
                console.log(this.$refs.slot);
            },
            onBeforeSlide: () => {
                console.log('calling before slide');
            },
        },
  };
  </script>
  
  <style scoped>
  @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
  </style>
  