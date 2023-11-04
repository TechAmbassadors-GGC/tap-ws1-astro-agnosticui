<template>
  <section class="flex flex-column items-start">
    <div class="h4 mbe16">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3
    </div>
    <p className="mbe16">This new example signup form uses <a
        href="https://www.npmjs.com/package/agnostic-vue"
        target="_blank"
      >agnostic-vue</a> for the UI primitives, and <a
        href="https://vestjs.dev/"
        target="_blank"
      >Vest</a> for the form validation.</p>
    <Card
      css="card-demo"
      isStacked
      isShadow
    >
    <h3 class="p16">
				TAP News
			</h3>
			<div class="p16 flex-grow-1 flex-shrink-1" style="flex-basis: 50ch;" >
				<ul>
					<li v-for="blogPostEntry in blogEntries">
					<a :href="`/posts/${blogPostEntry.slug}`">{{ blogPostEntry.data.title }}</a> &nbsp;
					<time datetime={{ blogPostEntry.data.publishedDate.toISOString() }}>
						{{ blogPostEntry.data.publishedDate.toDateString() }}
					</time>
					</li>
				</ul>
			</div>
    </Card>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Card, Input, InputAddonItem, Button, ChoiceInput } from "agnostic-vue";
import EyeClosed from "./vue/icons/EyeClosed.vue";
import EyeOpen from "./vue/icons/EyeOpen.vue";
import suiteVue from "./vue/suiteVue";

// load blog content: news, etc.
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('posts');

const passwordVue = ref("");
const usernameVue = ref("");

const log = (message, extra) => {
  console.log(message, extra);
};

let touched = {
  tosVue: false,
  usernameVue: false,
  passwordVue: false,
  confirmVue: false,
};

let formState = {};
let result = ref(null);
result.value = suiteVue.get();
let checked = [];

const checkboxOptions = [
  {
    name: "tosVue",
    value: "tosVue",
    label: "I have read and agree to the terms of service.",
  },
];

const validate = (fieldName) => {
  console.log("validate");
  if (touched[fieldName]) {
    result.value = suiteVue(formState, fieldName);
    result.value.done((res) => {
      result.value = res;
    });
  }
};

const updateState = (fieldName, value) => {
  formState[fieldName] = value;
};

/**
 * Blurring field makes it "touched" and candidate for validation
 */
const handleBlur = (name) => {
  console.log("handleBlur name: ", name);
  if (touched[name] === false) {
    touched[name] = true;
    // First time this field is considered "touched" e.g. user just tab'd or clicked out
    // of the field. As such, we now need to validate said field for the first time!
    validate(name);
  }
};

const handleCheckbox = (checkedItems) => {
  console.log("checkedItems: ", checkedItems);
  // Since often user will simply click (not TAB then SPACE select
  // checked) we consider any interaction w/checkbox as now "touched"
  touched.tosVue = true;
  checked = [];
  formState.tosVue = false;
  if (checked.length) {
    formState.tosVue = true;
    checked = ["tosVue"];
  }
  updateState("tosVue", !!checkedItems.length);
  validate("tosVue", !!checkedItems.length);
};

const handleChange = (name, ev) => {
  const value = ev.target.value;
  updateState(name, value);
  validate(name);
};

let textIsVisible = ref(false);
const toggleTextVisibility = () => {
  console.log(
    "textIsVisible textIsVisible.value before: ",
    textIsVisible.value
  );
  textIsVisible.value = !textIsVisible.value;
  console.log("textIsVisible textIsVisible.value after: ", textIsVisible.value);
};

let textIsVisibleConfirm = ref(false);
const toggleTextVisibilityConfirm = () => {
  textIsVisibleConfirm.value = !textIsVisibleConfirm.value;
};

const handleSubmit = (e) => log("handleSubmit called...", e);
</script>
<style scoped>
form {
  width: 80%;
}
.password-eye-btn :global(svg) {
  color: var(--neutral-x-dark);
}
.password-eye-btn {
  opacity: 75%;
  transition: opacity var(--agnostic-timing-medium);
}

.password-eye-btn:hover {
  opacity: 100%;
}
</style>
