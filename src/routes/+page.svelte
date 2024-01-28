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

<div class="app p-10 flex flex-col justify-start items-start gap-10 w-full h-full">
	<!-- <div class="w-[1024px]">
		<TwitterCard name="foobar" wallets={[]}>
			<img src="/images/wallet_back.png" />
		</TwitterCard>
	</div> -->

	<!-- <div class="w-[1024px]">
		<TwitterCard name="foobar" {wallets}>
			<img src="/images/wallet_back.png" />
		</TwitterCard>
	</div> -->

	<div class="w-[1024px]">
		<TwitterCard name="foobar" wallets={wallets.slice(0, 2)}>
			<img src="/images/wallet_back.png" alt="twitter card" />
		</TwitterCard>
	</div>
</div>

<style lang="postcss">
	.app {
		@apply relative;
	}
</style>
