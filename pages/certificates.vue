<template>
  <div class="card box">
    <div class="card-image" v-show="cert.uuid">
      <figure class="image is-4by3">
        <img :src="cert.file + '?dummy=' + Math.random()" />
      </figure>
    </div>
  </div>
</template>

<style>
@page {
  size: landscape;
}

@media print {
  html,
  body {
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }
}
</style>

<script>
var config = {
  method: 'GET',
  mode: 'no-cors'
}
export default {
  fetchOnServer: false,
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.cert.file
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        }
      ]
    }
  },
  computed: {
    title() {
      if (this.cert) return `CERTFICATE OF ${this.cert.type} | ${this.cert.to}`
      return 'AAAIMX Community | Certificates'
    },
    description () {
      if (this.cert) return `The AAAI International Student Chapter recognizes ${this.cert.to} ${this.cert.description}`
      return 'Contributing to more students having knowledge of Artificial Intelligence and other increasingly popular related fields'
    },
    url () {
      return process.env.baseUrl + this.$route.fullPath
    }
  },
  async asyncData ({ $axios, route }) {
    const cert = await $axios.$get(
      'https://aaaimx-admin.herokuapp.com/api/certificates/' + route.query.id,
      config
    )
    return {
      cert
    }
  }
}
</script>
