<script lang="ts">
  let count: number = 0;
  $: doubled = count * 2;

  $: {
    console.log("the count is " + count);
    // alert("I SAID THE COUNT IS " + count);
  }

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  <!-- count is {count} -->
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<p>{count} doubled is {doubled}</p>
