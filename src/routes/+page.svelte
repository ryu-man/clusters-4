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

	<TwitterCard name="foobar" {wallets}>
		<img src="/images/wallet_back.png" />
	</TwitterCard>
	
	<TwitterCard name="foobar" wallets={wallets.slice(0, 2)}>
		<img src="/images/wallet_back.png" />
	</TwitterCard>
	
</div>

<style lang="postcss">
	.app {
		@apply relative;
	}
</style>
