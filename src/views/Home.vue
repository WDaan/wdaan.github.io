<template>
  <div>
    <div class="w-full m-0 p-0 bg-cover bg-bottom header">
      <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p class="text-white font-extrabold text-3xl md:text-5xl">
          Yeet
        </p>
      </div>
    </div>

    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-64 md:-mt-32">
      <div class="mx-0 sm:mx-6">
        <div class="bg-gray-200 w-10/12 mx-auto text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
          <AppsSection />
        </div>
      </div>
    </div>
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
<style lang="css" scoped>
.header {
  background-image:url('~@/assets/cover.jpg'); height: 60vh; max-height:460px;
}
</style>
