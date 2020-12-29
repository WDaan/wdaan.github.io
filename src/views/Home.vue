<template>
  <div>
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
