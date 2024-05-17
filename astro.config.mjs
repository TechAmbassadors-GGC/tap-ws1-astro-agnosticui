import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import agnosticAstro from 'agnosticui-astro';
import mdx from '@astrojs/mdx';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), agnosticAstro(), mdx(), partytown()],
});
