<script>
	import { page } from '$app/stores';
</script>

<div class="container py-4">
	<div class="row">
		<div class="col-12">
			<h2>Bem Vindo ao Painel {$page.data.session?.user?.name}</h2>
		</div>
	</div>
</div>
