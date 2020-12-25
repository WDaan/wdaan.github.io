<template>
  <div class="container-fluid">
    <NavBar />
    <div class="lg:container lg:mx-auto container-block">
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
