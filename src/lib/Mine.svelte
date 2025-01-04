<script lang="ts">
  import { getArlocalState } from "../state/arlocal.svelte";

	const arnode = getArlocalState();
	function onMine(): void {
		arnode.mine();
	}
</script>

<div>
	<h2>Mint</h2>
	<button onclick={onMine}>Mint new block</button>
</div>