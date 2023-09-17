<script lang="ts">
	import Link from "./Link.svelte";

    export let hashtag: string;
</script>

<Link prefix="#" href={`https://twitter.com/search?q=%23${hashtag}`}>{hashtag}</Link> - <slot />