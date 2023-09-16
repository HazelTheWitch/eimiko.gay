<script lang="ts">
	import Link from "./Link.svelte";

    export let handle: string;
</script>

<Link prefix="@" href={`https://twitter.com/${handle}`}>{handle}</Link>