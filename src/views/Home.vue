<template>
  <div>
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">Yeet</h1>
          <a
            href="#Apps"
            class="btn btn-primary white--text mt-5"
          >
            Get Started
          </a
          >
        </div>
      </div>
    </header>
    <AppsSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppsSection from '@/components/AppsSection.vue'

export default defineComponent({
  name: 'Home',
  components: { AppsSection }
})
</script>
