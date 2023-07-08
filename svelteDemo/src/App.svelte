<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Temp from "./lib/other/Temp.svelte";
  import AddNumbers from "./lib/math/AddNumbers.svelte";
  import SyntaxDemo from "./lib/SyntaxDemo.svelte";
  import MenuSet1 from "./lib/htm/menu/MenuSet1.svelte";
  import Head from "./lib/htm/head.svelte";
</script>

<Head />
<MenuSet1 />
<Temp />

<div class="card">
  <Counter />
</div>

<div class="card">
  <AddNumbers />
</div>

<SyntaxDemo />

<a href="https://svelte.dev" target="_blank" rel="noreferrer">
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
</a>
