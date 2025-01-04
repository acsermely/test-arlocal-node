<script>
  import Fund from "./lib/Fund.svelte";
  import Mine from "./lib/Mine.svelte";
  import Transactions from "./lib/Transactions.svelte";
  import { setArlocalState } from "./state/arlocal.svelte";


  setArlocalState();
</script>
<main>
  <h1>Arlocal test node:</h1>
  <div class="container">
    <div class="actions">
      <Fund />
      <Mine />
    </div>
    <div class="monitor">
      <Transactions />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    width: 100%;
  }
  .actions {
    flex: 1; 
  }
  .monitor {
    flex: 1; 
  }
</style>