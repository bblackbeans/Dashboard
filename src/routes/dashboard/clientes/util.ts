import type { BasicClient, ClientCnpj, ModalResponse, RouteResponse } from './types';

// MODAL HANDLE
export async function modalHandle(botao: HTMLButtonElement) {
	const clienteID = botao.getAttribute('data-cliente-id');

	try {
		const response = await fetch(
			`https://client-management-service-edejqdvmyq-uc.a.run.app/${clienteID}`
		);
		const clientsCNPJs: RouteResponse<ModalResponse[]> = response;

		// const modalBody = document.querySelector('#myModal .modal-body');

		// if (modalBody) {
		// 	// 			modalBody.innerHTML = `
		// 	//   <div class="col-md-6">
		// 	//     <p><strong>Bairro:</strong> ${clientCNPJ.bairro}</p>
		// 	//     <p><strong>Bairro Faturamento:</strong> ${clientCNPJ.bairro_faturamento}</p>
		// 	//     <p><strong>CEP:</strong> ${clientCNPJ.cep}</p>
		// 	//     <p><strong>CEP Faturamento:</strong> ${clientCNPJ.cep_faturamento}</p>
		// 	//     <p><strong>Cidade:</strong> ${clientCNPJ.cidade}</p>
		// 	//     <p><strong>Cidade Faturamento:</strong> ${clientCNPJ.cidade_faturamento}</p>
		// 	//     <p><strong>CPF/CNPJ:</strong> ${clientCNPJ.cnpj_cpf}</p>
		// 	//     <p><strong>CPF Representante:</strong> ${clientCNPJ.cpf_representante}</p>
		// 	//     <p><strong>CPF Segundo Contato:</strong> ${clientCNPJ.cpf_segundo_contato}</p>
		// 	//     <p><strong>CPF Terceiro Contato:</strong> ${clientCNPJ.cpf_terceiro_contato}</p>
		// 	//     <p><strong>DDD:</strong> ${clientCNPJ.ddd}</p>
		// 	//     <p><strong>DDD Faturamento:</strong> ${clientCNPJ.ddd_faturamento}</p>
		// 	//     <p><strong>DDD Financeiro:</strong> ${clientCNPJ.ddd_financeiro}</p>
		// 	//     <p><strong>Email:</strong> ${clientCNPJ.email}</p>
		// 	//     <p><strong>Email Boleto/Notas:</strong> ${clientCNPJ.email_boleto_notas}</p>
		// 	//     <p><strong>Email Financeiro:</strong> ${clientCNPJ.email_financeiro}</p>
		// 	//     <p><strong>Email Representante:</strong> ${clientCNPJ.email_representante}</p>
		// 	//     <p><strong>Email Segundo Contato:</strong> ${clientCNPJ.email_segundo_contato}</p>
		// 	//     <p><strong>Email Terceiro Contato:</strong> ${clientCNPJ.email_terceiro_contato}</p>
		// 	//     <p><strong>Endereço Atendimento:</strong> ${clientCNPJ.endereco_atendimento}</p>
		// 	//     <p><strong>Endereço Faturamento:</strong> ${clientCNPJ.endereco_faturamento}</p>
		// 	//     <p><strong>Estado:</strong> ${clientCNPJ.estado}</p>
		// 	//     <p><strong>Estado Civil Representante:</strong> ${clientCNPJ.estado_civil_representante}</p>
		// 	//     <p><strong>Estado Civil Segundo Contato:</strong> ${clientCNPJ.estado_civil_segundo_contato}</p>
		// 	//     <p><strong>Estado Civil Terceiro Contato:</strong> ${clientCNPJ.estado_civil_terceiro_contato}</p>
		// 	//   </div>
		// 	//   <div class="col-md-6">
		// 	//     <p><strong>Estado Faturamento:</strong> ${clientCNPJ.estado_faturamento}</p>
		// 	//     <p><strong>Fax:</strong> ${clientCNPJ.fax}</p>
		// 	//     <p><strong>Fax Faturamento:</strong> ${clientCNPJ.fax_faturamento}</p>
		// 	//     <p><strong>Inscrição Estadual:</strong> ${clientCNPJ.insc_estadual}</p>
		// 	//     <p><strong>Nascimento Representante:</strong> ${clientCNPJ.nascimento_representante}</p>
		// 	//     <p><strong>Nascimento Segundo Contato:</strong> ${clientCNPJ.nascimento_segundo_contato}</p>
		// 	//     <p><strong>Nascimento Terceiro Contato:</strong> ${clientCNPJ.nascimento_terceiro_contato}</p>
		// 	//     <p><strong>Nome Fantasia:</strong> ${clientCNPJ.nome_fantasia}</p>
		// 	//     <p><strong>Nome Representante:</strong> ${clientCNPJ.nome_representante}</p>
		// 	//     <p><strong>Nome Segundo Contato:</strong> ${clientCNPJ.nome_segundo_contato}</p>
		// 	//     <p><strong>Nome Terceiro Contato:</strong> ${clientCNPJ.nome_terceiro_contato}</p>
		// 	//     <p><strong>Profissão Representante:</strong> ${clientCNPJ.profissao_representante}</p>
		// 	//     <p><strong>Profissão Segundo Contato:</strong> ${clientCNPJ.profissao_segundo_contato}</p>
		// 	//     <p><strong>Profissão Terceiro Contato:</strong> ${clientCNPJ.profissao_terceiro_contato}</p>
		// 	//     <p><strong>Razão Social:</strong> ${clientCNPJ.razao_social}</p>
		// 	//     <p><strong>Responsável Financeiro:</strong> ${clientCNPJ.responsavel_financeiro}</p>
		// 	//     <p><strong>RG Representante:</strong> ${clientCNPJ.rg_representante}</p>
		// 	//     <p><strong>RG Segundo Contato:</strong> ${clientCNPJ.rg_segundo_contato}</p>
		// 	//     <p><strong>RG Terceiro Contato:</strong> ${clientCNPJ.rg_terceiro_contato}</p>
		// 	//     <p><strong>Site:</strong> ${clientCNPJ.site}</p>
		// 	//     <p><strong>Telefone:</strong> ${clientCNPJ.telefone}</p>
		// 	//     <p><strong>Telefone Faturamento:</strong> ${clientCNPJ.telefone_faturamento}</p>
		// 	//     <p><strong>Telefone Financeiro:</strong> ${clientCNPJ.telefone_financeiro}</p>
		// 	//     <p><strong>Telefone Representante:</strong> ${clientCNPJ.telefone_representante}</p>
		// 	//     <p><strong>Telefone Segundo Contato:</strong> ${clientCNPJ.telefone_segundo_contato}</p>
		// 	//     <p><strong>Telefone Terceiro Contato:</strong> ${clientCNPJ.telefone_terceiro_contato}</p>
		// 	//   </div>
		// 	//   `;
		// } else {
		// 	console.error('Elemento modalBody não encontrado.');
		// }
	} catch (error) {
		console.error('Erro ao obter dados do cliente:', error);
	}
}

// BUILDING TABLE LINES AND BUTTONS
let proximoID = 1;

export function tableManagement(basicClient: BasicClient) {
	const tabela = document.getElementById('tabela-clientes');
	const botao = document.createElement('button');
	// @ts-ignore
	const novaLinha = tabela.insertRow();

	const celulaID = novaLinha.insertCell();
	const celulaNome = novaLinha.insertCell();
	const celulaEmail = novaLinha.insertCell();
	const celuladdd = novaLinha.insertCell();
	const celulaTelefone = novaLinha.insertCell();
	const celulaStatus = novaLinha.insertCell();
	const celulaBotao = novaLinha.insertCell();
	celulaBotao.appendChild(botao);

	celulaID.textContent = proximoID++;
	celulaNome.textContent = basicClient.nome_cliente;
	celulaEmail.textContent = basicClient.email;
	celuladdd.textContent = basicClient.site;
	celulaTelefone.textContent = basicClient.telefone;
	celulaStatus.textContent = basicClient.status;

	// BUTTON
	botao.textContent = `+ detalhes`;
	botao.classList.add('btn', 'btn-primary');
	botao.setAttribute('data-toggle', 'modal');
	botao.setAttribute('data-target', '#myModal');
	botao.setAttribute('data-cliente-id', basicClient.id);
	botao.addEventListener('click', () => modalHandle(botao));
}
