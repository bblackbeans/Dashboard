<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { tableManagement } from './util';

	// GET BASIC CLIENTES FROM LOAD FUNCTION
	export let data: PageData;

	// START ON PAGE LOAD
	onMount(() => {
		try {
			// PASS EACH CLIENT TO THE TABLE CREATOR
			data.clientData.payload.forEach((cliente) => {
				tableManagement(cliente);
			});
		} catch (error) {
			console.error('Erro ao obter dados da API:', error);
		}
	});
</script>

<table id="tabela-clientes">
	<thead>
		<tr>
			<th>ID</th>
			<th>Nome</th>
			<th>Email</th>
			<th>Site</th>
			<th>Telefone</th>
			<th>Status</th>
		</tr>
	</thead>
	<tbody>
		<!-- As linhas serão adicionadas dinamicamente aqui -->
	</tbody>
</table>

<!-- Adicione o modal -->
<div>
	<!-- class="modal fade"
	id="myModal"
	tabindex="-1"
	role="dialog"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true" -->
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">CNPJs do Cliente</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body row px-5">
				<!-- Conteúdo do modal -->
				<div class="row  gap-3 align-items-center justify-content-center">
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
					<div class="cnpj border col-3 text-center py-2">CNPJ (nome_cliente)</div>
				</div>
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

	tr,
	th,
	tbody {
		border: 1px solid rgba(107, 122, 144, 0.1) !important;
	}

	.modal-dialog {
		max-width: 80% !important;
	}
</style>
