<!-- src/components/Question.svelte -->
<script>
    export let question = '';
    /**
	 * @type {string | any[]}
	 */ 
     export let options = [];
    export let showAdditionalFields = true;
    /**
	 * @type {any[]}
	 */
     export let answers = [];
  
    let answer = '';
  
    let selectedOption = ''; // Mova a declaração para o escopo mais amplo

  function submitAnswer() {
    if (answer.trim() !== '') {
      answers = [...answers, answer];
      answer = ''; // Limpar a resposta após a submissão
      if (showAdditionalFields) {
        showAdditionalFields = false;
      }

      // Emitir apenas a resposta, não o evento personalizado
      const customEvent = new CustomEvent('answer', { detail: answer });
      dispatchEvent(customEvent);
    }
  }
  </script>
  
  <div>
    <p>{question}</p>

    {#if currentQuestion.options && currentQuestion.options.length > 0}
      {#each currentQuestion.options as option}
        <label>
          <input
            type="radio"
            name="options"
            bind:group={selectedOption}
            value={option}
          />
          {option}
        </label>
      {/each}
    {/if}
  
    {#if showAdditionalFields}
      <!-- Adicione campos adicionais aqui conforme necessário -->
      <input bind:value={selectedOption} />
      <button on:click={submitAnswer}>Enviar Resposta</button>
    {/if}
  </div>