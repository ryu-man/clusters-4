<script lang="ts">
	import { StackedChains } from '$lib/stackedChains';
	import type { Wallet } from '$lib/types';

	export let name: string;
	export let wallet: Wallet;
</script>

<div
	class="twitter-card-item flex items-center gap-[10px] border border-white/30 bg-white/10 py-4 px-5 rounded-xl text-xl font-medium h-[72px] min-w-80"
>
	<StackedChains chainIds={wallet.chainIds} width={40} />
    
	<div>
		<span class="opacity-50">{name}</span>
		<span>/{wallet.name}</span>
	</div>
</div>

<style lang="postcss">
</style>
