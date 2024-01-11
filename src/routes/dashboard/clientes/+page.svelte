<script>
    import { onMount } from 'svelte';
  
    let clientes = [];
    let proximoID = 1;
  
    /**
     * @param {string | URL} url
     * @returns {Promise<any>}
     */
    async function fazGet(url) {
      const response = await fetch(url);
      return response.json();
    }
  
    /**
     * @param {any} usuario
     */
    function criarLinha(usuario) {
      const tabela = document.getElementById('tabela-clientes');
      // @ts-ignore
      const novaLinha = tabela.insertRow();
  
      const celulaID = novaLinha.insertCell();
      celulaID.textContent = proximoID++;
  
      const celulaNome = novaLinha.insertCell();
      celulaNome.textContent = usuario.nome_fantasia;
  
      const celulaEmail = novaLinha.insertCell();
      celulaEmail.textContent = usuario.email;
  
      const celuladdd = novaLinha.insertCell();
      celuladdd.textContent = usuario.ddd;
  
      const celulaTelefone = novaLinha.insertCell();
      celulaTelefone.textContent = usuario.telefone;

      const celulaStatus = novaLinha.insertCell();
      celulaStatus.textContent = usuario.status;

      const celulaBotao = novaLinha.insertCell();
      const botao = document.createElement('button');
      botao.textContent = 'Mais Informações';
      botao.classList.add('btn', 'btn-primary');
      botao.setAttribute('data-toggle', 'modal');
      botao.setAttribute('data-target', '#myModal');
      botao.setAttribute('data-cliente-id', usuario.id);
      botao.addEventListener('click', () => abrirModal(botao));
      celulaBotao.appendChild(botao);
}


	/**
	 * @param {HTMLButtonElement} botao
	 */
async function abrirModal(botao) {
  const clienteID = botao.getAttribute('data-cliente-id');

  try {
    const resposta = await fazGet(`https://client-management-service-edejqdvmyq-uc.a.run.app/clients/${clienteID}`);
    console.log(resposta)
    const dadosCliente = resposta.clientContract; // Preciso ajustar resposta.XXXX para o que recebo da api

    const modalBody = document.querySelector('#myModal .modal-body');
    
    if (modalBody) {
      // Aqui posso adicionar os dados do modal
      modalBody.innerHTML = `
      <p><strong>Bairro:</strong> ${dadosCliente.bairro}</p>
        <p><strong>Bairro Faturamento:</strong> ${dadosCliente.bairro_faturamento}</p>
        <p><strong>CEP:</strong> ${dadosCliente.cep}</p>
        <p><strong>CEP Faturamento:</strong> ${dadosCliente.cep_faturamento}</p>
        <p><strong>Cidade:</strong> ${dadosCliente.cidade}</p>
        <p><strong>Cidade Faturamento:</strong> ${dadosCliente.cidade_faturamento}</p>
        <p><strong>CPF/CNPJ:</strong> ${dadosCliente.cnpj_cpf}</p>
        <p><strong>CPF Representante:</strong> ${dadosCliente.cpf_representante}</p>
        <p><strong>CPF Segundo Contato:</strong> ${dadosCliente.cpf_segundo_contato}</p>
        <p><strong>CPF Terceiro Contato:</strong> ${dadosCliente.cpf_terceiro_contato}</p>
        <p><strong>DDD:</strong> ${dadosCliente.ddd}</p>
        <p><strong>DDD Faturamento:</strong> ${dadosCliente.ddd_faturamento}</p>
        <p><strong>DDD Financeiro:</strong> ${dadosCliente.ddd_financeiro}</p>
        <p><strong>Email:</strong> ${dadosCliente.email}</p>
        <p><strong>Email Boleto/Notas:</strong> ${dadosCliente.email_boleto_notas}</p>
        <p><strong>Email Financeiro:</strong> ${dadosCliente.email_financeiro}</p>
        <p><strong>Email Representante:</strong> ${dadosCliente.email_representante}</p>
        <p><strong>Email Segundo Contato:</strong> ${dadosCliente.email_segundo_contato}</p>
        <p><strong>Email Terceiro Contato:</strong> ${dadosCliente.email_terceiro_contato}</p>
        <p><strong>Endereço Atendimento:</strong> ${dadosCliente.endereco_atendimento}</p>
        <p><strong>Endereço Faturamento:</strong> ${dadosCliente.endereco_faturamento}</p>
        <p><strong>Estado:</strong> ${dadosCliente.estado}</p>
        <p><strong>Estado Civil Representante:</strong> ${dadosCliente.estado_civil_representante}</p>
        <p><strong>Estado Civil Segundo Contato:</strong> ${dadosCliente.estado_civil_segundo_contato}</p>
        <p><strong>Estado Civil Terceiro Contato:</strong> ${dadosCliente.estado_civil_terceiro_contato}</p>
        <p><strong>Estado Faturamento:</strong> ${dadosCliente.estado_faturamento}</p>
        <p><strong>Fax:</strong> ${dadosCliente.fax}</p>
        <p><strong>Fax Faturamento:</strong> ${dadosCliente.fax_faturamento}</p>
        <p><strong>Inscrição Estadual:</strong> ${dadosCliente.insc_estadual}</p>
        <p><strong>Nascimento Representante:</strong> ${dadosCliente.nascimento_representante}</p>
        <p><strong>Nascimento Segundo Contato:</strong> ${dadosCliente.nascimento_segundo_contato}</p>
        <p><strong>Nascimento Terceiro Contato:</strong> ${dadosCliente.nascimento_terceiro_contato}</p>
        <p><strong>Nome Fantasia:</strong> ${dadosCliente.nome_fantasia}</p>
        <p><strong>Nome Representante:</strong> ${dadosCliente.nome_representante}</p>
        <p><strong>Nome Segundo Contato:</strong> ${dadosCliente.nome_segundo_contato}</p>
        <p><strong>Nome Terceiro Contato:</strong> ${dadosCliente.nome_terceiro_contato}</p>
        <p><strong>Profissão Representante:</strong> ${dadosCliente.profissao_representante}</p>
        <p><strong>Profissão Segundo Contato:</strong> ${dadosCliente.profissao_segundo_contato}</p>
        <p><strong>Profissão Terceiro Contato:</strong> ${dadosCliente.profissao_terceiro_contato}</p>
        <p><strong>Razão Social:</strong> ${dadosCliente.razao_social}</p>
        <p><strong>Responsável Financeiro:</strong> ${dadosCliente.responsavel_financeiro}</p>
        <p><strong>RG Representante:</strong> ${dadosCliente.rg_representante}</p>
        <p><strong>RG Segundo Contato:</strong> ${dadosCliente.rg_segundo_contato}</p>
        <p><strong>RG Terceiro Contato:</strong> ${dadosCliente.rg_terceiro_contato}</p>
        <p><strong>Site:</strong> ${dadosCliente.site}</p>
        <p><strong>Telefone:</strong> ${dadosCliente.telefone}</p>
        <p><strong>Telefone Faturamento:</strong> ${dadosCliente.telefone_faturamento}</p>
        <p><strong>Telefone Financeiro:</strong> ${dadosCliente.telefone_financeiro}</p>
        <p><strong>Telefone Representante:</strong> ${dadosCliente.telefone_representante}</p>
        <p><strong>Telefone Segundo Contato:</strong> ${dadosCliente.telefone_segundo_contato}</p>
        <p><strong>Telefone Terceiro Contato:</strong> ${dadosCliente.telefone_terceiro_contato}</p>
      `;
    } else {
      console.error("Elemento modalBody não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao obter dados do cliente:", error);
  }
}



  
    async function main() {
      try {
        clientes = await fazGet("https://client-management-service-edejqdvmyq-uc.a.run.app/clients");
  
        clientes.forEach((/** @type {any} */ cliente) => {
          criarLinha(cliente);
        });
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    }
  
    onMount(main);

    
    
  </script>
  
  <table id="tabela-clientes">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>DDD</th>
        <th>Telefone</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <!-- As linhas serão adicionadas dinamicamente aqui -->
    </tbody>
  </table>

<!-- Adicione o modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Dados do Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Conteúdo do modal -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

  <style>
    table {
        width: 99%;
        background-color: white;
        border-radius: 3px;
        border: 1px solid rgba(107, 122, 144, 0.1) !important;
        margin-top: 2rem;
        text-align: center;
    }

    tr,th,tbody {
        border: 1px solid rgba(107, 122, 144, 0.1) !important;
    }

  </style>
  