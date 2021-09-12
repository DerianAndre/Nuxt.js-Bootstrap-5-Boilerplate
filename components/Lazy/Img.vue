<template>
	<nuxt-img class="lazy lazyload" :alt="alt" :data-src="dataSrc" :src="lazySrc"/>
</template>

<script>
	export default {
		name: 'lazy-img',
		props: {
			src: {
				type: String | Boolean
			},
			alt: {
				type: String
			}
		},
		computed: {
			lazySrc() {
				return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
			},
			dataSrc() {
				if(this.src)  {
					const regexUrl = /^(https?:\/\/|\/)/i;
					const isExternal = regexUrl.test(this.src) ? true : false;
					return isExternal ? this.src : require(`~/assets/img/${this.src}`);
				}
				return this.lazySrc;
			}
		}
	}
</script>