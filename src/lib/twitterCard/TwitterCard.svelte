<script lang="ts">
	import type { Wallet } from '../types';
	import TwitterCardWallet from './TwitterCardWallet.svelte';
	import TwitterCardWalletPlaceholder from './TwitterCardWalletPlaceholder.svelte';

	export let name: string;
	export let wallets: Wallet[] = [];

	$: firstFourWallets = [...wallets.slice(0, 4), ...new Array(4)].slice(0, 4);
	$: restWallets = wallets.slice(4);
</script>

<div class="twitter-card flex justify-center items-center">
	<img src="/images/background.png" />
	<div
		class="twitter-card-inner z-[1] rounded-3xl bg-white/30 backdrop-blur-3xl text-white flex justify-between gap-32"
	>
		<div class="flex flex-col justify-between py-12 pl-14">
			<div class="image-container w-32 h-32">
				<slot />
			</div>

			<div class="flex flex-col">
				<div class="text-[48px] leading-[140%] font-bold">
					{name}<span class="opacity-50">/</span>
				</div>
				<a
					href="https://clusters.xyz/{name}"
					class="text-[32px] leading-[130%] opacity-50 font-medium">cluster.xyz/{name}</a
				>
			</div>
		</div>

		<div class="flex flex-col justify-center gap-5 p-4 flex-1">
			{#each firstFourWallets as wallet}
				{#if wallet}
					<TwitterCardWallet {name} {wallet} />
				{:else}
					<TwitterCardWalletPlaceholder />
				{/if}
			{/each}

			{#if restWallets.length}
				<button class="h-11 border border-white/30 text-xl opacity-50 font-medium py-2 rounded-xl"
					>and {restWallets.length} more</button
				>
			{/if}
		</div>
	</div>

</div>

<style lang="postcss">
	.twitter-card {
		@apply relative w-full min-h-[350px];

		height: fit-content;
		aspect-ratio: 1.91 / 1; /** width = height * 1.91 */
	}

	img {
		@apply absolute inset-0 z-0 p-6;
		content: '';
		background:
			radial-gradient(
				109.08% 109.08% at 50% 50%,
				rgb(0 0 0) 0%,
				rgb(0 0 0/ 0.82) 0.01%,
				rgb(0 0 0/ 0.21) 100%
			),
			rgb(0 0 0/ 0.4);
		filter: contrast(1.2) brightness(0.5);
	}

	.twitter-card-inner {
		background: linear-gradient(222deg, rgb(255 255 255/ 0.34) 8.42%, rgb(255 255 255/ 0) 149.09%);

		width: fit-content;
		min-height: fit-content;
	}

	.image-container :global(img) {
		width: 100%;
		height: 100%;
	}
</style>
