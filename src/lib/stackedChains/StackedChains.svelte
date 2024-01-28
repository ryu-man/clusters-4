<script lang="ts">
  import { findNetwork } from './utils';

  export let chainIds: number[] = [];
  export let width: number = 20;
  export let background: string = 'white';
  export let border: string = background;
</script>

<div class="stacked-chains" style:font-size="{width}px" style:--border-color={border}>
  {#each chainIds as chainId, chainIndex}
    <img
      alt=""
      style="z-index: {20 - chainIndex};"
      class:-ml-2={chainIndex > 0}
      src={findNetwork(chainId)?.logoUrl}
    />
  {/each}
</div>

<style lang="postcss">
  .stacked-chains {
    @apply flex flex-shrink-0 items-center;
  }

  img {
    @apply relative rounded-full;
    width: 1em;
    height: 1em;
    border: 1px solid var(--border-color);

	transition-property: border;
	transition-duration: .3s;
  }
</style>
