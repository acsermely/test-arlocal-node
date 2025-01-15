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
  h1 {
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
    background-color: var(--bg-color);
  }
  .container {
    padding: 5rem 1rem 0 1rem;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .actions {
    flex: 1;
    min-width: 260px;
    max-width: 350px;
  }
  .monitor {
    flex: 1; 
  }
</style>