<script>
	let formData = {
		basicInfo: {
			razao_social: '',
			nome_fantasia: '',
			site: '',
			cnpj_cpf: '',
			insc_estadual: '',
			email: ''
		},
		contactInfo: {
			endereco_atendimento: '',
			bairro: '',
			cep: '',
			cidade: '',
			estado: '',
			ddd: '',
			fax: '',
			telefone: ''
		},
		billingInfo: {
			endereco_faturamento: '',
			bairro_faturamento: '',
			cep_faturamento: '',
			cidade_faturamento: '',
			estado_faturamento: '',
			ddd_faturamento: '',
			fax_faturamento: '',
			telefone_faturamento: '',
			email_boleto_notas: ''
		},
		finacialInfo: {
			responsavel_financeiro: '',
			ddd_financeiro: '',
			telefone_financeiro: '',
			email_financeiro: ''
		},
		legalInfo: {
			nome_representante: '',
			estado_civil_representante: '',
			profissao_representante: '',
			rg_representante: '',
			cpf_representante: '',
			email_representante: '',
			telefone_representante: '',
			nascimento_representante: ''
		},
		AdditionalContactsSchema: {
			nome_segundo_contato: '',
			estado_civil_segundo_contato: '',
			profissao_segundo_contato: '',
			rg_segundo_contato: '',
			cpf_segundo_contato: '',
			email_segundo_contato: '',
			telefone_segundo_contato: '',
			nascimento_segundo_contato: '',
			nome_terceiro_contato: '',
			estado_civil_terceiro_contato: '',
			profissao_terceiro_contato: '',
			rg_terceiro_contato: '',
			cpf_terceiro_contato: '',
			email_terceiro_contato: '',
			telefone_terceiro_contato: '',
			nascimento_terceiro_contato: ''
		}
	};

	async function submitForm() {
		try {
			const response = await fetch(
				'https://client-management-service-edejqdvmyq-uc.a.run.app/clients/registration',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				}
			);

			if (response.ok) {
				const data = await response;
				console.log('Resposta do backend:', data);
			} else {
				console.error('Erro ao enviar dados para o backend:', response.statusText);
			}
		} catch (error) {
			// Adicionando uma verificação de tipo para a variável "error"
			if (error instanceof Error) {
				console.error('Erro ao enviar dados para o backend:', error.message);
			} else {
				console.error('Erro desconhecido:', error);
			}
		}
	}

	// Limpar o FORM

	function limparFormulario() {
		// Obtém o formulário pelo ID
		var formulario = document.getElementById('formClientes');

		// Reseta o formulário
		// @ts-ignore
		formulario.reset();
	}
</script>

<svelte:head>
	<title>Cadastro de Clientes - Black Beans</title>
	<meta name="description" content="Cadastro de Clientes Black Beans" />
</svelte:head>

<h1 class="mt-4">Cadastro de Novos Clientes</h1>

<form on:submit|preventDefault={submitForm} id="formClientes">
	<input
		class="form-cadastro"
		type="text"
		placeholder="Razão Social"
		bind:value={formData.basicInfo.razao_social}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nome Fantasia"
		bind:value={formData.basicInfo.nome_fantasia}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Site"
		bind:value={formData.basicInfo.site}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="CNPJ/CPF"
		bind:value={formData.basicInfo.cnpj_cpf}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Inscrição Estadual"
		bind:value={formData.basicInfo.insc_estadual}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="E-mail"
		bind:value={formData.basicInfo.email}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Endereço Atendimento"
		bind:value={formData.contactInfo.endereco_atendimento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Bairro"
		bind:value={formData.contactInfo.bairro}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Cep"
		bind:value={formData.contactInfo.cep}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Cidade"
		bind:value={formData.contactInfo.cidade}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Estado"
		bind:value={formData.contactInfo.estado}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="DDD"
		bind:value={formData.contactInfo.ddd}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Fax"
		bind:value={formData.contactInfo.fax}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone"
		bind:value={formData.contactInfo.telefone}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Endereço Faturamento"
		bind:value={formData.billingInfo.endereco_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Bairro Faturamento"
		bind:value={formData.billingInfo.bairro_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Cep Faturamento"
		bind:value={formData.billingInfo.cep_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Cidade Faturamento"
		bind:value={formData.billingInfo.cidade_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Estado Faturamento"
		bind:value={formData.billingInfo.estado_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="DDD Faturamento"
		bind:value={formData.billingInfo.ddd_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="FAX Faturamento"
		bind:value={formData.billingInfo.fax_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone Faturamento"
		bind:value={formData.billingInfo.telefone_faturamento}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Responsável Financeiro"
		bind:value={formData.finacialInfo.responsavel_financeiro}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="DDD Financeiro"
		bind:value={formData.finacialInfo.ddd_financeiro}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone Financeiro"
		bind:value={formData.finacialInfo.telefone_financeiro}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="E-mail Financeiro"
		bind:value={formData.finacialInfo.email_financeiro}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nome Representante"
		bind:value={formData.legalInfo.nome_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Estado Civil Representante"
		bind:value={formData.legalInfo.estado_civil_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Profissao Representante"
		bind:value={formData.legalInfo.profissao_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="RG Representante"
		bind:value={formData.legalInfo.rg_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="CPF Representante"
		bind:value={formData.legalInfo.cpf_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="E-mail Representante"
		bind:value={formData.legalInfo.email_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone Representante"
		bind:value={formData.legalInfo.telefone_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nascimento Representante"
		bind:value={formData.legalInfo.nascimento_representante}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Email Boleto Notas"
		bind:value={formData.billingInfo.email_boleto_notas}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="nome Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.nome_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Estado Civil Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.estado_civil_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Profissão Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.profissao_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="RG Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.rg_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="CPF Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.cpf_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="E-mail Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.email_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.telefone_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nascimento Segundo Contato"
		bind:value={formData.AdditionalContactsSchema.nascimento_segundo_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nome Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.nome_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Estado Civil Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.estado_civil_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Profissão Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.profissao_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="RG Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.rg_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="CPF Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.cpf_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="E-mail Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.email_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Telefone Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.telefone_terceiro_contato}
		required
	/>
	<input
		class="form-cadastro"
		type="text"
		placeholder="Nascimento Terceiro Contato"
		bind:value={formData.AdditionalContactsSchema.nascimento_terceiro_contato}
		required
	/>
	<br /><br />
	<button class="btn btn-outline-success" type="submit">Finalizar Cadastro</button>
	<button class="btn btn-outline-danger" type="button" on:click={limparFormulario}
		>Reiniciar Cadastro</button
	>
</form>

<style>
	#formClientes {
		text-align: center;
		border: 1px solid rgba(107, 122, 144, 0.1) !important;
		border-radius: 30px;
		background-color: white;
		margin-left: 40px;
		margin-right: 40px;
		margin-bottom: 40px;
	}

	#formClientes > button {
		margin-bottom: 20px;
	}

	.form-cadastro {
		width: 40%;
		margin: 1rem;
	}

	h1 {
		text-align: center;
		font-family: 'Amiri', serif;
		font-weight: bold;
	}

	input {
		border-top: unset;
		border-bottom: 1px solid black;
		border-left: unset;
		border-right: unset;
	}
</style>
