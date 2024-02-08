// CLIENT ROUTE RESPONSE
export type RouteResponse<T> = {
	status: number;
	payload: T;
};

// BASIC CLIENT
export type BasicClient = {
	id: string;
	nome_cliente: string;
	site: string;
	email: string;
	telefone: string;
	status: string;
};

// CLIENT  CNPJ
export type ClientCnpj = {
	id: string;
	razao_social: string;
	nome_cliente: string;
	site: string;
	cnpj_cpf: string;
	insc_estadual: string;
	email: string;

	//   INFO ATENDIMENTO
	endereco_atendimento: string;
	bairro: string;
	cep: string;
	cidade: string;
	estado: string;
	ddd: string;
	fax: string;
	telefone: string;

	//   INFO FATURAMENTO
	endereco_faturamento: string;
	bairro_faturamento: string;
	cep_faturamento: string;
	cidade_faturamento: string;
	estado_faturamento: string;
	ddd_faturamento: string;
	fax_faturamento: string;
	telefone_faturamento: string;

	//   RESPONSAVEL FINANCEIRO
	responsavel_financeiro: string;
	ddd_financeiro: string;
	telefone_financeiro: string;
	email_financeiro: string;

	// REPRESENTANTE LEGAL (Obrigatorio)
	nome_representante: string;
	estado_civil_representante: string;
	profissao_representante: string;
	rg_representante: string;
	cpf_representante: string;
	email_representante: string;
	telefone_representante: string;
	nascimento_representante: string;

	// INFO BOLETOS E NOTAS FISCAIS
	emissao_nota: string;
	retencao_iss: string;
	forma_recebimento: string;
	email_boleto_notas: string;

	// TESTEMUNHA / SEGUNDO CONTATO
	nome_segundo_contato: string;
	estado_civil_segundo_contato: string;
	profissao_segundo_contato: string;
	rg_segundo_contato: string;
	cpf_segundo_contato: string;
	email_segundo_contato: string;
	telefone_segundo_contato: string;
	nascimento_segundo_contato: string;

	//   TERCEIRO CONTATO
	nome_terceiro_contato: string;
	estado_civil_terceiro_contato: string;
	profissao_terceiro_contato: string;
	rg_terceiro_contato: string;
	cpf_terceiro_contato: string;
	email_terceiro_contato: string;
	telefone_terceiro_contato: string;
	nascimento_terceiro_contato: string;
};

export type Contract = {
	id: string;
	cnpj_cpf: string;
	tipo: string;
	servicos_prestados: string[];
	inicio_vigencia: string;
	termino_vigencia: string;
	data_vencimento: string;
	valor_total: string;
	observacoes_adicionais?: string;

	//   RECORRENTE
	periodicidade: string;
	//   AVULSO
	numero_parcelas: string;
};

export type ModalResponse = {
	clientCnpj: ClientCnpj;
	contracts: Contract[];
};
