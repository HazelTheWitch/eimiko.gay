<script lang="ts">
    import { Link } from "lucide-svelte";

    function copy_url() {
        navigator.clipboard.writeText(document.URL);
    }
</script>

<div class="flex flex-row justify-between my-4 mx-8 text-4xl self-stretch">
    <a class="font-bold" href="/">eimiko.gay</a>
    <button on:click={copy_url}><Link /></button>
</div>