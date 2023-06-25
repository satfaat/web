<script setup lang="ts">
import { ref } from 'vue';
import TopNavbar from './menu/TopNavbar.vue';
import NewArrivals from './NewArrivals.vue';


const count = ref(0);
const title = 'red';
const isUppercase = false;

const huge_text = 'Lore ipsum';

const link = {
  title: "Go to Google",
  url: "https://google.com",
  tabindex: 1,
  target: '_blank',
};
</script>

<script lang="ts">

export default {
  methods: {
    async fetchAdvice() {
      const response =
        await fetch('https://api.adviceslip.com/advice')
      return response.text();
    },
  },
}
</script>

<template>
  <TopNavbar />
  <NewArrivals />

  <p>{{ isUppercase ? title.toUpperCase() : title }}</p>
  <!-- <p v-once v-text="huge_text">Loading...</p> -->

  <a :href="link.url" :target="link.target" :tabindex="link.tabindex">{{ link.title }}</a>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div class="container">

    <h2>Async fetch</h2>
    <p>{{ fetchAdvice() }}</p>
    <button @click="fetchAdvice()">Learn something
      profound</button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
