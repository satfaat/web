<script>
    import Navbar from "./Navbar.svelte";
    import Sidebar from "./Sidebar.svelte";
    import Main from "./Main.svelte";

    let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />
