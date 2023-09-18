<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
    import { page } from '$app/stores';

    import "../app.css";
</script>

<svelte:head>
    <title>eimiko.gay</title>
    <meta property="og:title" content="eimiko.gay" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:image" content="/eimiko_love.png" />
    <meta property="og:description" content="holy fucking shit i love women" />
</svelte:head>

<div class="grid grid-cols-3 grid-rows-[0fr,1fr,0fr]">
    <Header />
    <main class="container flex flex-col items-center md:col-span-1 md:col-start-2 col-span-3">
        <slot />
    </main>
    <Footer />
</div>
