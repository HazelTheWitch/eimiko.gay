<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";

    import "../app.css";
</script>

<div class="flex flex-col justify-center items-center">
    <Header />
    <main class="container">
        <slot />
    </main>
    <Footer />
</div>
