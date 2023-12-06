<!-- src/routes/FormPage.svelte
<script>
    import Question from '$lib/components/Question.svelte';
  
    let currentPage = 0;
    let answers = [];
  
    const questions = [
      { question: 'Novo cliente?', options: ['Sim', 'Não'] },
      { question: 'Detalhes do Novo Cliente', showAdditionalFields: false },
      { question: 'Detalhes do Cliente Existente', showAdditionalFields: false },
      // Adicione mais perguntas conforme necessário
    ];
  
    let currentQuestion = questions[currentPage];
  
    // Adiciona a lógica para exibir ou ocultar campos adicionais com base na resposta
    // Adiciona a lógica para exibir ou ocultar campos adicionais com base na resposta
  /**
	 * @param {{ detail: string; }} event
	 */
  function handleAnswer(event) {
    answers[currentPage] = event.detail;

    if (currentPage === 0) {
      if (event.detail === 'Sim') {
        currentPage = 1; // Pula para a próxima pergunta se a resposta for 'Sim'
      } else {
        currentPage = 2; // Pula para a pergunta seguinte se a resposta for 'Não'
      }
    } else {
      // Adicione lógica aqui para determinar se deve mostrar campos adicionais com base nas respostas anteriores
      currentPage += 1;
    }

    currentQuestion = questions[currentPage];
  }
  
    function nextPage() {
      currentPage += 1;
      currentQuestion = questions[currentPage];
    }
  
    function prevPage() {
      currentPage -= 1;
      currentQuestion = questions[currentPage];
    }
  </script>
  
  <h1>Formulário</h1>
  
  {#if currentPage < questions.length}
    <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
      on:answer={handleAnswer}
    />
    <button on:click={nextPage}>Próximo</button>
  {/if}
  
  {#if currentPage > 0}
    <button on:click={prevPage}>Anterior</button>
  {/if}
   -->

<script>
	let modelo = {
		cliente_novo: true,
		cnpj_cliente: '',
		razao_social: '',
		nome_fantasia: '',
		nome_contato: '',
		email_contato: '',
		servicos_prestados: [''],
		emissao_de_nota: '',
		retencao_iss_emissao_nota_fiscal: '',
		forma_recebimento: '',
		tipo: '',
		avulso: {
			valor_total_servicos: '',
			numero_parcelas: '',
			data_vencimento: '',
			observacoes_adicionais_nota_fiscal: ''
		},
		recorrente: {
			inicio_vigencia: '',
			termino_vigencia: '',
			periodicidade: '',
			valor_do_periodo: '',
			observacoes_adicionais: ''
		}
	};

	// let modeloRecorrente = {
	// 	cliente_novo: true,
	// 	cnpj_cliente: '',
	// 	razao_social: '',
	// 	nome_fantasia: '',
	// 	nome_contato: '',
	// 	email_contato: '',
	// 	servicos_prestados: [''],
	// 	emissao_de_nota: '',
	// 	retencao_iss_emissao_nota_fiscal: '',
	// 	forma_recebimento: '',
	// 	tipo: '',
	// 	recorrente: {
	// 		inicio_vigencia: '',
	// 		termino_vigencia: '',
	// 		periodicidade: '',
	// 		valor_do_periodo: '',
	// 		observacoes_adicionais: ''
	// 	},
	// 	avulso: null
	// };

	

	/**
	 * @type {string | null}
	 */
	let cliente_novo = null;
	let mostrarPergunta = true;
	let etapaFormulario = 1;
	/**
	 * @type {string | null}
	 */
	let tipo = null;

	const handleSubmit = () => {
		mostrarPergunta = false;

		if (cliente_novo === 'sim') {
			// Lógica para lidar com o envio do formulário para Novo Cliente
			console.log('Enviar formulário para Novo Cliente');
		} else if (cliente_novo === 'nao') {
			// Lógica para lidar com o envio do formulário para Não Novo Cliente
			console.log('Enviar formulário para Não Novo Cliente');
		}

		etapaFormulario += 1; // Avançar para a próxima parte do formulário
	};

	const retornarPergunta = () => {
		mostrarPergunta = true;
		etapaFormulario = 1;
	};


</script>

<h1>Cadastro de Novos Clientes</h1>

{#if mostrarPergunta && etapaFormulario === 1}
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Novo Cliente?
			<select bind:value={modelo.cliente_novo}>
				<option value={true}>Sim</option>
				<option value={false}>Não</option>
			</select>
		</label>
		<button type="submit">Prosseguir</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.cliente_novo === true && etapaFormulario === 2}
	<!-- Adicione os campos adicionais para Novo Cliente aqui -->
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			CNPJ do novo cliente:
			<input bind:value={modelo.cnpj_cliente} type="text" />
		</label>
		<label>
			Nome Fantasia:
			<input bind:value={modelo.nome_fantasia} type="text" />
		</label>
		<label>
			Nome para contato:
			<input bind:value={modelo.nome_contato} type="text" />
		</label>
		<label>
			E-mail Financeiro para cobrança:
			<input bind:value={modelo.email_contato} type="text" />
		</label>
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Retornar</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.cliente_novo === false && etapaFormulario === 2}
	<!-- Adicione os campos adicionais para Não Novo Cliente aqui -->
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			CNPJ do cliente:
			<input bind:value={modelo.cnpj_cliente} type="text" />
		</label>
		<label>
			Razão social do cliente:
			<input bind:value={modelo.razao_social} type="text" />
		</label>
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Retornar</button>
	</form>
{/if}

{#if !mostrarPergunta && etapaFormulario === 3}
	<!-- Adicione os campos adicionais para a terceira etapa do formulário aqui -->
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group row">
			<div class="col-sm-2">Serviços Prestados</div>
			<div class="col-sm-10">
				<div class="form-check">
					<input bind:value={modelo.servicos_prestados}
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						checked
					/> Desenvolvimento de site
					<label class="form-check-label" for="examplecheckboxs1"> Desenvolvimento de site </label>
				</div>
				<div class="form-check">
					<input bind:value={modelo.servicos_prestados} class="form-check-input" type="checkbox" name="examplecheckboxs" id="" />
					<label class="form-check-label" for="examplecheckboxs2"> Hotsite / Pré-Hotsite </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Manutenção de site </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Artes Avulsas </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Desenvolvimento da Marca </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Apresentação Digital </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3">
						Marketing Digital/Gerenciamento de Mídia
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Gerenciamento de Mídia </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Performance </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Planejamento </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						name="examplecheckboxs"
						id=""
						bind:value={modelo.servicos_prestados}
					/>
					<label class="form-check-label" for="examplecheckboxs3"> Social Media </label>
				</div>
			</div>

			<fieldset class="form-group">
				<div class="row">
					<label>
						Haverá emissão de Nota Fiscal?
						<select bind:value={modelo.emissao_de_nota}>
							<option value="sim">Sim</option>
							<option value="nao">Não</option>
						</select>
					</label>
				</div>
			</fieldset>
			<fieldset class="form-group">
				<div class="row">
					<label>
						Cliente terá retenção de ISS na emissão da Nota Fiscal
						<select bind:value={modelo.retencao_iss_emissao_nota_fiscal}>
							<option value="sim">Sim</option>
							<option value="nao">Não</option>
						</select>
					</label>
				</div>
			</fieldset>
			<fieldset class="form-group">
				<div class="row">
					<label>
						Forma de recebimento
						<select bind:value={modelo.forma_recebimento}>
							<option value="PIX">PIX</option>
							<option value="Boleto">Boleto</option>
							<option value="Transferencia">Transferência</option>
						</select>
					</label>
				</div>
			</fieldset>
			<label>
				Tipo
				<select bind:value={modelo.tipo}>
					<option value="avulso">Avulso</option>
					<option value="recorrente">Recorrente</option>
				</select>
			</label>
		</div>
		<!-- Adicione outros campos conforme necessário -->
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Retornar</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.tipo === 'avulso' && etapaFormulario === 4}
	<form on:submit|preventDefault={handleSubmit}>
		<h1>Serviço Avulso</h1>
		<label>
			Valor Total separado por Serviço:
			<input bind:value={modelo.avulso.valor_total_servicos} type="text" />
		</label>
		<label>
			Número de Parcelas:
			<input bind:value={modelo.avulso.numero_parcelas} type="text" />
		</label>
		<label>
			Data(s) de Vencimento:
			<input bind:value={modelo.avulso.data_vencimento} type="text" />
		</label>
		<label>
			Observações Adicionais na Nota Fiscal, se houver:
			<input bind:value={modelo.avulso.observacoes_adicionais_nota_fiscal} type="text" />
		</label>
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Retornar</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.tipo === 'recorrente' && etapaFormulario === 4}
	<form on:submit|preventDefault={handleSubmit}>
		<h1>Serviço Recorrente</h1>
		<label for="data">Início da vigência:</label>
		<input bind:value={modelo.recorrente.inicio_vigencia} type="date" />
		<label for="data">
			Término de Vigência
			<input bind:value={modelo.recorrente.termino_vigencia} type="date" />
		</label>
		<fieldset class="form-group">
			<div class="row">
				<legend class="col-form-label col-sm-2 pt-0">Periodicidade</legend>
				<div class="col-sm-10">
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="peridiocidade"
							id=""
							bind:value={modelo.recorrente.periodicidade}
							checked
						/>
						<label class="form-check-label" for="gridRadios1">Mensal</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="peridiocidade"
							id=""
							bind:value={modelo.recorrente.periodicidade}
							checked
						/>
						<label class="form-check-label" for="gridRadios1">Bimestral</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="peridiocidade"
							id=""
							bind:value={modelo.recorrente.periodicidade}
							checked
						/>
						<label class="form-check-label" for="gridRadios1">Trimestral</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="peridiocidade"
							id=""
							bind:value={modelo.recorrente.periodicidade}
							checked
						/>
						<label class="form-check-label" for="gridRadios1">Semestral</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="peridiocidade"
							id=""
							bind:value={modelo.recorrente.periodicidade}
							checked
						/>
						<label class="form-check-label" for="gridRadios1">Anual</label>
					</div>
				</div>
			</div>
		</fieldset>
		<label>
			Valor por Período:
			<input bind:value={modelo.recorrente.valor_do_periodo} type="text" />
		</label>
		<label>
			Observações Adicionais:
			<input bind:value={modelo.recorrente.observacoes_adicionais} type="text" />
		</label>

		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Retornar</button>
	</form>
{/if}
{#if !mostrarPergunta && etapaFormulario === 5}
	<button on:click={() => console.log('Dados do Formulário:', modelo)}>Enviar Formulário</button>
{/if}

<style>
	/* Adicione estilos conforme necessário */
</style>
