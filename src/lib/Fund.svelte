<script lang="ts">
  import { getArlocalState } from "../state/arlocal.svelte";

  let address = $state("");
  let balance = $state("");

  const arnode = getArlocalState();

  function onFund(): void {
    if (!address) {
      console.error("no address");
      return;
    }
    arnode.mint(address).then(newBalace => {
      console.log(newBalace)
      balance = newBalace;
    })
  }
</script>

<div>
  <h2>Fund:</h2>
  <div>
    <label for="address"><small>*add 1 AR to the address<br /></small></label>
    <input type="text" name="Address" id="address" bind:value={address}>
    <button onclick={onFund}>Fund</button>
    {#if balance}
      <span><small>Current balance: <strong>{balance}</strong> AR</small></span>
    {/if}
  </div>
</div>

<style>
  label {
    color: var(--accent-color);
  }
</style>