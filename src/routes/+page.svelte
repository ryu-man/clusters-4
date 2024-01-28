<script lang="ts">
	import { TwitterCard } from '$lib';
	import type { Wallet } from '$lib/types';

	const wallets: Wallet[] = [
		{
			name: 'hot',
			chainIds: [1, 37]
		},
		{
			name: 'cold',
			chainIds: [1, 37]
		},
		{
			name: 'games',
			chainIds: [1, 37]
		},
		{
			name: 'trades',
			chainIds: [1, 37]
		},
		{
			name: 'trades',
			chainIds: [1, 37]
		},
		{
			name: 'trades',
			chainIds: [1, 37]
		},
		{
			name: 'trades',
			chainIds: [1, 37]
		}
	];
</script>

<div class="app p-10 flex flex-col justify-center items-center gap-10 w-full h-full">
	<TwitterCard name="foobar" wallets={[]}>
		<img src="/images/wallet_back.png" />
	</TwitterCard>
	<TwitterCard name="foobar" wallets={wallets.slice(0, 2)}>
		<img src="/images/wallet_back.png" />
	</TwitterCard>
	<TwitterCard name="foobar" {wallets}>
		<img src="/images/wallet_back.png" />
	</TwitterCard>
</div>

<style lang="postcss">
	.app {
		@apply relative;
	}

	.app::after {
		@apply absolute inset-0;
		content: '';
		z-index: 0;
		background-image: url('/images/background.png');
		background-repeat: repeat;
		filter: contrast(1.2) brightness(0.5);
	}
</style>
