<svelte:head>
	<title>Home - Black Beans</title>
	<meta name="description" content="Terminal Black Beans para visualização de Logs" />
</svelte:head>

<div class="container d-flex flex-column justify-content-center my-auto">
	<div class="row">
		<h1 class="px-0">Dashboard Black Beans</h1>
	</div>

	<div class="row">
		<button class="mt-2 rounded-3 bg-dark"> <a href="/dashboard">Ir para o painel</a></button>
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
	}

	button {
		color: #ff9900;
		max-width: fit-content;
	}

	a {
		color: #ff9900;
		text-decoration: none;
	}
</style>
