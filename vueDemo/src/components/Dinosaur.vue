<template>
  Name: {{ store.dinosaur.name }}
  <br />
  Description: {{ store.dinosaur.description }}
</template>


<script>
import { store } from '../store.ts';

export default {
  data() {
    return {
      store
    }
  }
}
</script>
