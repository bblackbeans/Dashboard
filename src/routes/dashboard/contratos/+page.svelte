<script>
  import { onMount } from 'svelte';

  let contratos = [];
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
    const tabela = document.getElementById('tabela-contratos');
    // @ts-ignore
    const novaLinha = tabela.insertRow();

    const celulaID = novaLinha.insertCell();
    celulaID.textContent = proximoID++;

    const celulaNome = novaLinha.insertCell();
    celulaNome.textContent = usuario.cnpj_cpf || 'Campo não preenchido';

    const celulaEmail = novaLinha.insertCell();
    celulaEmail.textContent = usuario.email_contato || 'Campo não preenchido';

    const celuladdd = novaLinha.insertCell();
    celuladdd.textContent = usuario.tipo || 'Campo não preenchido';

    const celulaTelefone = novaLinha.insertCell();
    celulaTelefone.textContent = usuario.data_vencimento || 'Campo não preenchido';

    const celulaStatus = novaLinha.insertCell();
    celulaStatus.textContent = usuario.termino_vigencia || 'Campo não preenchido';
    celulaStatus.style.color = 'red';

    const celulaBotao = novaLinha.insertCell();
    const botao = document.createElement('button');
    botao.textContent = 'Mais Informações';
    botao.classList.add('btn', 'btn-primary');
    botao.setAttribute('data-toggle', 'modal');
    botao.setAttribute('data-target', '#myModal');
    botao.setAttribute('data-contratos-id', usuario.id);
    botao.addEventListener('click', () => abrirModal(botao));
    celulaBotao.appendChild(botao);
}


/**
 * @param {HTMLButtonElement} botao
 */
async function abrirModal(botao) {
const contratoID = botao.getAttribute('data-contratos-id');

try {
  const resposta = await fazGet(`https://client-management-service-edejqdvmyq-uc.a.run.app/contracts/${contratoID}`);
  console.log(resposta)
  const dadosContrato = resposta.contractRegistration;  // Preciso ajustar resposta.XXXX para o que recebo da api

  const modalBody = document.querySelector('#myModal .modal-body');
  
  if (modalBody) {
    // Aqui posso adicionar os dados do modal
    modalBody.innerHTML = `
    <p><strong>CNPJ/CPF:</strong> ${dadosContrato.cnpj_cpf}</p>
    <p><strong>Razão social:</strong> ${dadosContrato.razao_social}</p>
    <p><strong>Nome fantasia:</strong> ${dadosContrato.nome_fantasia}</p>
    <p><strong>Nome contato:</strong> ${dadosContrato.nome_contato}</p>
    <p><strong>Email contato:</strong> ${dadosContrato.email_contato}</p>
    <p><strong>Serviços prestados:</strong> ${dadosContrato.servicos_prestados}</p>
    <p><strong>Emissão de nota?:</strong> ${dadosContrato.emissao_de_nota}</p>
    <p><strong>Retenção ISS?:</strong> ${dadosContrato.retencao_iss_emissao_nota_fiscal}</p>
    <p><strong>Forma de recebimento:</strong> ${dadosContrato.forma_recebimento}</p>
    <p><strong>Tipo de contrato:</strong> ${dadosContrato.tipo}</p>
    <p><strong>Início de vigência:</strong> ${dadosContrato.inicio_vigencia}</p>
    <p><strong>Término de vigência:</strong> ${dadosContrato.termino_vigencia}</p>
    <p><strong>Periodicidade:</strong> ${dadosContrato.periodicidade}</p>
    <p><strong>Valor do período:</strong> ${dadosContrato.valor_do_periodo}</p>
    <p><strong>Observações adicionais:</strong> ${dadosContrato.observacoes_adicionais}</p>
    <p><strong>Valor total dos serviços:</strong> ${dadosContrato.valor_total_servicos}</p>
    <p><strong>Número de parcelas:</strong> ${dadosContrato.numero_parcelas}</p>
    <p><strong>Data de vencimento:</strong> ${dadosContrato.data_vencimento}</p>
    <p><strong>Observações adicionais nota fiscal:</strong> ${dadosContrato.observacoes_adicionais_nota_fiscal}</p>

    `;
  } else {
    console.error("Elemento modalBody não encontrado.");
  }
} catch (error) {
  console.error("Erro ao obter dados do contrato:", error);
}
}




  async function main() {
    try {
      contratos = await fazGet("https://client-management-service-edejqdvmyq-uc.a.run.app/contracts/expiring");
      contratos.forEach((/** @type {any} */ contratos) => {
        criarLinha(contratos);
      });
    } catch (error) {
      console.error("Erro ao obter dados da API:", error);
    }
  }

  onMount(main);

  
  
</script>

<table id="tabela-contratos">
  <thead>
    <tr>
      <th>ID</th>
      <th>CNPJ/CPF</th>
      <th>Email</th>
      <th>Tipo</th>
      <th>Data de vencimento</th>
      <th>Término vigência</th>
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
      <h5 class="modal-title" id="exampleModalLabel">Dados do Contrato</h5>
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

  .modal-content {
      width: 180%!important;
    }


</style>
