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

	/**
	 * Verifica se pelo menos um serviço está marcado.
	 * @returns {boolean} Retorna true se pelo menos um serviço estiver marcado, senão retorna false.
	 */
	const checkServicos = () => {
		const peloMenosUmCheckboxMarcado = [
			isSiteChecked,
			isHotsiteChecked,
			isManutencaoChecked,
			isApresentacaoDigitalChecked,
			isArtesChecked,
			isDevMarcaChecked,
			isGerenciamentoMidiaChecked,
			isMarketingDigitalChecked,
			isPerformanceChecked,
			isPlanejamentoChecked,
			isSocialMediaChecked
		].some((checked) => checked);

		if (!peloMenosUmCheckboxMarcado) {
			alert('Selecione pelo menos um serviço.');
			return false;
		}
		return true;
	};

	const handleSubmit = () => {
		mostrarPergunta = false;

		if (cliente_novo === 'sim') {
			console.log('Enviar formulário para Novo Cliente');
		} else if (cliente_novo === 'nao') {
			console.log('Enviar formulário para Não Novo Cliente');
		}

		etapaFormulario += 1;

		modelo.servicos_prestados = [];
		if (isSiteChecked) {
			modelo.servicos_prestados.push('Desenvolvimento de site');
		}
		if (isHotsiteChecked) {
			modelo.servicos_prestados.push('Hotsite');
		}
		if (isManutencaoChecked) {
			modelo.servicos_prestados.push('Manutenção de site');
		}
		if (isArtesChecked) {
			modelo.servicos_prestados.push('Artes avulsas');
		}
		if (isDevMarcaChecked) {
			modelo.servicos_prestados.push('Desenvolvimento de marca');
		}
		if (isApresentacaoDigitalChecked) {
			modelo.servicos_prestados.push('Apresentação digital');
		}
		if (isMarketingDigitalChecked) {
			modelo.servicos_prestados.push('Marketing digital');
		}
		if (isGerenciamentoMidiaChecked) {
			modelo.servicos_prestados.push('Gerenciamento de midia');
		}
		if (isPerformanceChecked) {
			modelo.servicos_prestados.push('Performance');
		}
		if (isPlanejamentoChecked) {
			modelo.servicos_prestados.push('Planejamento');
		}
		if (isSocialMediaChecked) {
			modelo.servicos_prestados.push('Social media');
		}
	};

	const handleSubmitAndCheckServicos = () => {
		if (checkServicos()) {
			handleSubmit();
		}
	};

	const retornarPergunta = () => {
		mostrarPergunta = true;
		etapaFormulario = 1;
	};

	let isSiteChecked = false;
	let isHotsiteChecked = false;
	let isManutencaoChecked = false;
	let isApresentacaoDigitalChecked = false;
	let isArtesChecked = false;
	let isDevMarcaChecked = false;
	let isGerenciamentoMidiaChecked = false;
	let isMarketingDigitalChecked = false;
	let isPerformanceChecked = false;
	let isPlanejamentoChecked = false;
	let isSocialMediaChecked = false;

	const enviarFormulario = async () => {
		try {
			const response = await fetch(
				'https://client-management-service-edejqdvmyq-uc.a.run.app/contracts/registration',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(modelo)
				}
			);

			if (!response.ok) {
				throw new Error('Erro ao enviar formulário');
			}

			sucessoCadastro = 'Cadastro efetuado com sucesso!';
			erroCadastro = null;
			console.log('Formulário enviado com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				console.error('Erro ao enviar formulário:', error.message);
				erroCadastro = 'Erro ao efetuar o cadastro.';
				sucessoCadastro = null;
			} else {
				console.error('Erro desconhecido ao enviar formulário:', error);
				erroCadastro = 'Erro desconhecido ao efetuar o cadastro.';
				sucessoCadastro = null;
			}
		}
	};

	/**
	 * @type {string | null}
	 */
	let sucessoCadastro = null;
	/**
	 * @type {string | null}
	 */
	let erroCadastro = null;
</script>

<h1 class="title mt-5">Cadastro de Novos Contratos</h1>

{#if mostrarPergunta && etapaFormulario === 1}
	<form class="formClienteNovo mt-4" on:submit|preventDefault={handleSubmit}>
		<label>
			Novo Cliente?
			<select bind:value={modelo.cliente_novo} required>
				<option value={true}>Sim</option>
				<option value={false}>Não</option>
			</select>
		</label><br /><br />
		<button type="submit">Prosseguir</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.cliente_novo === true && etapaFormulario === 2}
	<form class="formClienteNovoSim" on:submit|preventDefault={handleSubmit}>
		<label>
			CNPJ do novo cliente:<br />
			<input bind:value={modelo.cnpj_cliente} type="text" required />
		</label><br />
		<label>
			Nome Fantasia:<br />
			<input bind:value={modelo.nome_fantasia} type="text" />
		</label><br />
		<label>
			Nome para contato:<br />
			<input bind:value={modelo.nome_contato} type="text" />
		</label><br />
		<label>
			E-mail Financeiro para cobrança:<br />
			<input bind:value={modelo.email_contato} type="text" />
		</label><br /><br />
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Reiniciar</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.cliente_novo === false && etapaFormulario === 2}
	<form class="formClienteNovoNao" on:submit|preventDefault={handleSubmit}>
		<label>
			CNPJ do cliente:<br />
			<input bind:value={modelo.cnpj_cliente} type="text" required />
		</label><br />
		<label>
			Razão social do cliente:<br />
			<input bind:value={modelo.razao_social} type="text" />
		</label><br /><br />
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Reiniciar</button>
	</form>
{/if}

{#if !mostrarPergunta && etapaFormulario === 3}
	<form class="formCheckMain" on:submit|preventDefault={handleSubmitAndCheckServicos}>
		<div class="form-group row">
			<div class="col-sm-12" id="servicosCheck">
				<h3>Serviços Prestados</h3>
				<div class="row" id="checkRow">
					<div class="form-check">
						<input type="checkbox" id="desenvolvimentoSite" bind:checked={isSiteChecked} />
						<label for="desenvolvimentoSite">Desenvolvimento de site</label>
					</div>

					<div class="form-check">
						<input type="checkbox" id="hotsite" bind:checked={isHotsiteChecked} />
						<label for="hotsite">Hotsite</label>
					</div>

					<div class="form-check">
						<input type="checkbox" id="manutencao" bind:checked={isManutencaoChecked} />
						<label for="manutencao">Manutenção de Sites</label>
					</div>

					<div class="form-check">
						<input type="checkbox" id="artesAvulsas" bind:checked={isArtesChecked} />
						<label for="artesAvulsas">Artes Avulsas</label>
					</div>

					<div class="form-check">
						<input type="checkbox" id="devMarca" bind:checked={isDevMarcaChecked} />
						<label for="devMarca">Desenvolvimento de Marca</label>
					</div>

					<div class="form-check">
						<input
							type="checkbox"
							id="apresentacaoDigital"
							bind:checked={isApresentacaoDigitalChecked}
						/>
						<label for="apresentacaoDigital">Apresentação Digital</label>
					</div>

					<div class="form-check">
						<input type="checkbox" id="marketingDigital" bind:checked={isMarketingDigitalChecked} />
						<label for="marketingDigital">Marketing Digital</label>
					</div>
					<div class="form-check">
						<input
							type="checkbox"
							id="gerenciamentoMidia"
							bind:checked={isGerenciamentoMidiaChecked}
						/>
						<label for="gerenciamentoMidia">Gerenciamento de Midia</label>
					</div>
					<div class="form-check">
						<input type="checkbox" id="performance" bind:checked={isPerformanceChecked} />
						<label for="performance">Performance</label>
					</div>
					<div class="form-check">
						<input type="checkbox" id="planejamento" bind:checked={isPlanejamentoChecked} />
						<label for="planejamento">Planejamento</label>
					</div>
					<div class="form-check">
						<input type="checkbox" id="socialMedia" bind:checked={isSocialMediaChecked} />
						<label for="socialMedia">Social Media</label>
					</div>
				</div>
			</div>
			<div class="row" id="optionsRow">
				<fieldset class="form-group">
					<div class="row">
						<label>
							Haverá emissão de Nota Fiscal?<br />
							<select bind:value={modelo.emissao_de_nota} required>
								<option value="sim">Sim</option>
								<option value="nao">Não</option>
							</select>
						</label>
					</div>
				</fieldset>
				<fieldset class="form-group">
					<div class="row">
						<label>
							Cliente terá retenção de ISS na emissão da Nota Fiscal?<br />
							<select bind:value={modelo.retencao_iss_emissao_nota_fiscal} required>
								<option value="sim">Sim</option>
								<option value="nao">Não</option>
							</select>
						</label>
					</div>
				</fieldset>
				<fieldset class="form-group">
					<div class="row">
						<label>
							Forma de recebimento<br />
							<select bind:value={modelo.forma_recebimento} required>
								<option value="PIX">PIX</option>
								<option value="Boleto">Boleto</option>
								<option value="Transferencia">Transferência</option>
							</select>
						</label>
					</div>
				</fieldset>
				<label id="tipoChoice">
					Tipo<br />
					<select bind:value={modelo.tipo} required>
						<option value="avulso">Avulso</option>
						<option value="recorrente">Recorrente</option>
					</select>
				</label>
			</div>
		</div>
		<button type="submit">Prosseguir</button>
		<button on:click={retornarPergunta}>Reiniciar</button>
	</form>
{/if}

{#if !mostrarPergunta && modelo.tipo === 'avulso' && etapaFormulario === 4}
	<div class="row">
		<form class="formAvulso" on:submit|preventDefault={handleSubmit}>
			<h3>Serviço Avulso</h3>
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
			</label><br><br>
			<button type="submit">Prosseguir</button>
			<button on:click={retornarPergunta}>Reiniciar</button>
		</form>
	</div>
{/if}

{#if !mostrarPergunta && modelo.tipo === 'recorrente' && etapaFormulario === 4}
	<div class="row">
		<form class="formRecorrente" on:submit|preventDefault={handleSubmit}>
			<h3>Serviço Recorrente</h3>
			<label for="data">Início da vigência:
			<input bind:value={modelo.recorrente.inicio_vigencia} type="date" />
			</label>
			<label for="data">
				Término de Vigência
				<input bind:value={modelo.recorrente.termino_vigencia} type="date" />
			</label>
			<label for="periodicidade">Periodicidade
			<select bind:value={modelo.recorrente.periodicidade}>
				<option value="Mensal">Mensal</option>
				<option value="Bimestral">Bimestral</option>
				<option value="Trimestral">Trimestral</option>
				<option value="Semestral">Semestral</option>
				<option value="Anual">Anual</option>
			</select>
		</label>
			<label>
				Valor por Período:
				<input bind:value={modelo.recorrente.valor_do_periodo} type="text" />
			</label>
			<label>
				Observações Adicionais:
				<input bind:value={modelo.recorrente.observacoes_adicionais} type="text" />
			</label><br><br>

			<button type="submit">Prosseguir</button>
			<button on:click={retornarPergunta}>Reiniciar</button>
		</form>
	</div>
{/if}
{#if !mostrarPergunta && etapaFormulario === 5}
	<button on:click={enviarFormulario}>Enviar Formulário</button>
	{#if sucessoCadastro}
		<p style="color: green;">{sucessoCadastro}</p>
	{/if}

	{#if erroCadastro}
		<p style="color: red;">{erroCadastro}</p>
	{/if}
{/if}

<style>
	.title {
		text-align: center;
	}

	.formClienteNovo {
		text-align: center;
		align-self: center;
	}

	.formClienteNovoSim {
		text-align: center;
		align-self: center;
	}

	.formClienteNovoNao {
		text-align: center;
		align-self: center;
	}

	.form-check {
		padding-left: unset;
		width: 20%;
		display: flex;
	}

	#servicosCheck {
		margin-bottom: 2rem;
	}

	#servicosCheck > h3 {
		margin-left: 1rem;
	}

	#checkRow {
		margin: 1rem;
	}

	fieldset {
		margin-left: 1rem;
	}

	#tipoChoice {
		margin-left: 1rem;
		margin-bottom: 2rem;
	}

	.formCheckMain > button {
		margin-left: 1rem;
	}

	button {
		background-color: white;
		border: 1px solid #d3d3d3;
	}

	button:hover {
		font-weight: bolder;
		background-color: black;
		color: white;
	}

	input {
		background-color: transparent;
		border: 1px solid #9c9c9c;
	}

	select {
		background-color: transparent;
	}

	.formAvulso>h3 {
		margin-left: 1rem;
	}

	.formAvulso > label {
		width: 35%;
		margin-left: 1rem;
	}

	.formAvulso>button {
		margin-left: 1rem;
	}

	.formRecorrente>h3 {
		margin-left: 1rem;
	}

	.formRecorrente > label {
		width: 30%;
		margin-left: 1rem;
		margin-bottom: 0.5rem;
	}

	.formRecorrente>button {
		margin-left: 1rem;
	}



</style>
