import { defineConfig } from 'npm:vite@^4.0.4';
import vue from 'npm:@vitejs/plugin-vue';

import 'npm:vue';
import 'npm:vue-router@4';  // same as npm install vue-router@4
import 'npm:pinia';
import 'npm:@vue/test-utils@next';
import 'npm:axios'  // for api
//import 'npm:stylus';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
