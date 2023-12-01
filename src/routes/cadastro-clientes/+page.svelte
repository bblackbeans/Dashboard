<script>
	let formData = {
		basicInfo: {
			razao_social: 'Empresa Exemplo Ltda',
			nome_fantasia: 'Exemplo',
			site: 'https://exemplo.com',
			cnpj_cpf: '00.000.000/0001-00',
			insc_estadual: '123456789',
			email: 'contato@exemplo.com'
		},
		contactInfo: {
			endereco_atendimento: 'Rua Exemplo, 123',
			bairro: 'Centro',
			cep: '00000-000',
			cidade: 'Cidade Exemplo',
			estado: 'Estado',
			ddd: '11',
			fax: '1123456789',
			telefone: '1123456789'
		},
		billingInfo: {
			endereco_faturamento: 'Rua Faturamento, 321',
			bairro_faturamento: 'Bairro Faturamento',
			cep_faturamento: '11111-111',
			cidade_faturamento: 'Cidade Faturamento',
			estado_faturamento: 'Estado Faturamento',
			ddd_faturamento: '22',
			fax_faturamento: '2234567890',
			telefone_faturamento: '2234567890',
			email_boleto_notas: 'faturamento@exemplo.com'
		},
		finacialInfo: {
			responsavel_financeiro: 'Responsável Financeiro',
			ddd_financeiro: '33',
			telefone_financeiro: '3323456789',
			email_financeiro: 'financeiro@exemplo.com'
		},
		legalInfo: {
			nome_representante: 'Representante Legal',
			estado_civil_representante: 'Casado',
			profissao_representante: 'Advogado',
			rg_representante: 'MG-12.345.678',
			cpf_representante: '123.456.789-00',
			email_representante: 'representante@exemplo.com',
			telefone_representante: '4434567890',
			nascimento_representante: '1980-01-01'
		},
		AdditionalContactsSchema: {
			nome_segundo_contato: 'Segundo Contato',
			estado_civil_segundo_contato: 'Solteiro',
			profissao_segundo_contato: 'Engenheiro',
			rg_segundo_contato: 'SP-98.765.432',
			cpf_segundo_contato: '987.654.321-00',
			email_segundo_contato: 'segundocontato@exemplo.com',
			telefone_segundo_contato: '5523456789',
			nascimento_segundo_contato: '1990-05-15',
			nome_terceiro_contato: 'Terceiro Contato',
			estado_civil_terceiro_contato: 'Divorciado',
			profissao_terceiro_contato: 'Médico',
			rg_terceiro_contato: 'RJ-11.222.333',
			cpf_terceiro_contato: '111.222.333-44',
			email_terceiro_contato: 'terceirocontato@exemplo.com',
			telefone_terceiro_contato: '6623456789',
			nascimento_terceiro_contato: '1985-08-20'
		}
	};

	async function submitForm() {
		try {
			const response = await fetch(
				'https://4350-2804-14c-5be3-804a-eda7-60e4-c21d-4a2b.ngrok-free.app/clients/registration',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				}
			);

			if (response.ok) {
				const data = await response.json();
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
