<script>
	import '../../global.scss';
	import Header from '$lib/components/header.svelte';
	import icon_clients from '$lib/assets/icon_clients.png';
	import icon_contracts from '$lib/assets/icon_contracts.png';
	import { page } from '$app/stores';

	let showSubMenu1 = false;
	let showSubMenu2 = false;
	let titleSubMenu1 = 'Clientes';
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
	<link
		rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet" />

	<script
		defer
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"
	></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</svelte:head>

<main>
	<Header />
	<section>
		<div class="row justify-content-between" id="sectionMain">
			<div id="mainMenu" class="col-md-3">
				<div class="d-flex flex-column">
					<div class="profile">
						<img
							class="rounded-circle mb-2"
							src={$page.data.session?.user?.image}
							alt="Foto do Usuario"
							referrerpolicy="no-referrer"
						/>
						<h4>{$page.data.session?.user?.name}</h4>
					</div>
					<div class="d-flex flex-row">
						<div>
							<ul class="logos d-flex flex-column">
								<button on:click={toggleSubMenu1}>
									<img src={icon_clients} alt="Icone Clientes" />
								</button>
								<button on:click={toggleSubMenu2}>
									<img src={icon_contracts} alt="Icone contratos" />
								</button>
							</ul>
						</div>

						{#if showSubMenu1}
							<div class="subMenu">
								<h5 class="subTitle">{titleSubMenu1}</h5>
								<ul>
									<li><a class="menuLinks" href="/dashboard/clientes">Clientes</a></li>
									<li>
										<a class="menuLinks" href="/dashboard/cadastro-clientes">Cadastro de Clientes</a
										>
									</li>
								</ul>
							</div>
						{/if}

						{#if showSubMenu2}
							<div class="subMenu">
								<h5 class="subTitle">{titleSubMenu2}</h5>
								<ul>
									<li>
										<a class="menuLinks" href="/dashboard/contratos">Contratos para vencer</a>
									</li>
									<li>
										<a class="menuLinks" href="/dashboard/cadastro-contratos"
											>Cadastro de Contratos</a
										>
									</li>
								</ul>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<div id="slot" class="col-md-9 mr-4">
				<slot />
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	#mainMenu {
		max-width: 350px;
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
		font-family: amiri, serif;
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
		button {
			border: none;
			background: none;
		}

		img {
			width: 60px;
			padding: 10px 10px 10px 10px;
			background-color: #f0f3f7;
			border: 1px solid rgba(107, 122, 144, 0.1) !important;
		}
	}

	.subMenu {
		width: 85%;
	}

	.subTitle {
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
