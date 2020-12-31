<template>
  <div class="h-screen bg-gray-50">
    <NavBar />
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: { NavBar }
})
</script>
