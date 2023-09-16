<script lang="ts">
    export let prefix: string = "";
    export let href: string;
</script>

<a {href} target="_blank" rel="noreferrer noopener">{prefix}<span class="underline"><slot /></span></a>