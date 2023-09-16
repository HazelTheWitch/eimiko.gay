<script lang="ts">
	import Eimiko from "$lib/Eimiko.svelte";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";

    import "../app.css";
</script>

<svelte:head>
    <title>eimiko.gay</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
    <Header />
    <main class="container flex flex-col items-center">
        <slot />
    </main>
    <Footer />
</div>
