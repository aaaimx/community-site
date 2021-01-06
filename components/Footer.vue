<template>
  <div class="column is-8 is-offset-2">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a
            class="social-link"
            :href="link.href"
            target="_blank"
            :key="link.icon"
            v-for="link in socialLinks"
          >
            <b-icon :icon="link.icon"></b-icon>
          </a>
          <a
            class="social-link"
            href="mailto:contact@aaaimx.org"
            target="_blank"
          >
            <b-icon icon="email"></b-icon>
          </a>
        </div>
      </div>
      <div class="level-right">
        <small class="level-item">
          &copy; AAAIMX Student Chapter. All Rights Reserved.
        </small>
      </div>
    </nav>
  </div>
</template>
<style>
.social-link {
  color: var(--textLight);
  margin-right: 0.3rem;
}
</style>

<script>
import socialLinks from './social_links'
export default {
  data () {
    return { socialLinks }
  }
}
</script>
