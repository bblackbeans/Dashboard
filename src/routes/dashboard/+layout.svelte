<script>
	import '../../global.scss';
	import Header from '$lib/components/header.svelte';

	let showSubMenu1 = false;
	let showSubMenu2 = false;
	let titleSubMenu1 = 'Cadastro de Clientes';
	let titleSubMenu2 = 'Contratos';

	function toggleSubMenu1() {
		showSubMenu1 = !showSubMenu1;
		showSubMenu2 = false;
	}

	function toggleSubMenu2() {
		showSubMenu2 = !showSubMenu2;
		showSubMenu1 = false;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
	<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<!-- BOOTSTRAP CSS -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>

	<script
		defer
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"
	></script>
</svelte:head>

<main>
	<Header />
	<section>
		<div class="row" id="sectionMain">
			<div id="mainMenu" class="col-md-3">
				<div class="d-flex flex-column">
					<div class="profile">
						<img src="" alt="Foto do Usuario" />
						<h3>Nome do Usuário</h3>
					</div>
					<div class="d-flex flex-row">
						<div>
							<ul>
								<li on:click={toggleSubMenu1}>
									<img class="logos" src="src\lib\assets\icons8-clientes-50.png" alt="" />
								</li>
								<li on:click={toggleSubMenu2}>
									<img
										class="logos"
										src="src\lib\assets\icons8-assinando-um-documento-50.png"
										alt=""
									/>
								</li>
							</ul>
						</div>

						{#if showSubMenu1}
							<div class="subMenu">
								<h4 class="subTitle">{titleSubMenu1}</h4>
								<ul>
									<li>
										<a class="menuLinks" href="/dashboard/cadastro-clientes">Cadastro de Clientes</a
										>
									</li>
									<!-- <li><a class="menuLinks" href="#">Status de Clientes</a></li> -->
								</ul>
							</div>
						{/if}

						{#if showSubMenu2}
							<div class="subMenu">
								<h4 class="subTitle">{titleSubMenu2}</h4>
								<ul>
									<li>
										<a class="menuLinks" href="/dashboard/cadastro-contratos"
											>Cadastro de Contratos</a
										>
									</li>
									<!-- <li><a class="menuLinks" href="/">Contratos 2</a></li> -->
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<div id="slot" class="col-md-9">
				<slot />
			</div>
		</div>
	</section>
</main>

<style type="scss">
	#mainMenu {
		box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.2);
		z-index: 9990;
		padding-right: unset;
		min-height: 95vh;
	}

	#slot {
		background-color: #f0f3f7;
	}

	main {
		min-height: 100vh;
	}

	li {
		list-style: none;
		cursor: pointer;
	}

	ul {
		padding-left: unset;
		cursor: pointer;
	}

	.profile {
		min-height: 25vh;
		align-self: center;
		text-align: center;
		margin-top: 1rem;
	}

	.logos {
		width: 100%;
		padding: 10px 10px 10px 10px;
		background-color: #f0f3f7;
		border: 1px solid rgba(107, 122, 144, 0.1) !important;
	}

	.subMenu {
		width: 85%;
	}

	.subTitle {
		font-size: 1.2rem;
		height: 71.94px;
		display: flex;
		align-items: center;
		background-color: #131312;
		font-weight: bolder;
		color: #ff9901;
		padding-left: 15px;
	}

	.menuLinks {
		padding-left: 15px;
		color: #131312;
	}

	.menuLinks:hover {
		color: #ff9901;
	}
</style>
