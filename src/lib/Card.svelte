<script>
  import Button from "stdf/components/button/Button.svelte";
  import { onMount } from "svelte";
  onMount(async () => {});
  function  handleGeneratePDF() {  
            import("./../utils/index").then(wasm => {
        fetch("./examples/text-example.json")
            .then(response => {
            return response.json();
            })
            .then(doc => {
            // Change the title to show date (now)
            let date = new Date().toLocaleString();
            let title = doc.contents[0].params;
            title.text += " (created: " + date + ")";
            wasm.createPDF(doc);
            });
        }).catch(e => console.error("Error importing `index.js`:", e));
  }
</script>

<Button state="info" size="mid" on:click={handleGeneratePDF}
  >Generate PDF</Button
>
