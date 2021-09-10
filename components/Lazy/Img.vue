<template>
	<img class="lazy lazyload" :alt="alt" :data-src="dataSrc" :src="lazySrc"/>
</template>

<script>
	export default {
		name: 'lazy-img',
		props: {
			src: {
				type: String
			},
			alt: {
				type: String
			}
		},
		data() {
			return {
				dataSrc: false,
				dataLoading: false,
				lazySrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=',
			}
		},
		created() {
			if(this.src)  {
				const regexUrl = /^(https?:\/\/|\/)/i;
				const isExternal = regexUrl.test(this.src) ? true : false;
				this.dataSrc = isExternal ? this.src : require(`~/assets/img/${this.src}`);
			} else {
				this.dataSrc = this.lazySrc;
			}
		}
	}
</script>