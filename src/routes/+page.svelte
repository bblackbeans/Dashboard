<svelte:head>
	<title>Home - Black Beans</title>
	<meta name="description" content="Terminal Black Beans para visualização de Logs" />

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
