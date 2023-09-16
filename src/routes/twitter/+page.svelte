<script lang="ts">
	import Handle from "$lib/Handle.svelte";
	import Link from "$lib/Link.svelte";
</script>

<h1 class="text-3xl">eimiko on twitter.com</h1>
<div class="w-full">
    <div class="self-start m-8">
        <h2 class="text-2xl">hashtags</h2>
        <ul class="list-disc list-inside ml-4">
            <li><Link prefix="#" href="https://twitter.com/search?q=%23eimiko">eimiko</Link> - general ship stuff</li>
            <li><Link prefix="#" href="https://twitter.com/search?q=%23eimikoweek">eimikoweek</Link> - eimiko week 2022</li>
            <li><Link prefix="#" href="https://twitter.com/search?q=%23eimikoweek2023">eimikoweek2023</Link> - eimiko week 2023</li>
            <li><Link prefix="#" href="https://twitter.com/search?q=%23yaemiko">yaemiko</Link> - yae miko only</li>
            <li><Link prefix="#" href="https://twitter.com/search?q=%23raidenshogun">raidenshogun</Link> - ei only</li>
        </ul>

        <h2 class="text-2xl">artists <span class="text-sm">not exclusively eimiko</span></h2>
        <p class="text-sm">holy moly art !?</p>
        <ul class="list-disc list-inside ml-4 grid grid-cols-1 md:grid-cols-2">
            <li><Handle handle="Cloud_Faramore" /></li>
            <li><Handle handle="OnkiOnku" /></li>
            <li><Handle handle="arlelsa" /></li>
            <li><Handle handle="eimikodoodles" /></li>
            <li><Handle handle="lapiecelazuli" /></li>
            <li><Handle handle="Kiwi393939" /></li>
            <li><Handle handle="_pepeart" /></li>
            <li><Handle handle="AlieLerArt" /></li>
            <li><Handle handle="ryuichikung" /></li>
            <li><Handle handle="isayoun" /></li>
            <li><Handle handle="Beiyi_" /></li>
        </ul>
        <p>if you are on this list and you dont wanna be (or you want to be on this list and you arent) <a class="underline" href="https://github.com/HazelTheWitch/eimiko.gay/issues/new?assignees=HazelTheWitch&labels=&projects=&template=handle-add-remove-request.md&title=%5BAdd%2FRemove%5D" target="_blank" rel="noreferrer noopener">let me know on github</a></p>
    </div>
</div>
