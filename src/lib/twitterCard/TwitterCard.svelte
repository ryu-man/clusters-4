<script lang="ts">
	import type { Wallet } from '../types';
	import TwitterCardWallet from './TwitterCardWallet.svelte';
	import TwitterCardWalletPlaceholder from './TwitterCardWalletPlaceholder.svelte';

	export let name: string;
	export let wallets: Wallet[] = [];

	$: firstFourWallets = [...wallets.slice(0, 4), ...new Array(4)].slice(0, 4);
	$: restWallets = wallets.slice(4);
</script>

<div
	class="twitter-card flex gap-8 justify-between border border-[#404040] rounded-3xl bg-white/30 backdrop-blur-3xl text-white z-[1]"
>
	<div class="flex flex-col justify-between py-11 pl-14">
		<div class="image-container w-32 h-32">
			<slot />
		</div>

		<div class="flex flex-col">
			<div class="text-6xl font-bold">{name}<span class="opacity-50">/</span></div>
			<a href="https://clusters.xyz/{name}" class="text-4xl opacity-50 font-medium"
				>cluster.xyz/{name}</a
			>
		</div>
	</div>

	<div class="flex flex-col justify-between gap-5 p-4 flex-1">
		{#each firstFourWallets as wallet}
			{#if wallet}
				<TwitterCardWallet {name} {wallet} />
			{:else}
				<TwitterCardWalletPlaceholder />
			{/if}
		{/each}

		{#if restWallets.length}
			<button class="h-11 border border-white/30 text-xl opacity-50 font-medium py-2 rounded-xl"
				>and {restWallets.length} more</button>
		{/if}
	</div>
</div>

<style lang="postcss">
	.twitter-card {
		width: 700px;
		min-height: 350px;
	}

	.image-container :global(img) {
		width: 100%;
		height: 100%;
	}
</style>
