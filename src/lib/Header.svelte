<script lang="ts">
    import { Link } from "lucide-svelte";

    function copy_url() {
        navigator.clipboard.writeText(document.URL);
    }
</script>

<a class="font-bold underline my-4 mx-8 text-4xl" href="/">eimiko.gay</a>
<div class="my-4 mx-8 text-4xl justify-self-center">🦊🍡</div>
<button on:click={copy_url} title="copy permalink" class="my-4 mx-8 text-4xl justify-self-end"><Link /></button>