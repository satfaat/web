<script>
    import ForDemo from "./syntax/ForDemo.svelte";
    import ContactCard from "./ContactCard.svelte";
    import TodosMdn from "./todos/TodosMDN.svelte";
    import TodoInterface from "./todos/TodoInterface.svelte";
</script>


<ForDemo />

<ContactCard>
    <span slot="name"> P. Sherman </span>

    <span slot="address">
        42 Wallaby Way<br />
        Sydney
    </span>
</ContactCard>

<TodosMdn />

<!-- <TodoInterface /> -->
