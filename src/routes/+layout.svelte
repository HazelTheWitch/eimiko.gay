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
    <meta content="summary_large_image" name="twitter:card" />
</svelte:head>

<div class="flex flex-col justify-center items-center">
    <Header />
    <main class="container flex flex-col items-center">
        <slot />
    </main>
    <Footer />
</div>
