export default {
    head() {
      const head = {
        title: this.page.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.page.meta_description
            ? this.page.meta_description
            : null,
          },
          // OGP
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.page.meta_title ? this.page.meta_title : this.page.title
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.page.meta_description
            ? this.page.meta_description
            : null,
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.page.meta_image ? 'https://fewo-lamm.de' + this.page.meta_image : ''
          },
          {
            hid: 'og:locale',
            property: 'og:locale',
            content: 'de_DE'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://fewo-lamm.de' + this.$route.path
          },
        ]
      };
  
      return head;
    }
  };