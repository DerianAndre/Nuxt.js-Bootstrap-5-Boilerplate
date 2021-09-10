<template>
	<div class="embed">
		<div class="ratio" :class="`ratio-${ratio}`">
			<iframe class="lazy lazyload" :data-src="src" :title="title" allowfullscreen></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lazy-embed',
		props: {
			src: {
				type: String,
				required: true
			},
			title: {
				type: String,
			},
			ratio: {
				type: String,
				default: '16x9'
			}
		}
	}
</script>