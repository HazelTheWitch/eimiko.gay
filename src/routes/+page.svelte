<script lang="ts">
	import Page from "$lib/Page.svelte";
</script>

<h1 class="text-3xl">welcome to <strong>eimiko.gay</strong></h1>
<p class="text-lg">i bought this domain for $3.17 and damn it im gonna use it!</p>
<div class="flex flex-col justify-center items-center">
    <img class="rounded-3xl m-4" src="/eimiko_love.png" alt="a beautiful rendition of her excellency, the almighty narukami ohosho, god of thunder and guuji yae in love">
    <p class="text-xs">this is a fucking mess holy shit</p>

    <h2 class="text-2xl mt-5">check out some pages :3</h2>

    <ol class="self-start list-disc">
        <li>
            <Page>
                <a slot="title" href="/twitter">eimiko on twitter</a>
                twitter lesbians
            </Page>
        </li>
    </ol>
</div>