<template>
  <article>
    <b-container>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </b-container>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()
    console.log({page});
    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      page
    }
  }
}
</script>