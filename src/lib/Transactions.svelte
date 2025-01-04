<script lang="ts">
  import { getArlocalState } from "../state/arlocal.svelte";

	const arnode = getArlocalState();
	const showLen = 10;

	function copy(text: string): void {
		navigator.clipboard.writeText(text);
	}

</script>

<h2>Transactions:</h2>
<p>*click to copy fields</p>
<table>
	<thead>
		<tr>
			<th>Block</th>
			<th>Type</th>
			<th>Address</th>
			<th>ID</th>
		</tr>
	</thead>
	<tbody>
		{#each arnode.transactionHistory as item}
		<tr>
			<td>{item.block?.height || "pending"}</td>
			<td>{item.tags?.find(item => item.name === "Type")?.value || "-"}</td>
			<td class="copy" onclick={() => copy(item.owner.address)}>{item.owner.address.slice(0,showLen)}...</td>
			<td class="copy" onclick={() => copy(item.id)}>{item.id.slice(0,showLen)}...</td>
		</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border: 1px solid var(--accent-color);
	}
	td.copy {
		cursor: pointer;
	}
	td {
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	p {
		margin: 0;
		color: var(--accent-color);
	}
</style>