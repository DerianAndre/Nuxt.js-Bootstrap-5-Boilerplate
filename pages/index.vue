<template>
	<div class="container">
		<div class="card shadow">
			<div class="card-body">
				<h1>Hello world!</h1>
				<p class="lead">A ready to go boilerplate with some modifications to bootstrap.</p>
				<p>Lazy components with <a href="https://github.com/aFarkas/lazysizes">lazysizes</a> use <code>LazyImg</code> or <code>lazy-img</code> and <code>LazyEmbed</code> or <code>lazy-embed</code> for embeds (ratio-16x9 by default), check the components for props.</p>
				<div class="row text-center">
					<div class="col">
						<LazyImg class="img-fluid" src="https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg" alt="Seashore Under White and Blue Sky during Sunset" />
						<a class="btn btn-link text-muted small" href="https://www.pexels.com/es-es/foto/seashore-bajo-cielo-blanco-y-azul-durante-la-puesta-de-sol-210205/">Seashore Under White and Blue Sky during Sunset</a>
					</div>
					<div class="col">
						<LazyEmbed style="--bs-aspect-ratio: 66.5%;" ratio="custom" src="https://www.youtube.com/embed/Y1y9GAjuSt8" title="(8 Hours) 4K Campfire On Beach - Crackling Fire with Ocean Waves Sounds" />
					</div>
				</div>
			</div>
			<div class="card-footer bg-transparent border-top py-3">
				<p class="text-muted m-0">Made with ❤️ by <a href="https://derianandre.com/">DerianAndre</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>

</style>