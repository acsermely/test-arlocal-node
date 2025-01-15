<script lang="ts">
  import { getArlocalState } from "../state/arlocal.svelte";

	const arnode = getArlocalState();
	function onMine(): void {
		arnode.mine();
	}
</script>

<div>
	<h2>Mine:</h2>
	<button onclick={onMine}>Mine new block</button>
</div>